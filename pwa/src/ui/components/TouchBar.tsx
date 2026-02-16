import { useCallback } from 'react';

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
  const handleKey = useCallback(
    (data: string) => {
      onSend(data);
    },
    [onSend]
  );

  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-neutral-900 border-t border-neutral-700 overflow-x-auto shrink-0">
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
