'use client';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Navbar from '../navbar/page.tsx';

async function addDataToFirestore(
  registryAccount,
  transferDocuments,
  purchaseAgreement,
  invoice,
  proofOfPayment,
  retirementCertificate,
  businessRegistration,
  personalID
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

export default function DocumentationForm() {
  const [registryAccount, setRegistryAccount] = useState("");
  const [transferDocuments, setTransferDocuments] = useState("");
  const [purchaseAgreement, setPurchaseAgreement] = useState("");
  const [invoice, setInvoice] = useState("");
  const [proofOfPayment, setProofOfPayment] = useState("");
  const [retirementCertificate, setRetirementCertificate] = useState("");
  const [businessRegistration, setBusinessRegistration] = useState("");
  const [personalID, setPersonalID] = useState("");

  const handleSubmit = async (e) => {
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <Navbar />
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6"
        onSubmit={handleSubmit}
      >
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
    </div>
  );
}
