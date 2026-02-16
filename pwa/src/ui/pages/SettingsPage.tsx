import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../api/store';

export function SettingsPage() {
  const { serverConfig, updateServerConfig } = useAppStore();
  const [server, setServer] = useState(serverConfig.rendezvousServer);
  const [key, setKey] = useState(serverConfig.key);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateServerConfig(server, key);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-rustdesk-dark">
      <header className="border-b border-rustdesk-border px-6 py-4 flex items-center gap-4">
        <Link
          to="/"
          className="text-rustdesk-muted hover:text-white transition-colors"
        >
          &larr; Back
        </Link>
        <h1 className="text-lg font-semibold text-white">Settings</h1>
      </header>

      <main className="max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Server Configuration */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-rustdesk-muted uppercase tracking-wide">
            Server Configuration
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-rustdesk-text mb-1">
                Rendezvous Server
              </label>
              <input
                type="text"
                value={server}
                onChange={e => setServer(e.target.value)}
                placeholder="e.g., your-server.com or leave empty for default"
                className="w-full bg-rustdesk-surface border border-rustdesk-border rounded-lg px-4 py-2.5 text-white placeholder-rustdesk-muted/50 focus:outline-none focus:ring-2 focus:ring-rustdesk-primary"
              />
              <p className="text-xs text-rustdesk-muted mt-1">
                Leave empty to use public RustDesk servers
              </p>
            </div>
            <div>
              <label className="block text-sm text-rustdesk-text mb-1">
                Key
              </label>
              <input
                type="text"
                value={key}
                onChange={e => setKey(e.target.value)}
                placeholder="Server public key (if self-hosted)"
                className="w-full bg-rustdesk-surface border border-rustdesk-border rounded-lg px-4 py-2.5 text-white placeholder-rustdesk-muted/50 focus:outline-none focus:ring-2 focus:ring-rustdesk-primary"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-rustdesk-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              {saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </section>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-rustdesk-muted uppercase tracking-wide">
            About
          </h2>
          <div className="bg-rustdesk-surface border border-rustdesk-border rounded-lg p-4 space-y-2 text-sm">
            <p className="text-rustdesk-text font-medium">
              Solvx v2.0.0
            </p>
            <p className="text-rustdesk-muted">
              Unified remote desktop and terminal client for ChromeOS.
              Connect to remote machines via RustDesk relay for both desktop
              and terminal access through a single encrypted connection.
            </p>
            <p className="text-rustdesk-muted text-xs mt-3">
              Connects via WSS to your RustDesk relay server (ports 21118/21119).
            </p>
            <div className="border-t border-rustdesk-border/30 pt-3 mt-3 space-y-1 text-xs text-rustdesk-muted/70">
              <p>Built on open-source technologies:</p>
              <p>Desktop protocol: <a href="https://github.com/rustdesk/rustdesk" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">RustDesk</a> (AGPL-3.0)</p>
              <p>Terminal: <a href="https://xtermjs.org" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">xterm.js</a> (MIT)</p>
            </div>
          </div>
        </section>

        {/* Clear Data */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-rustdesk-muted uppercase tracking-wide">
            Data
          </h2>
          <button
            onClick={() => {
              localStorage.removeItem('peers');
              localStorage.removeItem('recent-peers');
              useAppStore.getState().loadRecentPeers();
            }}
            className="text-red-400 hover:text-red-300 text-sm transition-colors"
          >
            Clear saved peers and passwords
          </button>
        </section>
      </main>
    </div>
  );
}
