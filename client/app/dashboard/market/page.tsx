'use client';
import { useState } from 'react';
import Modal from '../../modal/page';
import SellerInvoiceModal from '../../SellerInvoiceModal/page';

interface Item {
    id: number;
    name: string;
    image: string;
    price: string;
    seller: string;
    quantity: number;
    Quantity: string;
}

const items: Item[] = [
    { id: 1, name: 'Item One', image: '/carbon logo.PNG', price: 'Price:$10.00', Quantity: ' 50 ton', seller: 'Seller One', quantity: 50 },
    { id: 2, name: 'Item Two', image: '/images/images (10).jpeg', price: 'Price:$15.00', Quantity: ' 40 ton', seller: 'Seller Two', quantity: 3 },
    { id: 3, name: 'Item Three', image: '/carbon logo.PNG', price: 'Price:$20.00', Quantity: '45 ton', seller: 'Seller Three', quantity: 2 },
    { id: 4, name: 'Item Four', image: '/images/images (10).jpeg', price: 'Price:$25.00', Quantity: ' 20 ton', seller: 'Seller Four', quantity: 7 },
    { id: 5, name: 'Item Five', image: '/carbon logo.PNG', price: 'Price:$30.00', Quantity: '10 ton', seller: 'Seller Five', quantity: 4 },
    { id: 6, name: 'Item Six', image: '/images/images (10).jpeg', price: 'Price:$35.00', Quantity: ' 28 ton', seller: 'Seller Six', quantity: 6 },
    { id: 7, name: 'Item Seven', image: '/carbon logo.PNG', price: 'Price:$40.00', Quantity: '15 ton', seller: 'Seller Seven', quantity: 8 },
    { id: 8, name: 'Item Eight', image: '/images/images (10).jpeg', price: 'Price:$45.00', Quantity: ' 12 ton', seller: 'Seller Eight', quantity: 1 },
];

export default function MarketCards() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openInvoiceModal = (item: Item) => {
        setSelectedItem(item);
        setIsInvoiceModalOpen(true);
    };
    const closeInvoiceModal = () => setIsInvoiceModalOpen(false);

    return (
        <div className="text-black shadow-lg p-2 min-w-[45%] rounded-lg flex flex-col items-center justify-center">
            <div className="container mx-auto p-4 mb-[100px] w-10/12">
                <h1 className="text-4xl font-bold text-center mb-8">Market</h1>

                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Market</h1>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
                    >
                        Add Item
                    </button>
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="market-item relative flex flex-col items-center border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105"
                        >
                            <img src={item.image} alt={item.name} className="w-full h-50 object-cover mb-4 rounded" />
                            <h2 className="text-lg font-semibold text-center">{item.name}</h2>
                            <p className="text-xl font-bold text-blue-600">{item.price}</p>
                            <p className="text-xl font-bold text-blue-600">Quantity:{item.Quantity}</p>

                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => openInvoiceModal(item)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedItem && (
                    <SellerInvoiceModal isOpen={isInvoiceModalOpen} onClose={closeInvoiceModal}>
                        <div className='p-4'>
                            <h3 className="text-lg font-semibold py-2">Seller: {selectedItem.seller}</h3>
                            <p className="text-md py-2">Name: {selectedItem.name}</p>
                            <p className="text-md py-2">Quantity: {selectedItem.Quantity}</p>
                            <p className="text-md py-2">Price: {selectedItem.price}</p>
                        </div>
                    </SellerInvoiceModal>
                )}
            </div>
        </div>
    );
}
