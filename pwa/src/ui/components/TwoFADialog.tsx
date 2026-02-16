import { useState } from 'react';

interface Props {
  isRetry: boolean;
  enableTrustedDevices: boolean;
  onSubmit: (code: string, trustDevice: boolean) => void;
  onCancel: () => void;
}

export function TwoFADialog({ isRetry, enableTrustedDevices, onSubmit, onCancel }: Props) {
  const [code, setCode] = useState('');
  const [trustDevice, setTrustDevice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 6) onSubmit(code, trustDevice);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-rustdesk-surface border border-rustdesk-border rounded-xl p-6 w-full max-w-sm mx-4 space-y-4"
      >
        <h2 className="text-lg font-semibold text-white">
          {isRetry ? 'Wrong 2FA Code' : '2FA Required'}
        </h2>
        <p className="text-sm text-rustdesk-muted">
          {isRetry
            ? 'The code was incorrect. Please try again.'
            : 'Enter the 6-digit code from your authenticator app.'}
        </p>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
          value={code}
          onChange={e => setCode(e.target.value.replace(/\D/g, ''))}
          placeholder="000000"
          autoFocus
          className="w-full bg-rustdesk-dark border border-rustdesk-border rounded-lg px-4 py-3 text-white text-center text-2xl tracking-[0.5em] font-mono placeholder-rustdesk-muted/30 focus:outline-none focus:ring-2 focus:ring-rustdesk-primary"
        />
        {enableTrustedDevices && (
          <label className="flex items-center gap-2 text-sm text-rustdesk-muted cursor-pointer">
            <input
              type="checkbox"
              checked={trustDevice}
              onChange={e => setTrustDevice(e.target.checked)}
              className="rounded border-rustdesk-border"
            />
            Trust this device
          </label>
        )}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border border-rustdesk-border text-rustdesk-muted hover:text-white rounded-lg py-2.5 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={code.length !== 6}
            className="flex-1 bg-rustdesk-primary hover:bg-blue-600 text-white rounded-lg py-2.5 font-medium transition-colors disabled:opacity-40"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}
