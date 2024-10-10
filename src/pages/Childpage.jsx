import React from 'react'
import { FaUserTie, FaWallet,FaCogs, FaUsers, FaRocket,  } from 'react-icons/fa';
function childpage() {
    const services = [

        { name: 'Pannel Odoo', icon: <FaUserTie />, link: 'https://nexux2.odoo.com/' },
        { name: 'Tally Prime Gold', icon: <FaWallet />, link: 'http://tally.freedns.in.net' }, 
      ];
  return (
   <>
       <section className="py-16 bg-white mt-20 md:mt-40">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 animate-slideIn">Our Services</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {services.map((service, index) => (
          <a 
            key={index} 
            href={service.link}  
            className="bg-gray-100 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn w-40 flex flex-col justify-center items-center mx-auto" 
            target="_blank" 
            rel="noopener noreferrer"
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
           <a href="https://www.nexuxrise.com/"> Contact Us</a>
          </button>
        </div>
      </section>
   </>
  )
}

export default childpage