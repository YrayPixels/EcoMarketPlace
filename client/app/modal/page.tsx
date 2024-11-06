// components/Modal.tsx
'use client';
import { createTrade } from '@/components/requestsHandler/requestsItems';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const { publicKey } = useWallet();

  // State variables for both parts of the form
  const [registryAccount, setRegistryAccount] = useState<File | null>(null);
  const [transferDocuments, setTransferDocuments] = useState<File | null>(null);
  const [purchaseAgreement, setPurchaseAgreement] = useState<File | null>(null);
  const [invoice, setInvoice] = useState<File | null>(null);
  const [proofOfPayment, setProofOfPayment] = useState<File | null>(null);
  const [retirementCertificate, setRetirementCertificate] = useState<File | null>(null);
  const [businessRegistration, setBusinessRegistration] = useState<File | null>(null);
  const [personalID, setPersonalID] = useState<File | null>(null);

  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState<File | null>(null);
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  // Handle the next and submit actions
  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !registryAccount ||
      !transferDocuments ||
      !purchaseAgreement ||
      !invoice ||
      !proofOfPayment ||
      !retirementCertificate ||
      !businessRegistration ||
      !personalID ||
      !itemName ||
      !itemPrice ||
      !itemQuantity
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    if (!publicKey) return;

    const response = await createTrade(
      itemName,
      itemPrice,
      itemQuantity,
      registryAccount,
      transferDocuments,
      purchaseAgreement,
      proofOfPayment,
      invoice,
      proofOfPayment,
      retirementCertificate,
      businessRegistration,
      personalID,
      publicKey.toBase58()
    );
    if (response.data.status === "success") {
      alert("Listing successful. Please wait for approval.");
      onClose();
    } else {
      alert('Listing not possible');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-8/12">
        <h2 className="text-2xl font-semibold mb-4">Add Item</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-red-500 font-semibold"
          >
            &times;
          </button>

          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`absolute top-0 h-2 rounded-full ${step === 1 ? "w-1/2 bg-blue-500" : "w-full bg-blue-500"}`}
            />
          </div>

          {/* Form Part 1 */}
          {step === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-lg w-full mt-6">
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2" htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  id="itemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2" htmlFor="itemImage">Item Image</label>
                <input
                  type="file"
                  id="itemImage"
                  onChange={(e: any) => setItemImage(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div> */}
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2" htmlFor="itemPrice">Item Price</label>
                <input
                  type="number"
                  id="itemPrice"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2" htmlFor="itemQuantity">Item Quantity</label>
                <input
                  type="number"
                  id="itemQuantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Next
              </button>
            </div>
          )}

          {/* Form Part 2 */}
          {step === 2 && (
            <div className="flex flex-wrap -mx-4 space-y-4">
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="registryAccount" className="block font-medium text-gray-700 mb-2">
                  Proof of Registration with a Carbon Registry
                </label>
                <input
                  type="file"
                  id="registryAccount"
                  onChange={(e: any) => setRegistryAccount(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="transferDocuments" className="block font-medium text-gray-700 mb-2">
                  Ownership Transfer Document
                </label>
                <input
                  type="file"
                  id="transferDocuments"
                  onChange={(e: any) => setTransferDocuments(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="purchaseAgreement" className="block font-medium text-gray-700 mb-2">
                  Purchase Agreement
                </label>
                <input
                  type="file"
                  id="purchaseAgreement"
                  onChange={(e: any) => setPurchaseAgreement(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="invoice" className="block font-medium text-gray-700 mb-2">
                  Invoice
                </label>
                <input
                  type="file"
                  id="invoice"
                  onChange={(e: any) => setInvoice(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="proofOfPayment" className="block font-medium text-gray-700 mb-2">
                  Proof of Payment
                </label>
                <input
                  type="file"
                  id="proofOfPayment"
                  onChange={(e: any) => setProofOfPayment(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="retirementCertificate" className="block font-medium text-gray-700 mb-2">
                  Retirement Certificate (if applicable)
                </label>
                <input
                  type="file"
                  id="retirementCertificate"
                  onChange={(e: any) => setRetirementCertificate(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="businessRegistration" className="block font-medium text-gray-700 mb-2">
                  Business Registration (if applicable)
                </label>
                <input
                  type="file"
                  id="businessRegistration"
                  onChange={(e: any) => setBusinessRegistration(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="personalID" className="block font-medium text-gray-700 mb-2">
                  Personal ID
                </label>
                <input
                  type="file"
                  id="personalID"
                  onChange={(e: any) => setPersonalID(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
              <div className="w-full">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
