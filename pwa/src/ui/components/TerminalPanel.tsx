import { useEffect, useRef, useCallback } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import '@xterm/xterm/css/xterm.css';
import { useAppStore } from '../../api/store';
import { TouchBar } from './TouchBar';

export function TerminalPanel() {
  const termRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const terminalIdRef = useRef<number | null>(null);

  const connection = useAppStore(s => s.connection);
  const openTerminal = useAppStore(s => s.openTerminal);
  const setTerminalDataHandler = useAppStore(s => s.setTerminalDataHandler);

  // Initialize xterm.js and open terminal session
  useEffect(() => {
    if (!termRef.current || !connection) return;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: "'Cascadia Code', 'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
      theme: {
        background: '#1a1a2e',
        foreground: '#e0e0e0',
        cursor: '#4ec9b0',
        selectionBackground: '#3a3a5e',
        black: '#1a1a2e',
        red: '#f44747',
        green: '#4ec9b0',
        yellow: '#dcdcaa',
        blue: '#569cd6',
        magenta: '#c586c0',
        cyan: '#4fc1ff',
        white: '#e0e0e0',
        brightBlack: '#666680',
        brightRed: '#f44747',
        brightGreen: '#4ec9b0',
        brightYellow: '#dcdcaa',
        brightBlue: '#569cd6',
        brightMagenta: '#c586c0',
        brightCyan: '#4fc1ff',
        brightWhite: '#ffffff',
      },
      allowProposedApi: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(new WebLinksAddon());

    term.open(termRef.current);
    fitAddon.fit();

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    // Register data handler so incoming terminal data writes to xterm
    setTerminalDataHandler((_terminalId: number, data: Uint8Array) => {
      term.write(data);
    });

    // Open terminal session on the remote peer
    const { cols, rows } = term;
    const tId = openTerminal(rows, cols);
    terminalIdRef.current = tId;

    // Forward user input to remote
    const dataDisposable = term.onData((data: string) => {
      if (terminalIdRef.current != null && connection) {
        connection.sendTerminalData(terminalIdRef.current, data);
      }
    });

    // Forward resize events to remote
    const resizeDisposable = term.onResize(({ rows, cols }) => {
      if (terminalIdRef.current != null && connection) {
        connection.resizeTerminal(terminalIdRef.current, rows, cols);
      }
    });

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener('resize', handleResize);

    // ResizeObserver for container size changes
    const resizeObserver = new ResizeObserver(() => {
      fitAddon.fit();
    });
    resizeObserver.observe(termRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      dataDisposable.dispose();
      resizeDisposable.dispose();
      setTerminalDataHandler(null);
      if (terminalIdRef.current != null && connection) {
        connection.closeTerminal(terminalIdRef.current);
      }
      term.dispose();
      xtermRef.current = null;
      fitAddonRef.current = null;
      terminalIdRef.current = null;
    };
  }, [connection, openTerminal, setTerminalDataHandler]);

  const handleTouchBarSend = useCallback((data: string) => {
    if (terminalIdRef.current != null && connection) {
      connection.sendTerminalData(terminalIdRef.current, data);
    }
    xtermRef.current?.focus();
  }, [connection]);

  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      <div ref={termRef} className="flex-1 min-h-0" />
      <TouchBar onSend={handleTouchBarSend} />
    </div>
  );
}
