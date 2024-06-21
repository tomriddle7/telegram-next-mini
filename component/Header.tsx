"use client";

import { TonConnectButton } from '@tonconnect/ui-react';

export default function Header() {
  return (
    <header
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
        }}
    >
        <img src="/ton_symbol.svg" />
        <TonConnectButton />
    </header>
  );
}
