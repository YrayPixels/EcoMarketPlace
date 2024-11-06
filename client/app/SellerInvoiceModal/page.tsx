import React, { ReactNode } from 'react';

interface SellerInvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function SellerInvoiceModal({ isOpen, onClose, children }: SellerInvoiceModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-80 p-6 rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Seller Invoice</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mb-4">
                    {children}
                </div>
                <div className='flex justify-between gap-5'>
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                    <button
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        proceed
                    </button>
                </div>
            </div>
        </div>
    );
}
