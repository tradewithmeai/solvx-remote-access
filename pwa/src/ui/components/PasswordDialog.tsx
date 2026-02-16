import { useState } from 'react';

interface Props {
  isRetry: boolean;
  onSubmit: (password: string, remember: boolean) => void;
  onCancel: () => void;
}

export function PasswordDialog({ isRetry, onSubmit, onCancel }: Props) {
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) onSubmit(password, remember);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-rustdesk-surface border border-rustdesk-border rounded-xl p-6 w-full max-w-sm mx-4 space-y-4"
      >
        <h2 className="text-lg font-semibold text-white">
          {isRetry ? 'Wrong Password' : 'Password Required'}
        </h2>
        {isRetry && (
          <p className="text-sm text-red-400">
            The password was incorrect. Please try again.
          </p>
        )}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
          autoFocus
          className="w-full bg-rustdesk-dark border border-rustdesk-border rounded-lg px-4 py-3 text-white placeholder-rustdesk-muted/50 focus:outline-none focus:ring-2 focus:ring-rustdesk-primary"
        />
        <label className="flex items-center gap-2 text-sm text-rustdesk-muted cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
            className="rounded border-rustdesk-border"
          />
          Remember password
        </label>
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
            disabled={!password}
            className="flex-1 bg-rustdesk-primary hover:bg-blue-600 text-white rounded-lg py-2.5 font-medium transition-colors disabled:opacity-40"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
