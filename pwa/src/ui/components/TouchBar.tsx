import { useCallback, useState } from 'react';

interface TouchBarProps {
  onSend: (data: string) => void;
}

const KEYS = [
  { label: 'Esc', data: '\x1b' },
  { label: 'Tab', data: '\t' },
  { label: '|', data: '|' },
  { label: '~', data: '~' },
  { label: '/', data: '/' },
  { label: '-', data: '-' },
  { label: '\u2190', data: '\x1b[D' },
  { label: '\u2191', data: '\x1b[A' },
  { label: '\u2193', data: '\x1b[B' },
  { label: '\u2192', data: '\x1b[C' },
  { label: '^C', data: '\x03' },
  { label: '^D', data: '\x04' },
  { label: '^Z', data: '\x1a' },
  { label: '^L', data: '\x0c' },
];

export function TouchBar({ onSend }: TouchBarProps) {
  const [ctrlActive, setCtrlActive] = useState(false);
  const [altActive, setAltActive] = useState(false);

  const handleKey = useCallback(
    (data: string) => {
      let toSend = data;

      if (altActive) {
        toSend = '\x1b' + toSend;
        setAltActive(false);
      }

      if (ctrlActive) {
        // Convert first character to control character (a=1, b=2, ..., z=26)
        if (toSend.length === 1) {
          const code = toSend.toLowerCase().charCodeAt(0);
          if (code >= 0x61 && code <= 0x7a) {
            toSend = String.fromCharCode(code & 0x1f);
          }
        }
        setCtrlActive(false);
      }

      onSend(toSend);
    },
    [onSend, ctrlActive, altActive]
  );

  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-neutral-900 border-t border-neutral-700 overflow-x-auto shrink-0">
      {/* Sticky modifier keys */}
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          setCtrlActive(!ctrlActive);
        }}
        className={`px-2.5 py-1 text-xs font-mono rounded border whitespace-nowrap select-none transition-colors ${
          ctrlActive
            ? 'bg-emerald-700 border-emerald-500 text-white'
            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border-neutral-600'
        }`}
      >
        Ctrl
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          setAltActive(!altActive);
        }}
        className={`px-2.5 py-1 text-xs font-mono rounded border whitespace-nowrap select-none transition-colors ${
          altActive
            ? 'bg-emerald-700 border-emerald-500 text-white'
            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border-neutral-600'
        }`}
      >
        Alt
      </button>

      <div className="w-px h-5 bg-neutral-700 mx-1 shrink-0" />

      {/* Regular keys */}
      {KEYS.map((k) => (
        <button
          key={k.label}
          onMouseDown={(e) => {
            e.preventDefault();
            handleKey(k.data);
          }}
          className="px-2.5 py-1 text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded border border-neutral-600 whitespace-nowrap select-none"
        >
          {k.label}
        </button>
      ))}
    </div>
  );
}
