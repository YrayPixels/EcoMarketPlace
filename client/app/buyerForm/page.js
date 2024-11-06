'use client';
import React, { useState } from 'react';

const CarbonCreditForm = () => {
  const [registryAccount, setRegistryAccount] = useState(null);
  const [transferDocuments, setTransferDocuments] = useState(null);
  const [purchaseAgreement, setPurchaseAgreement] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [retirementCertificate, setRetirementCertificate] = useState(null);
  const [businessRegistration, setBusinessRegistration] = useState(null);
  const [personalID, setPersonalID] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('registryAccount', registryAccount);
    formData.append('transferDocuments', transferDocuments);
    formData.append('purchaseAgreement', purchaseAgreement);
    formData.append('invoice', invoice);
    formData.append('proofOfPayment', proofOfPayment);
    formData.append('retirementCertificate', retirementCertificate);
    formData.append('businessRegistration', businessRegistration);
    formData.append('personalID', personalID);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/create-trade', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
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
              onChange={(e) => setRegistryAccount(e.target.files[0])}
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
              onChange={(e) => setTransferDocuments(e.target.files[0])}
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
              onChange={(e) => setPurchaseAgreement(e.target.files[0])}
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
              onChange={(e) => setInvoice(e.target.files[0])}
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
              onChange={(e) => setProofOfPayment(e.target.files[0])}
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
              onChange={(e) => setRetirementCertificate(e.target.files[0])}
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
              onChange={(e) => setBusinessRegistration(e.target.files[0])}
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
              onChange={(e) => setPersonalID(e.target.files[0])}
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
};

export default CarbonCreditForm;
