// pages/services.js

import Link from 'next/link';

const Services = () => {
  return (

    <div className="bg-gray-100 py-8">

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="flex flex-wrap justify-center">
          {/* Service 1 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">Solar Energy Solutions</h3>
              <img src="images/energy manager.jpg" alt="Solar Energy" className="w-full  object-cover" />
              <p className="text-lg leading-relaxed">
                We provide cutting-edge solar energy solutions that harness the power of the sun to generate clean energy for homes and businesses.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">water conservative</h3>
              <img src="images/water-conservation.jpg" alt="Solar Energy" className="w-full  object-cover" />
              <p className="text-lg leading-relaxed">
                Our wind energy services help you harness wind power, providing a sustainable and renewable energy source for your operations.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">Energy Efficiency Consulting</h3>
              <img src="images/prject manager.jpg" alt="Solar Energy" className="w-full  object-cover" />
              <p className="text-lg leading-relaxed">
                Our consulting services focus on improving energy efficiency for businesses, reducing costs, and enhancing sustainability.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">Sustainable Waste Management</h3>
              <img src="images/waste manager.jpg" alt="Solar Energy" className="w-full  object-cover" />
              <p className="text-lg leading-relaxed">
                We offer sustainable waste management solutions that minimize environmental impact and promote recycling and reuse.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">Green Building Solutions</h3>
              <img src="images/green-building.jpg" alt="Solar Energy" className="w-full  object-cover mt-[50px]" />
              <p className="text-lg leading-relaxed">
                Our green building solutions help you design and construct environmentally friendly buildings that save energy and resources.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="service-box text-center p-6 border border-gray-300 rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-2">Community Outreach Programs</h3>
              <img src="/images/community-engagement.jpg" alt="img" className="w-full  object-cover" />
              <p className="text-lg leading-relaxed">
                We engage communities through outreach programs that promote sustainability and environmental stewardship.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-8">
          <Link href="/contact" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
            Contact Us for More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
