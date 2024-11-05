"use client";
import TestimonialSlider from '../app/TestimonialSlider/page';

import '../app/globals.css';
import Navbar from '../components/navbar/page';
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";





export default function Home() {
  const router = useRouter();
  const { connected, publicKey } = useWallet();
  useEffect(() => {
    if (connected) {
      router.push("/dashboard")
    }
  }, [connected, router, publicKey])

  return (

    <div className="">


      {/* <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
    </div> */}


      <section className="slider_section">
        <div id="myCarousel" className="relative w-full overflow-hidden">
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button data-slide="0" className="w-3 h-3 rounded-full bg-gray-400" aria-current="false"></button>
            <button data-slide="1" className="w-3 h-3 rounded-full bg-gray-400 active" aria-current="true"></button>
            <button data-slide="2" className="w-3 h-3 rounded-full bg-gray-400" aria-current="false"></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner relative w-full h-screen">
            {/* First Slide */}
            <div className="carousel-item active relative w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
              <div className="container mx-auto text-center text-white space-y-4 p-8">
                <h1 className="text-5xl font-bold">EcoTrade</h1>
                <span className="text-2xl block">EcoTrade Farming Company</span>
                <p className="text-lg max-w-2xl mx-auto">
                  EcoTrade Farming Company is dedicated to pioneering sustainable agriculture and responsible trade. By focusing on eco-friendly farming practices and supporting local communities, EcoTrade connects consumers with quality products that prioritize the planet. Join us in fostering a greener, more sustainable future through every purchase.
                </p>

                <div className="space-x-4">
                  <a href="/about" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">About us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>




      <div className="w-10/12 m-auto">
        <div className="offer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="title">
                  <h2>Special <strong className="text-dark">Offers</strong></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-8">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 p-4">
                  <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md">
                    <h3 className="text-3xl font-bold mb-2">Afforestation</h3>
                    <figure>
                      <img src="images/images (9).jpeg" alt="img" className="w-full h-[250px]" />
                    </figure>
                    <p className="mt-4 text-lg leading-relaxed">
                      Embracing the future, afforestation breathes new life into barren landscapes, building hope and a greener tomorrow.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 p-4">
                  <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md">
                    <h3 className="text-3xl font-bold mb-2">Carbon Credit</h3>
                    <figure>
                      <img src="/images/images (10).jpeg" alt="img" className="w-full h-[250px]" />
                    </figure>
                    <p className="mt-4 text-lg leading-relaxed">
                      A step toward sustainability, carbon credits empower companies to make a meaningful difference for our planet.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/3 p-4">
                  <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md">
                    <h3 className="text-3xl font-bold mb-2">Factory</h3>
                    <figure>
                      <img src="images/images (11).jpeg" alt="img" className="w-full h-[250px]" />
                    </figure>
                    <p className="mt-4 text-lg leading-relaxed">
                      From ideas to reality, factories drive progress, crafting the products that shape our daily lives and futures.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className="bg-gray-100 py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-4 flex">
                <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md flex flex-col justify-between">
                  <h3 className="text-3xl font-bold mb-2">Renewable Energy</h3>
                  <figure className="flex-grow">
                    <img src="/images/solar.jpg" alt="img" className="w-full h-[250px] object-cover" />
                  </figure>
                  <p className="mt-4 text-lg leading-relaxed">
                    Harnessing the power of nature, renewable energy transforms sunlight, wind, and water into clean, sustainable resources, paving the way for a brighter and more sustainable future.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-4 flex">
                <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md flex flex-col justify-between">
                  <h3 className="text-3xl font-bold mb-2">Water Conservation</h3>
                  <figure className="flex-grow">
                    <img src="/images/water-conservation.jpg" alt="img" className="w-full h-[250px] object-cover" />
                  </figure>
                  <p className="mt-4 text-lg leading-relaxed">
                    Water conservation is crucial for sustaining our ecosystems and ensuring future generations have access to this precious resource. By adopting mindful practices, we can protect our waterways and promote a healthier planet.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-4 flex">
                <div className="offer_box text-center p-4 border border-gray-300 rounded-md bg-white shadow-md flex flex-col justify-between">
                  <h3 className="text-3xl font-bold mb-2">Community Engagement</h3>
                  <figure className="flex-grow">
                    <img src="/images/community-engagement.jpg" alt="img" className="w-full h-[250px] object-cover" />
                  </figure>
                  <p className="mt-4 text-lg leading-relaxed">
                    Empowering local voices, community engagement fosters collaboration and inspires collective action toward sustainability. By uniting individuals and organizations, we create impactful initiatives that nurture our environment and strengthen our shared commitment to a greener future.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>







      <div className="w-10/12 m-auto">
        <div id="about" className="about py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                <div className="about_box space-y-4">
                  <h2 className="text-3xl font-bold">
                    About EcoTrade <br />
                    <strong className="text-gray-900">Farm and Company</strong>
                  </h2>
                  <p className="text-gray-700">
                    EcoTrade Farm and Company is at the forefront of sustainable commerce, bringing environmentally responsible products and services to businesses and communities alike. With a focus on ethical sourcing, carbon reduction, and eco-friendly practices, EcoTrade strives to reshape the market with a green approach. Our mission is to create a positive environmental impact by connecting conscious consumers with products that support a healthier planet, ensuring each trade contributes to a more sustainable future.
                  </p>

                </div>

              </div>
              <div className="w-full lg:w-7/12">
                <div className="about_img">
                  <figure>
                    <img src="images/about.png" alt="About Moon Farm and Company" className="w-full rounded-lg shadow-lg" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="for_box_bg py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="for_box text-center p-6 bg-white rounded-lg shadow-md">
                <i>
                  <img src="images/1.png" alt="#" className="mx-auto mb-4" />
                </i>
                <span className="text-2xl font-bold block">1996923</span>
                <h3 className="text-lg font-semibold">Harvesta</h3>
              </div>
              <div className="for_box text-center p-6 bg-white rounded-lg shadow-md">
                <i>
                  <img src="images/2.png" alt="#" className="mx-auto mb-4" />
                </i>
                <span className="text-2xl font-bold block">8000</span>
                <h3 className="text-lg font-semibold">Units of Cattle</h3>
              </div>
              <div className="for_box text-center p-6 bg-white rounded-lg shadow-md">
                <i>
                  <img src="images/3.png" alt="#" className="mx-auto mb-4" />
                </i>
                <span className="text-2xl font-bold block">60002</span>
                <h3 className="text-lg font-semibold">Farm</h3>
              </div>
              <div className="for_box text-center p-6 bg-white rounded-lg shadow-md">
                <i>
                  <img src="images/4.png" alt="#" className="mx-auto mb-4" />
                </i>
                <span className="text-2xl font-bold block">1623</span>
                <h3 className="text-lg font-semibold">Units of Technic</h3>
              </div>
            </div>
          </div>
        </div>









        <div id="testimonial" className="clients pt-8">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Testimonial</h2>
            </div>
          </div>
        </div>


        <TestimonialSlider />

        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2>Get In <strong className="black"> Toucgh</strong></h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full p-4">
          <div className="w-full p-4 flex justify-center items-center">
            <div className="map-section bg-black p-8 md:w-6/12 auto ">
              <div className="container">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <form className="space-y-4">
                      <div className="w-full">
                        <input
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Name"
                          type="text"
                          name="Name"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Email"
                          type="text"
                          name="Email"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Phone"
                          type="text"
                          name="Phone"
                        />
                      </div>
                      <div className="w-full">
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Message"
                          name="Message"
                        ></textarea>
                      </div>
                      <div className="w-full">
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="map" className="mt-8"></div>
            </div>
          </div>
        </div>
      </div>

      <script src="../public/js/bootstrap.bundle.min.js"></script>
      <script src="../public/js/custom.js"></script>
      <script src="../public/js/jquery-3.0.0.min.js"></script>
      <script src="../public/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="../public/js/jquery.min.js"></script>
      <script src="../public/js/jquery.validate.js"></script>
      <script src="../public/js/popper.min.js"></script>
      <script src="../public/js/plugin.js"></script>



      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>



    </div>

  );
}
