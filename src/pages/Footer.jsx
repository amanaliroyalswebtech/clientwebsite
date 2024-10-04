function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between p-12">
        <div className="mb-8 md:mb-0">
          <p className="hover:text-yellow-400 cursor-pointer">
            Email us: <a href="mailto:contact@royalswebtech.com" className="hover:text-yellow-400">contact@royalswebtech.com</a>
          </p>
          
          <h2 className='mt-12'>Address</h2>
          <div className="w-16 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          
          <p>Royals WebTech,<br /> Nagpur, Maharashtra 440001</p>

          {/* This will be shown on larger screens */}
          <div className="hidden md:block mt-4">
            {/* <p>Designed and Developed by <br />© Royals Webtech Pvt.Ltd. 2024</p> */}
          </div>

          <i className="fa-solid fa-building text-5xl mt-4"></i>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Royals WebTech</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">About Us</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Our Services</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Projects</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Contact Us</a>
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Clients</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Careers</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Partnerships</a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="https://www.facebook.com" aria-label="Facebook" className="block hover:text-yellow-400 cursor-pointer">Facebook</a>
            <a href="https://twitter.com" aria-label="Twitter" className="block hover:text-yellow-400 cursor-pointer">Twitter</a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="block hover:text-yellow-400 cursor-pointer">Instagram</a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="block hover:text-yellow-400 cursor-pointer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* This will be shown on smaller screens */}
      <div className="md:hidden pb-6 text-center">
        <p>Design and Developed by Royals WebTech</p>
      </div>
      
      <hr className=''/>
      <div className='hidden md:block'>
        <div className="footer-end pb-10 pt-5">
          <div className="footer-term">
            <h4>© Copyright Royals WebTech, 2024</h4>
          </div>
          <div className="term footer-term">
            Terms & Conditions | Privacy Policy | Contact Us
          </div>

          <div className="term footer-term">
            Design and Developed by{" "}
            <strong>
              &#169; <i>Royals WebTech</i>
            </strong>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
