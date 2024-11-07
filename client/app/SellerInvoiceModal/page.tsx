import { API_KEY } from '@/components/requestsHandler';
import { Host_Url } from '@/components/requestsHandler/request';
import { useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';
import React, { ReactNode, useState } from 'react';

interface SellerInvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: any;
}

export default function SellerInvoiceModal({ isOpen, onClose, selectedItem }: SellerInvoiceModalProps) {
    if (!isOpen) return null;
    const { publicKey, signTransaction, sendTransaction } = useWallet();
    const connection = new Connection(clusterApiUrl('devnet'))
    const [loading, setLoading] = useState(false)

    console.log(selectedItem);
    const handleBuying = async () => {
        setLoading(true)
        const tx = new Transaction()

        const sellerPubkey = new PublicKey(selectedItem?.wallet_address);
        const transferAmount = Number(selectedItem?.item_price);
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
            setLoading(false)
        } catch (error: any) {
            console.log(error);
            setLoading(false)
        }


    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-10/12 p-6 rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Seller Invoice</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mb-4">
                    <div className='p-4'>
                        <h3 className="text-lg font-semibold py-2">Seller: {selectedItem.first_name + " " + selectedItem.last_name}</h3>
                        <p className="text-md py-2">Name: {selectedItem.item_name}</p>
                        <p className="text-md py-2">Quantity: {selectedItem.item_quantity} Tons</p>
                        <p className="text-md py-2">Price: {selectedItem.item_price} Sol</p>
                    </div>
                </div>
                <div className='grid grid-cols-4 py-10 items-center justify-center'>

                    <div>
                        <p>Business Registration Doc</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.business_registration} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.business_registration} alt={selectedItem?.business_registration} />
                        </a>
                    </div>

                    <div>
                        <p>Previous purchase Invoice</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.invoice} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.invoice} alt={selectedItem?.invoice} />
                        </a>
                    </div>


                    <div>
                        <p>Previous proof of payment</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.proof_of_payment} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.proof_of_payment} alt={selectedItem?.proof_of_payment} />
                        </a>
                    </div>

                    <div>
                        <p>Previous purchase agreement</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.purchase_agreement} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.purchase_agreement} alt={selectedItem?.purchase_agreement} />
                        </a>
                    </div>
                    <div>
                        <p>Previous registry account id</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.registry_account_id} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.registry_account_id} alt={selectedItem?.registry_account_id} />
                        </a>
                    </div>
                    <div>
                        <p>Previous Retirement Certificate</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.retirement_certificate} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.retirement_certificate} alt={selectedItem?.retirement_certificate} />
                        </a>
                    </div>

                    <div>
                        <p>Previous transfer documents</p>
                        <a className='max-w-[40px]' href={Host_Url + selectedItem?.transfer_documents} target='_blank'>
                            <img className='w-[100px] h-[100px]' src={Host_Url + selectedItem?.transfer_documents} alt={selectedItem?.transfer_documents} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-5'>
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                    <button
                        disabled={loading}
                        onClick={() => handleBuying()}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        {loading ? "Processing..." : "Proceed"}
                    </button>
                </div>
            </div>
        </div>
    );
}
