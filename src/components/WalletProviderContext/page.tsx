'use client';
import React, { createContext, useContext, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

interface WalletContextProps {
    connected: boolean;
    publicKey: string | null;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWalletContext must be used within WalletProviderContext");
    }
    return context;
};

export const WalletProviderContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
             {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const WalletContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { connected, publicKey } = useWallet();

    return (
        <WalletContext.Provider value={{ connected, publicKey: publicKey?.toBase58() || null }}>
            {children}
        </WalletContext.Provider>
    );
};
