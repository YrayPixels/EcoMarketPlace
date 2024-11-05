'use client';

import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../navbar/page.tsx';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

   
    console.log(formData);

 
    setStatus('Thank you for contacting us! We will get back to you soon.');

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
   <Navbar />

      <Head>
        <title>Contact Us - EcoTrade</title>
        <meta name="description" content="Get in touch with EcoTrade." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-800 text-black p-8 mt-5">
        <section className="text-center mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4 mt-8">Contact Us</h1>
          <p className="text-lg mb-4">We'd love to hear from you!</p>
        </section>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
              placeholder="Your Message"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-green-600 text-center">{status}</p>}
        </form>

        <div className="mt-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198265.60087704165!2d7.39655152502329!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1058d9cc099ae31b%3A0x4ef429d2518b788e!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1616394285420!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
