import { useRef } from 'react';
import Long from 'long';
import { useAppStore, type FileTransferJob } from '../../api/store';
import type { FileEntry } from '../../core/protocol/types';

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  return (bytes / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
}

function formatDate(ts: number): string {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function isDir(entry: FileEntry): boolean {
  const t = entry.entry_type ?? 0;
  return t === 0 || t === 2 || t === 3; // Dir, DirLink, DirDrive
}

export function FileTransferPanel() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    remotePath,
    remoteEntries,
    fileJobs,
    browseRemoteDir,
    downloadFile,
    uploadFiles,
    cancelFileJob,
    closeFileTransfer,
  } = useAppStore();

  const pathParts = remotePath ? remotePath.split(/[/\\]/).filter(Boolean) : [];
  const sep = remotePath.includes('\\') ? '\\' : '/';

  const handleNavigateUp = () => {
    if (pathParts.length <= 1) {
      browseRemoteDir('');
    } else {
      browseRemoteDir(pathParts.slice(0, -1).join(sep));
    }
  };

  const handleEntryClick = (entry: FileEntry) => {
    if (isDir(entry)) {
      const newPath = remotePath ? remotePath + sep + entry.name : entry.name || '';
      browseRemoteDir(newPath);
    }
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      uploadFiles(Array.from(files));
    }
    e.target.value = '';
  };

  const sortedEntries = [...remoteEntries].sort((a, b) => {
    const aDir = isDir(a);
    const bDir = isDir(b);
    if (aDir !== bDir) return aDir ? -1 : 1;
    return (a.name || '').localeCompare(b.name || '');
  });

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-rustdesk-surface border border-rustdesk-border rounded-xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-rustdesk-border">
          <h2 className="text-white font-semibold">File Transfer</h2>
          <button
            onClick={closeFileTransfer}
            className="text-rustdesk-muted hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

        {/* Path bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-rustdesk-dark/50 border-b border-rustdesk-border">
          <button
            onClick={handleNavigateUp}
            disabled={!remotePath}
            className="text-rustdesk-muted hover:text-white disabled:opacity-30 text-sm px-2 py-1"
          >
            ..
          </button>
          <div className="flex-1 text-sm text-rustdesk-muted font-mono truncate">
            {remotePath || '(root)'}
          </div>
          <button
            onClick={handleUpload}
            className="bg-rustdesk-primary hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded transition-colors"
          >
            Upload
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileSelected}
            className="hidden"
          />
        </div>

        {/* File list */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {sortedEntries.length === 0 ? (
            <div className="text-center text-rustdesk-muted/50 py-12 text-sm">
              Empty directory
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-rustdesk-surface">
                <tr className="text-rustdesk-muted/70 text-xs text-left">
                  <th className="px-4 py-2 font-medium">Name</th>
                  <th className="px-4 py-2 font-medium w-24 text-right">Size</th>
                  <th className="px-4 py-2 font-medium w-40 text-right">Modified</th>
                  <th className="px-4 py-2 font-medium w-16"></th>
                </tr>
              </thead>
              <tbody>
                {sortedEntries.map((entry, i) => {
                  const dir = isDir(entry);
                  const size = Long.isLong(entry.size) ? entry.size.toNumber() : Number(entry.size ?? 0);
                  const mtime = Long.isLong(entry.modified_time) ? entry.modified_time.toNumber() : Number(entry.modified_time ?? 0);
                  return (
                    <tr
                      key={i}
                      className="border-t border-rustdesk-border/30 hover:bg-rustdesk-dark/30 cursor-pointer"
                      onDoubleClick={() => handleEntryClick(entry)}
                    >
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleEntryClick(entry)}
                          className={`text-left ${dir ? 'text-blue-400' : 'text-white'}`}
                        >
                          {dir ? '\uD83D\uDCC1 ' : '\uD83D\uDCC4 '}
                          {entry.name}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-rustdesk-muted text-right font-mono">
                        {dir ? '--' : formatSize(size)}
                      </td>
                      <td className="px-4 py-2 text-rustdesk-muted text-right">
                        {formatDate(mtime)}
                      </td>
                      <td className="px-4 py-2 text-right">
                        {!dir && (
                          <button
                            onClick={(e) => { e.stopPropagation(); downloadFile(entry); }}
                            className="text-rustdesk-primary hover:text-blue-400 text-xs"
                          >
                            Download
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Transfer jobs */}
        {fileJobs.length > 0 && (
          <div className="border-t border-rustdesk-border max-h-40 overflow-y-auto">
            <div className="px-4 py-2 text-xs text-rustdesk-muted/70 font-medium uppercase tracking-wide">
              Transfers
            </div>
            {fileJobs.map(job => (
              <JobRow key={job.id} job={job} onCancel={() => cancelFileJob(job.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function JobRow({ job, onCancel }: { job: FileTransferJob; onCancel: () => void }) {
  const pct = job.totalSize > 0
    ? Math.min(100, Math.round((job.transferredSize / job.totalSize) * 100))
    : 0;

  return (
    <div className="flex items-center gap-3 px-4 py-2 text-sm border-t border-rustdesk-border/20">
      <span className="text-rustdesk-muted text-xs">
        {job.isUpload ? 'UP' : 'DL'}
      </span>
      <span className="text-white truncate flex-1">{job.name}</span>
      {job.status === 'transferring' || job.status === 'pending' ? (
        <>
          <div className="w-24 bg-rustdesk-dark rounded-full h-1.5">
            <div
              className="bg-rustdesk-primary h-1.5 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-rustdesk-muted text-xs w-10 text-right">{pct}%</span>
          <button onClick={onCancel} className="text-red-400 hover:text-red-300 text-xs">
            Cancel
          </button>
        </>
      ) : job.status === 'done' ? (
        <span className="text-green-400 text-xs">Done</span>
      ) : (
        <span className="text-red-400 text-xs" title={job.error}>Error</span>
      )}
    </div>
  );
}
