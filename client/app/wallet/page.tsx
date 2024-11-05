// Home Component - app/page.tsx
'use client';
import React, { createContext } from 'react';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import Navbar from '../navbar/page';
import '@solana/wallet-adapter-react-ui/styles.css';


export default function Home() {
    const { connected, wallet } = useWallet();
    const router = useRouter();

    useEffect(() => {
        if (connected) {
            router.push('/dashboard'); 
        }
    }, [connected, router, wallet]);



    return (
      
                <div className="flex flex-col items-center my-24 z-50 h-[50%]">
                        {connected ? <h1>Wallet Connected</h1> : <h1>Log in with your Wallet</h1>}
                        <WalletMultiButton />
                    </div>
    
    );
}



