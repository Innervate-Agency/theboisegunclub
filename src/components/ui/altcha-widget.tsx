'use client';

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

interface AltchaWidgetProps {
  challengeurl?: string;
  hidefooter?: boolean;
  hidelogo?: boolean;
  name?: string;
  maxnumber?: number;
  mockerror?: boolean;
  refetchonexpire?: boolean;
  spamfilter?: boolean;
  strings?: string;
  test?: boolean;
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
  debug?: boolean;
  onStateChange?: (state: 'unverified' | 'verifying' | 'verified' | 'error') => void;
  onVerify?: (payload: string) => void;
}

export interface AltchaWidgetRef {
  getState: () => 'unverified' | 'verifying' | 'verified' | 'error';
  getPayload: () => string | null;
  reset: () => void;
}

const AltchaWidget = forwardRef<AltchaWidgetRef, AltchaWidgetProps>((props, ref) => {
  const widgetRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    getState: () => {
      return (widgetRef.current as any)?.state || 'unverified';
    },
    getPayload: () => {
      return (widgetRef.current as any)?.payload || null;
    },
    reset: () => {
      (widgetRef.current as any)?.reset?.();
    },
  }));

  React.useEffect(() => {
    const loadAltcha = async () => {
      if (typeof window !== 'undefined' && !customElements.get('altcha-widget')) {
        const { default: altcha } = await import('altcha');
      }
    };

    loadAltcha();
  }, []);

  React.useEffect(() => {
    const widget = widgetRef.current;
    if (widget && props.onStateChange) {
      const handleStateChange = (event: CustomEvent) => {
        props.onStateChange?.(event.detail.state);
      };
      widget.addEventListener('statechange', handleStateChange as EventListener);
      return () => {
        widget.removeEventListener('statechange', handleStateChange as EventListener);
      };
    }
  }, [props.onStateChange]);

  React.useEffect(() => {
    const widget = widgetRef.current;
    if (widget && props.onVerify) {
      const handleVerify = (event: CustomEvent) => {
        props.onVerify?.(event.detail.payload);
      };
      widget.addEventListener('verified', handleVerify as EventListener);
      return () => {
        widget.removeEventListener('verified', handleVerify as EventListener);
      };
    }
  }, [props.onVerify]);

  return React.createElement('altcha-widget', {
    ref: widgetRef,
    style: { width: '100%', display: 'block' },
    ...props,
  });
});

AltchaWidget.displayName = 'AltchaWidget';

export default AltchaWidget;