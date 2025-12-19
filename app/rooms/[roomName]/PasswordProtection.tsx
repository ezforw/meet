'use client';

import * as React from 'react';
import { useActionState } from 'react';
import { verifyRoomPassword } from './actions';

export function PasswordProtection() {
  const [state, formAction, isPending] = useActionState(verifyRoomPassword, null);

  // If authentication successful, reload the page to show the room
  React.useEffect(() => {
    if (state?.success) {
      window.location.reload();
    }
  }, [state?.success]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: '#2a2a2a',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '24px',
          fontSize: '24px',
          fontWeight: '600',
          textAlign: 'center',
        }}>
          请输入密码
        </h2>

        <form action={formAction}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              disabled={isPending}
              autoComplete="off"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #444',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#4a9eff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#444';
              }}
            />
          </div>

          {state?.error && (
            <div style={{
              padding: '12px',
              marginBottom: '20px',
              color: '#ff4444',
              borderRadius: '8px',
              fontSize: '14px',
              textAlign: 'center',
            }}>
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: isPending ? '#444' : '#4a9eff',
              color: '#ffffff',
              cursor: isPending ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!isPending) {
                e.currentTarget.style.backgroundColor = '#3a8eef';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPending) {
                e.currentTarget.style.backgroundColor = '#4a9eff';
              }
            }}
          >
            {isPending ? '验证中...' : '提交'}
          </button>
        </form>
      </div>
    </div>
  );
}
