import React from 'react';
import img1 from "/src/assets/logo1.jpg"
import img2 from "/src/assets/logo2.jpg"
import img3 from "/src/assets/rwtlogo.png"


const Home = () => {
  return (
    <>
    {/* Header Section */}
<div className="relative bg-gray-100 flex flex-col items-center justify-center">
  {/* Logo Section */}
  <div className="absolute top-4 w-full flex justify-between items-center px-4">
    <div className="flex justify-start">
    <img src={img1} alt="Logo 1" className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" /> {/* Reduced size */}
    </div>

    <a href = "https://www.nexuxrise.com/">
    <div className="flex justify-center" >
    <img src={img3} alt="Business Platform" className="h-32 w-32 md:h-60 md:w-60 object-contain rounded-md" /> {/* Reduced size */}
    </div></a>
    
    <div className="flex justify-end">
      <img src={img2} alt="Logo 2" className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" /> {/* Reduced size */}
    </div>
  </div>
</div>
    </>
  );
};

export default Home;
