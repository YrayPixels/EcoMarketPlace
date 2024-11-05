'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Profile() {
    const { publicKey, connected } = useWallet(); // Get wallet connection status and public key
    const [balance, setBalance] = useState<number | null>(null); // State for balance
    const network = 'https://api.devnet.solana.com'; // Adjust endpoint as necessary

    // Fetch balance when connected and publicKey is available
    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                const connection = new Connection(network);
                const balanceLamports = await connection.getBalance(publicKey);
                setBalance(balanceLamports / 1e9); // Convert lamports to SOL
            }
        };

        // Only fetch balance if user is connected and has a public key
        if (connected && publicKey) {
            fetchBalance();
        }
    }, [publicKey, connected]);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                
                {connected && publicKey ? ( // Check if connected and public key is available
                    <div>
                        <p className="text-gray-600">Wallet Address:</p>
                        <p className="text-gray-800">{publicKey.toBase58()}</p>

                        <p className="text-gray-600 mt-4">SOL Balance:</p>
                        <p className="text-gray-800">
                            {balance !== null ? `${balance.toFixed(4)} SOL` : 'Loading...'}
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className="text-gray-500">Connect your wallet to see profile information.</p>
                        <WalletMultiButton className="mb-4" /> {/* Button to connect wallet */}
                    </div>
                )}
            </div>
        </div>
    );
}
