import { useState } from 'react';
import type { PeerInfo } from '../../core/protocol/types';

interface Props {
  peerInfo: PeerInfo | null;
  onDisconnect: () => void;
  onCtrlAltDel: () => void;
  onLockScreen: () => void;
  onRefresh: () => void;
  onFullscreen: () => void;
  onFileTransfer: () => void;
  onSwitchDisplay?: (display: number) => void;
  currentDisplay?: number;
}

export function Toolbar({
  peerInfo,
  onDisconnect,
  onCtrlAltDel,
  onLockScreen,
  onRefresh,
  onFullscreen,
  onFileTransfer,
  onSwitchDisplay,
  currentDisplay = 0,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-10">
      {/* Collapsed trigger */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-rustdesk-surface/90 backdrop-blur border border-rustdesk-border border-t-0 rounded-b-lg px-4 py-1 text-xs text-rustdesk-muted hover:text-white transition-colors"
        >
          {expanded ? 'Hide' : peerInfo ? `${peerInfo.username || peerInfo.hostname || 'Remote'} \u25BE` : 'Menu \u25BE'}
        </button>
      </div>

      {/* Expanded toolbar */}
      {expanded && (
        <div className="bg-rustdesk-surface/95 backdrop-blur border-b border-rustdesk-border px-4 py-2 flex items-center justify-between gap-2">
          {/* Peer info */}
          <div className="text-sm text-rustdesk-muted">
            {peerInfo && (
              <span>
                {peerInfo.username}@{peerInfo.hostname} ({peerInfo.platform})
              </span>
            )}
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
