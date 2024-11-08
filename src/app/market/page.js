'use client';

import Navbar from '@/components/navbar/page';
import { useState } from 'react';

import Modal from '../modal/page.tsx';


const items = [
  { id: 1, name: 'Item One', image: '/images/images (10).jpeg', price: 'Price= $10.00', Quantity: 'Quantity= 50Tons', seller: { name: 'John Doe', contact: 'adewumiisrael66@gmail.com', phone: '123-456-7890' } },
  { id: 2, name: 'Item Two', image: '/images/images (10).jpeg', price: 'Price= $15.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Jane Smith', contact: 'adewumiisrael66@gmail.com', phone: '234-567-8901' } },
  { id: 3, name: 'Item Three', image: '/images/images (10).jpeg', price: 'Price= $20.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Alice Brown', contact: 'adewumiisrael66@gmail.com', phone: '345-678-9012' } },
  { id: 4, name: 'Item Four', image: '/images/images (10).jpeg', price: 'Price= $25.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Bob Johnson', contact: 'adewumiisrael66@gmail.com', phone: '456-789-0123' } },
  { id: 5, name: 'Item Five', image: '/images/images (10).jpeg', price: 'Price= $30.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Tom Clark', contact: 'adewumiisrael66@gmail.com', phone: '567-890-1234' } },
  { id: 6, name: 'Item Six', image: '/images/images (10).jpeg', price: 'Price= $35.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Eve Martin', contact: 'adewumiisrael66@gmail.com', phone: '678-901-2345' } },
  { id: 7, name: 'Item Seven', image: '/images/images (10).jpeg', price: 'Price= $40.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Paul Young', contact: 'adewumiisrael66@gmail.com', phone: '789-012-3456' } },
  { id: 8, name: 'Item Eight', image: '/images/images (10).jpeg', price: 'Price= $45.00', Quantity: 'Quantity= 50Tons', seller: { name: 'Laura Lee', contact: 'adewumiisrael66@gmail.com', phone: '890-123-4567' } },
];

const Market = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBuyClick = (item) => {
    setSelectedItem(item);
  };
  const handleProceed = () => {

    alert('Proceeding with purchase!');
  };

  return (

    <div className='bg-black'>


      <div className="container mx-auto p-4 pb-[100px] -mb-8 w-10/12">
        <Navbar />

        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">Welcome to the Market</h1>
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
              className="relative flex flex-col items-center border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4 rounded" />
              <h2 className="text-lg font-semibold text-center">{item.name}</h2>
              <p className="text-xl font-bold text-blue-600">{item.price}</p>
              <p className="text-xl font-bold text-blue-600">{item.Quantity}</p>

              {hoveredItemId === item.id && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-opacity opacity-100"
                    onClick={() => handleBuyClick(item)}
                  >
                    Buy
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
              <p className="text-lg">Price: {selectedItem.price}</p>
              <p className="text-lg">Quantity: {selectedItem.Quantity}</p>
              <h3 className="text-lg font-bold mt-4">Seller Details:</h3>
              <p>Name: {selectedItem.seller.name}</p>
              <p>Email: {selectedItem.seller.contact}</p>
              <p>Phone: {selectedItem.seller.phone}</p>

              <div className='flex justify-between'>
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
                <button
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Market;
