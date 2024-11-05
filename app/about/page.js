'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../navbar/page.tsx';
import { gsap } from 'gsap';

export default function AboutUs() {
  useEffect(() => {
    // GSAP Animation
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.3, 
      });
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
      gsap.from(member, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: index * 0.3 + 0.9, 
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>About Us - EcoTrade</title>
        <meta name="description" content="Learn more about EcoTrade, our mission, and the team behind the project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-gradient-to-r from-green-700 to-blue-700 text-black p-8 relative z-10 mt-5"> {/* Changed text color to gray */}
        <div className='w-10/12 m-auto'>
        <section className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-4">Empowering Change Through EcoTrade</p>
          <p className="text-lg max-w-2xl mx-auto">
            EcoTrade is a decentralized carbon credits marketplace that aims to facilitate transparent, eco-friendly trading
            of carbon credits. Our mission is to leverage blockchain technology to create a more sustainable and
            environmentally-friendly world.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg fade-in"> 
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              We envision a world where businesses and individuals actively participate in carbon offsetting, leading to
              a healthier planet for future generations.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg fade-in"> 
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to simplify the trading of carbon credits, making it accessible for everyone while
              ensuring transparency and security through blockchain technology.
            </p>
          </div>
        </section>

        <section className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg mb-8">A diverse group of passionate individuals committed to making a difference.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg team-member">
              <img src="/images/team1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Alice Johnson</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
              <p className="mt-2">
                Alice is a sustainability expert with over a decade of experience in environmental policy and blockchain
                technology.
              </p>
            </div>

          
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg team-member"> 
              <img src="/images/team2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
              <p className="mt-2">
                John is a tech enthusiast and blockchain developer who believes in leveraging technology for social good.
              </p>
            </div>

       
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg team-member"> 
              <img src="/images/team3.jpg" alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Sara Lee</h3>
              <p className="text-gray-600">Marketing Lead</p>
              <p className="mt-2">
                Sara is passionate about sustainable marketing and spreading the word about eco-friendly initiatives.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center fade-in">
          <h2 className="text-4xl font-semibold mb-4">Join Us in Our Journey</h2>
          <p className="text-lg mb-4">
            Together, we can make a significant impact on the environment. Let’s trade for a greener tomorrow!
          </p>
          <a href="#get-started" className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
            Get Started
          </a>
        </section>
        </div>
        
       
      </main>

    </div>
  );
}
