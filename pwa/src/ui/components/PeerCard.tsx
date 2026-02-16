interface Peer {
  id: string;
  username?: string;
  hostname?: string;
  platform?: string;
  lastSeen: number;
}

interface Props {
  peer: Peer;
  onConnect: () => void;
}

const platformIcons: Record<string, string> = {
  Windows: 'W',
  Linux: 'L',
  'Mac OS': 'M',
  Android: 'A',
};

export function PeerCard({ peer, onConnect }: Props) {
  const timeAgo = formatTimeAgo(peer.lastSeen);

  return (
    <button
      onClick={onConnect}
      className="w-full flex items-center gap-3 bg-rustdesk-surface border border-rustdesk-border rounded-lg px-4 py-3 hover:border-rustdesk-primary/50 hover:bg-rustdesk-surface/80 transition-colors text-left group"
    >
      {/* Platform icon */}
      <div className="w-9 h-9 bg-rustdesk-dark rounded-lg flex items-center justify-center text-rustdesk-muted text-sm font-medium shrink-0">
        {platformIcons[peer.platform || ''] || '?'}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white font-mono text-sm truncate">
            {peer.id}
          </span>
        </div>
        <div className="text-xs text-rustdesk-muted truncate">
          {[peer.username, peer.hostname].filter(Boolean).join('@') || 'Unknown'}
          {timeAgo && ` \u00b7 ${timeAgo}`}
        </div>
      </div>

      {/* Connect arrow */}
      <span className="text-rustdesk-muted group-hover:text-rustdesk-primary transition-colors">
        &rarr;
      </span>
    </button>
  );
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return '';
}
