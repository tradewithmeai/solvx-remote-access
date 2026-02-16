import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppStore } from '../../api/store';
import { PasswordDialog } from '../components/PasswordDialog';
import { TwoFADialog } from '../components/TwoFADialog';
import { PeerCard } from '../components/PeerCard';

export function ConnectPage() {
  const [remoteId, setRemoteId] = useState('');
  const navigate = useNavigate();
  const {
    status,
    statusDetail,
    error,
    passwordRequired,
    passwordRetry,
    twoFARequired,
    twoFARetry,
    twoFAEnableTrustedDevices,
    recentPeers,
    serverConfig,
    connect,
    disconnect,
    submitPassword,
    submit2FA,
    dismissError,
    loadRecentPeers,
  } = useAppStore();

  useEffect(() => {
    loadRecentPeers();
  }, [loadRecentPeers]);

  // Navigate to remote page when connected
  useEffect(() => {
    if (status === 'connected') {
      navigate(`/remote/${encodeURIComponent(remoteId)}`);
    }
  }, [status, remoteId, navigate]);

  const handleConnect = () => {
    const id = remoteId.trim().replace(/\s+/g, ' ');
    if (!id) return;
    connect(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleConnect();
  };

  const isConnecting = status === 'connecting' || status === 'authenticating';

  return (
    <div className="min-h-screen bg-rustdesk-dark flex flex-col">
      {/* Header */}
      <header className="border-b border-rustdesk-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-rustdesk-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            RD
          </div>
          <h1 className="text-lg font-semibold text-white">RustDesk</h1>
        </div>
        <Link
          to="/settings"
          className="text-rustdesk-muted hover:text-white transition-colors text-sm"
        >
          Settings
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Connection form */}
          <div className="space-y-2">
            <label className="block text-sm text-rustdesk-muted">
              Remote Desktop ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={remoteId}
                onChange={e => setRemoteId(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter ID or IP address"
                disabled={isConnecting}
                className="flex-1 bg-rustdesk-surface border border-rustdesk-border rounded-lg px-4 py-3 text-white placeholder-rustdesk-muted/50 focus:outline-none focus:ring-2 focus:ring-rustdesk-primary focus:border-transparent disabled:opacity-50 text-lg tracking-wider"
                autoFocus
              />
              <button
                onClick={isConnecting ? disconnect : handleConnect}
                disabled={!remoteId.trim() && !isConnecting}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isConnecting
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-rustdesk-primary hover:bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {isConnecting ? 'Cancel' : 'Connect'}
              </button>
            </div>
          </div>

          {/* Status */}
          {isConnecting && (
            <div className="flex items-center gap-3 text-rustdesk-muted text-sm">
              <div className="w-4 h-4 border-2 border-rustdesk-primary border-t-transparent rounded-full animate-spin" />
              {statusDetail || 'Connecting...'}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 flex items-start justify-between">
              <div>
                <p className="text-red-400 font-medium text-sm">{error.title}</p>
                <p className="text-red-300 text-sm mt-1">{error.message}</p>
              </div>
              <button
                onClick={dismissError}
                className="text-red-400 hover:text-red-300 ml-4"
              >
                x
              </button>
            </div>
          )}

          {/* Server info */}
          {serverConfig.rendezvousServer && (
            <div className="text-xs text-rustdesk-muted/60">
              Server: {serverConfig.rendezvousServer}
            </div>
          )}

          {/* Recent peers */}
          {recentPeers.length > 0 && (
            <div className="space-y-3 pt-4">
              <h2 className="text-sm font-medium text-rustdesk-muted uppercase tracking-wide">
                Recent Connections
              </h2>
              <div className="grid gap-2">
                {recentPeers.map(peer => (
                  <PeerCard
                    key={peer.id}
                    peer={peer}
                    onConnect={() => {
                      setRemoteId(peer.id);
                      connect(peer.id);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-rustdesk-border px-6 py-3 text-center text-xs text-rustdesk-muted/50">
        RustDesk PWA Client &middot; Open Source Remote Desktop
      </footer>

      {/* Password dialog */}
      {passwordRequired && (
        <PasswordDialog
          isRetry={passwordRetry}
          onSubmit={submitPassword}
          onCancel={disconnect}
        />
      )}

      {/* 2FA dialog */}
      {twoFARequired && (
        <TwoFADialog
          isRetry={twoFARetry}
          enableTrustedDevices={twoFAEnableTrustedDevices}
          onSubmit={submit2FA}
          onCancel={disconnect}
        />
      )}
    </div>
  );
}
