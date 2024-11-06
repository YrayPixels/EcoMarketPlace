import { useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import React, { ReactNode } from 'react';

interface SellerInvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: any;
}

export default function SellerInvoiceModal({ isOpen, onClose, selectedItem }: SellerInvoiceModalProps) {
    if (!isOpen) return null;
    const { publicKey, signTransaction, sendTransaction } = useWallet();
    const connection = new Connection(clusterApiUrl('devnet'))


    const handleBuying = async () => {

        const tx = new Transaction()
        const wallet = new Keypair()
        const sellerPubkey = wallet.publicKey;
        const transferAmount = 0.01;
        if (!publicKey) return null;
        tx.add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: sellerPubkey,
                lamports: transferAmount * LAMPORTS_PER_SOL
            })
        )
        if (!signTransaction) return;
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        tx.feePayer = publicKey;
        try {
            const dets = await signTransaction(tx)
            console.log(dets);
            const signature = await sendTransaction(tx, connection);

            let txHash = connection.confirmTransaction(signature, "confirmed")

            console.log(txHash);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-80 p-6 rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Seller Invoice</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mb-4">
                    <div className='p-4'>
                        <h3 className="text-lg font-semibold py-2">Seller: {selectedItem.seller}</h3>
                        <p className="text-md py-2">Name: {selectedItem.name}</p>
                        <p className="text-md py-2">Quantity: {selectedItem.Quantity}</p>
                        <p className="text-md py-2">Price: {selectedItem.price}</p>
                    </div>
                </div>
                <div className='flex justify-between gap-5'>
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                    <button

                        onClick={() => handleBuying()}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        proceed
                    </button>
                </div>
            </div>
        </div>
    );
}
