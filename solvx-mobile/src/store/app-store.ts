/**
 * Global app state using Zustand.
 * Manages connection state, peer list, and settings.
 */
import { create } from 'zustand';
import { AppStorage } from '../utils/storage';
import type { ConnectionStatus, ConnectionMode } from '../core/connection';
import type { PeerInfo } from '../core/protocol/types';

interface RecentPeer {
  id: string;
  alias?: string;
  platform?: string;
  lastConnected: number;
}

interface AppState {
  // Connection
  status: ConnectionStatus;
  statusDetail: string;
  peerId: string;
  peerInfo: PeerInfo | null;
  latency: number;
  mode: ConnectionMode;

  // UI
  passwordRequired: boolean;
  passwordRetry: boolean;
  twoFARequired: boolean;
  twoFARetry: boolean;
  enableTrustedDevices: boolean;
  errorTitle: string;
  errorMessage: string;

  // Recent peers
  recentPeers: RecentPeer[];

  // Display & input mode
  currentDisplay: number;
  trackpadMode: boolean;

  // Settings
  rendezvousServer: string;
  licenseKey: string;

  // Actions
  setStatus: (status: ConnectionStatus, detail?: string) => void;
  setPeerId: (id: string) => void;
  setPeerInfo: (info: PeerInfo | null) => void;
  setLatency: (ms: number) => void;
  setMode: (mode: ConnectionMode) => void;
  setCurrentDisplay: (display: number) => void;
  setTrackpadMode: (enabled: boolean) => void;
  setPasswordRequired: (required: boolean, retry: boolean) => void;
  set2FARequired: (required: boolean, retry: boolean, enableTrusted: boolean) => void;
  setError: (title: string, message: string) => void;
  clearError: () => void;
  addRecentPeer: (peer: RecentPeer) => void;
  setRendezvousServer: (server: string) => void;
  setLicenseKey: (key: string) => void;
  loadSettings: () => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  status: 'idle',
  statusDetail: '',
  peerId: '',
  peerInfo: null,
  latency: 0,
  mode: 'both',

  passwordRequired: false,
  passwordRetry: false,
  twoFARequired: false,
  twoFARetry: false,
  enableTrustedDevices: false,
  errorTitle: '',
  errorMessage: '',

  recentPeers: [],

  currentDisplay: 0,
  trackpadMode: false,

  rendezvousServer: '',
  licenseKey: '',

  setStatus: (status, detail = '') => set({ status, statusDetail: detail }),
  setPeerId: (peerId) => set({ peerId }),
  setPeerInfo: (peerInfo) => set({ peerInfo }),
  setLatency: (latency) => set({ latency }),
  setMode: (mode) => set({ mode }),
  setCurrentDisplay: (currentDisplay) => set({ currentDisplay }),
  setTrackpadMode: (trackpadMode) => set({ trackpadMode }),

  setPasswordRequired: (required, retry) =>
    set({ passwordRequired: required, passwordRetry: retry }),

  set2FARequired: (required, retry, enableTrusted) =>
    set({ twoFARequired: required, twoFARetry: retry, enableTrustedDevices: enableTrusted }),

  setError: (title, message) => set({ errorTitle: title, errorMessage: message }),
  clearError: () => set({ errorTitle: '', errorMessage: '' }),

  addRecentPeer: (peer) => {
    const existing = get().recentPeers.filter(p => p.id !== peer.id);
    const updated = [peer, ...existing].slice(0, 20);
    set({ recentPeers: updated });
    AppStorage.setItem('recent-peers', JSON.stringify(updated));
  },

  setRendezvousServer: (server) => {
    set({ rendezvousServer: server });
    if (server) {
      AppStorage.setItem('custom-rendezvous-server', server);
    } else {
      AppStorage.removeItem('custom-rendezvous-server');
    }
  },

  setLicenseKey: (key) => {
    set({ licenseKey: key });
    if (key) {
      AppStorage.setItem('key', key);
    } else {
      AppStorage.removeItem('key');
    }
  },

  loadSettings: () => {
    const server = AppStorage.getItem('custom-rendezvous-server') || '';
    const key = AppStorage.getItem('key') || '';
    let recentPeers: RecentPeer[] = [];
    try {
      recentPeers = JSON.parse(AppStorage.getItem('recent-peers') || '[]');
    } catch {}
    set({ rendezvousServer: server, licenseKey: key, recentPeers });
  },

  reset: () => set({
    status: 'idle',
    statusDetail: '',
    peerInfo: null,
    latency: 0,
    passwordRequired: false,
    passwordRetry: false,
    twoFARequired: false,
    twoFARetry: false,
    enableTrustedDevices: false,
    errorTitle: '',
    errorMessage: '',
    currentDisplay: 0,
    trackpadMode: false,
  }),
}));
