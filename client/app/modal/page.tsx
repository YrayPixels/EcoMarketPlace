// components/Modal.tsx
'use client';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

async function addDataToFirestore(
  registryAccount: string,
  transferDocuments: string,
  purchaseAgreement: string,
  invoice: string,
  proofOfPayment: string,
  retirementCertificate: string,
  businessRegistration: string,
  personalID: string
) {
  try {
    const docRef = await addDoc(collection(db, "massages"), {
      registryAccount: registryAccount,
      transferDocuments: transferDocuments,
      purchaseAgreement: purchaseAgreement,
      invoice: invoice,
      proofOfPayment: proofOfPayment,
      retirementCertificate: retirementCertificate,
      businessRegistration: businessRegistration,
      personalID: personalID,
    });
    console.log("Document written with ID", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [registryAccount, setRegistryAccount] = useState("");
  const [transferDocuments, setTransferDocuments] = useState("");
  const [purchaseAgreement, setPurchaseAgreement] = useState("");
  const [invoice, setInvoice] = useState("");
  const [proofOfPayment, setProofOfPayment] = useState("");
  const [retirementCertificate, setRetirementCertificate] = useState("");
  const [businessRegistration, setBusinessRegistration] = useState("");
  const [personalID, setPersonalID] = useState("");

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
      !personalID
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const added = await addDataToFirestore(
      registryAccount,
      transferDocuments,
      purchaseAgreement,
      invoice,
      proofOfPayment,
      retirementCertificate,
      businessRegistration,
      personalID
    );

    if (added) {
      setRegistryAccount("");
      setTransferDocuments("");
      setPurchaseAgreement("");
      setInvoice("");
      setProofOfPayment("");
      setRetirementCertificate("");
      setBusinessRegistration("");
      setPersonalID("");
      alert("Data submitted successfully!");
      window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-8/12">
        <h2 className="text-2xl font-semibold mb-4">Add Item</h2>
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <button
            onClick={onClose}
            className="absolute top-[10%] right-[19%] mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-300"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Carbon Credit Documentation
          </h2>

          <div className="flex flex-wrap -mx-4 space-y-4">
            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="registryAccount">
                Proof of Registration with a Carbon Registry
              </label>
              <input
                type="file"
                id="registryAccount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setRegistryAccount(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="transferDocuments">
                Ownership Transfer Document
              </label>
              <input
                type="file"
                id="transferDocuments"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setTransferDocuments(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="purchaseAgreement">
                Purchase and Sale Agreement (PSA)
              </label>
              <input
                type="file"
                id="purchaseAgreement"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setPurchaseAgreement(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="invoice">
                Invoice or Receipt
              </label>
              <input
                type="file"
                id="invoice"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setInvoice(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="proofOfPayment">
                Proof of Payment
              </label>
              <input
                type="file"
                id="proofOfPayment"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setProofOfPayment(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="retirementCertificate">
                Retirement Certificate (if applicable)
              </label>
              <input
                type="file"
                id="retirementCertificate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setRetirementCertificate(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="businessRegistration">
                Business Registration (for Companies)
              </label>
              <input
                type="file"
                id="businessRegistration"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setBusinessRegistration(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block font-medium text-gray-700 mb-2" htmlFor="personalID">
                Personal Identification (for Individuals)
              </label>
              <input
                type="file"
                id="personalID"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setPersonalID(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Documentation
          </button>
        </form>
        {/* <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-300"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
