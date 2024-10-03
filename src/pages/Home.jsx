import React from 'react';
import { FaMoneyBillWave, FaChartLine, FaBullhorn, FaCalculator, FaCheckCircle, FaShoppingCart, FaCogs, FaUsers, FaRocket } from 'react-icons/fa'; // Additional Icons
import Footer from './Footer';
import img1 from "/src/assets/logo1.jpg"
import img2 from "/src/assets/logo2.jpg"
import img3 from "/src/assets/rwtlogo.png"

const Home = () => {
  const services = [
    { name: 'Inventory Management System', icon: <FaMoneyBillWave />, link:'https://dharoharvintagestore.com/'},
    { name: 'Hotel Management System', icon: <FaChartLine />, link: 'https://resturant-application-react.vercel.app/1/6'},
    { name: 'Petrol Management System', icon: <FaBullhorn />, link: 'https://marwah-petrol-pump.vercel.app/'},
    { name: 'Club Management System', icon: <FaCalculator />, link: 'https://sahas-phi.vercel.app/'},
    { name: 'College Management System', icon: <FaCheckCircle />, link: '/src/College.jsx'},
    { name: 'Vendor Management System', icon: <FaShoppingCart />, link: '/src/Vendor.jsx'},
  ];

  return (
    <>
    {/* Header Section */}
<div className="relative bg-gray-100 flex flex-col items-center justify-center">
  {/* Logo Section */}
  <div className="absolute top-4 w-full flex justify-between items-center px-4">
    {/* Logo1 on the left */}
    <div className="flex justify-start">
    <img src={img1} alt="Logo 1" className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" /> {/* Reduced size */}
    </div>

    {/* RWT Logo in the center */}
    <div className="flex justify-center">
      <img src={img3} alt="Business Platform" className="h-20 w-20 md:h-60 md:w-60 object-contain rounded-md" /> {/* Reduced size */}
    </div>

    {/* Logo2 on the right */}
    <div className="flex justify-end">
      <img src={img2} alt="Logo 2" className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" /> {/* Reduced size */}
    </div>
  </div>

  {/* Heading Section */}
  {/* <div className="flex-grow flex flex-col items-center justify-center text-center z-10 mt-20 md:mt-28">
    <h1 className="text-4xl p-4 md:text-6xl font-bold text-black fancy-text mb-4 md:mb-6 font-QwitcherGrypen animate-fadeIn">
      Manage your entire business from a single platform.
    </h1>
    <p className="text-lg md:text-2xl text-black fancy-text font-sans animate-fadeIn delay-1s">
      Simple, effective, and affordable!
    </p>
  </div> */}
</div>



      {/* Services Section */}
      <section className="py-16 bg-white mt-20 md:mt-40">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 animate-slideIn">Our Services</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Adjusted gap */}
        {services.map((service, index) => (
          <a 
            key={index} 
            href={service.link}  // Add the link to the service
            className="bg-gray-100 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn w-40 flex flex-col justify-center items-center mx-auto" 
            target="_blank"      // Optional: open link in new tab
            rel="noopener noreferrer"  // Optional: security best practice
          >
            <div className="text-3xl text-indigo-500 mb-1">{service.icon}</div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1 text-center break-words">{service.name}</h3> {/* Reduced font size and allowed line breaks */}
          </a>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaCogs className="text-6xl text-indigo-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailor-made software solutions designed to fit your unique business needs.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaUsers className="text-6xl text-indigo-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">A dedicated team of experts ensures top-quality service and support.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaRocket className="text-6xl text-indigo-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">We provide fast, reliable, and efficient solutions to grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-lg mb-8">Get in touch with us and discover how our solutions can help you succeed.</p>
          <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
