import { useState } from 'react';
import type { PeerInfo } from '../../core/protocol/types';

interface Props {
  peerInfo: PeerInfo | null;
  latencyMs: number;
  fps: number;
  scaleMode: 'fit' | 'original';
  clipboardNotice: string | null;
  onDisconnect: () => void;
  onCtrlAltDel: () => void;
  onLockScreen: () => void;
  onRefresh: () => void;
  onFullscreen: () => void;
  onFileTransfer: () => void;
  onToggleScale: () => void;
  onSwitchDisplay?: (display: number) => void;
  currentDisplay?: number;
}

function latencyColor(ms: number): string {
  if (ms <= 0) return 'text-rustdesk-muted/50';
  if (ms < 50) return 'text-green-400';
  if (ms < 150) return 'text-yellow-400';
  return 'text-red-400';
}

export function Toolbar({
  peerInfo,
  latencyMs,
  fps,
  scaleMode,
  clipboardNotice,
  onDisconnect,
  onCtrlAltDel,
  onLockScreen,
  onRefresh,
  onFullscreen,
  onFileTransfer,
  onToggleScale,
  onSwitchDisplay,
  currentDisplay = 0,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-10">
      {/* Collapsed trigger with quality badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-1">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-rustdesk-surface/90 backdrop-blur border border-rustdesk-border border-t-0 rounded-b-lg px-4 py-1 text-xs text-rustdesk-muted hover:text-white transition-colors flex items-center gap-2"
        >
          {expanded ? 'Hide' : peerInfo ? `${peerInfo.username || peerInfo.hostname || 'Remote'}` : 'Menu'}
          {!expanded && latencyMs > 0 && (
            <span className={`font-mono text-[10px] ${latencyColor(latencyMs)}`}>
              {latencyMs}ms
            </span>
          )}
        </button>
      </div>

      {/* Clipboard notice toast */}
      {clipboardNotice && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-rustdesk-surface/95 backdrop-blur border border-rustdesk-border rounded-lg px-3 py-1.5 text-xs text-green-400 animate-pulse">
          {clipboardNotice}
        </div>
      )}

      {/* Expanded toolbar */}
      {expanded && (
        <div className="bg-rustdesk-surface/95 backdrop-blur border-b border-rustdesk-border px-4 py-2 flex items-center justify-between gap-2">
          {/* Peer info + quality metrics */}
          <div className="flex items-center gap-3 text-sm text-rustdesk-muted">
            {peerInfo && (
              <span>
                {peerInfo.username}@{peerInfo.hostname} ({peerInfo.platform})
              </span>
            )}
            <div className="flex items-center gap-2 text-xs font-mono border-l border-rustdesk-border pl-3">
              <span className={latencyColor(latencyMs)}>
                {latencyMs > 0 ? `${latencyMs}ms` : '--'}
              </span>
              <span className="text-rustdesk-muted/60">
                {fps > 0 ? `${fps}fps` : '--'}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Display switcher */}
            {peerInfo?.displays && peerInfo.displays.length > 1 && onSwitchDisplay && (
              <div className="flex items-center gap-0.5 mr-2 border-r border-rustdesk-border pr-2">
                {peerInfo.displays.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onSwitchDisplay(i)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      i === currentDisplay
                        ? 'bg-rustdesk-primary text-white'
                        : 'text-rustdesk-muted hover:bg-rustdesk-dark hover:text-white'
                    }`}
                  >
                    Display {i + 1}
                  </button>
                ))}
              </div>
            )}
            <ToolbarButton
              label={scaleMode === 'fit' ? '1:1' : 'Fit'}
              onClick={onToggleScale}
            />
            <ToolbarButton label="Files" onClick={onFileTransfer} />
            <ToolbarButton label="Refresh" onClick={onRefresh} />
            <ToolbarButton label="Fullscreen" onClick={onFullscreen} />
            <ToolbarButton label="Ctrl+Alt+Del" onClick={onCtrlAltDel} />
            <ToolbarButton label="Lock" onClick={onLockScreen} />
            <ToolbarButton
              label="Disconnect"
              onClick={onDisconnect}
              danger
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ToolbarButton({
  label,
  onClick,
  danger = false,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
        danger
          ? 'text-red-400 hover:bg-red-900/30 hover:text-red-300'
          : 'text-rustdesk-muted hover:bg-rustdesk-dark hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}
