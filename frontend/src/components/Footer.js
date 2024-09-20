import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
      
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Help</h5>
            <ul>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#support" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rajshekhar989898/"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 2.5c-3.28 0-5.63 0-7.63.02-2.04.02-3.75 1.71-3.77 3.77-.02 2-0.02 4.35-0.02 7.63s0 5.63.02 7.63c.02 2.04 1.73 3.75 3.77 3.77 2 .02 4.35.02 7.63.02s5.63 0 7.63-0.02c2.04-0.02 3.75-1.73 3.77-3.77 0.02-2 0.02-4.35 0.02-7.63s-0.02-5.63-0.02-7.63c-0.02-2.04-1.73-3.75-3.77-3.77-2-0.02-4.35-0.02-7.63-0.02zM12 0c3.24 0 3.64 0.01 4.93 0.07 2.17 0.09 3.88 1.14 4.45 2.68 0.58 1.56 0.58 3.22 0.58 5.64s0 4.08-0.58 5.64c-0.57 1.54-2.28 2.59-4.45 2.68-1.29 0.06-1.69 0.07-4.93 0.07-3.24 0-3.64-0.01-4.93-0.07-2.17-0.09-3.88-1.14-4.45-2.68-0.58-1.56-0.58-3.22-0.58-5.64s0-4.08 0.58-5.64c0.57-1.54 2.28-2.59 4.45-2.68 1.29-0.06 1.69-0.07 4.93-0.07zM12 5.83c-3.38 0-6.13 2.75-6.13 6.13s2.75 6.13 6.13 6.13 6.13-2.75 6.13-6.13-2.75-6.13-6.13-6.13zM12 15.54c-1.93 0-3.54-1.61-3.54-3.54s1.61-3.54 3.54-3.54 3.54 1.61 3.54 3.54-1.61 3.54-3.54 3.54zM18.83 6.17c-0.35 0-0.63-0.28-0.63-0.63s0.28-0.63 0.63-0.63 0.63 0.28 0.63 0.63-0.28 0.63-0.63 0.63z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.83.656-2.827.775 1.016-.608 1.794-1.568 2.164-2.724-.951.563-2.005.973-3.127 1.193-.897-.956-2.175-1.557-3.596-1.557-2.717 0-4.93 2.213-4.93 4.93 0 .39.043.77.126 1.137-4.092-.205-7.72-2.16-10.15-5.13-.424.726-.667 1.567-.667 2.464 0 1.702.866 3.2 2.18 4.08-.805-.025-1.563-.247-2.228-.616v.062c0 2.373 1.688 4.352 3.926 4.804-.411.111-.845.171-1.293.171-.317 0-.627-.031-.931-.088.63 1.951 2.445 3.376 4.605 3.417-1.684 1.322-3.805 2.109-6.104 2.109-.397 0-.79-.023-1.18-.07 2.186 1.397 4.777 2.214 7.577 2.214 9.07 0 14.035-7.52 14.035-14.035 0-.213-.005-.425-.015-.637.962-.694 1.796-1.56 2.46-2.548z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/raj-shekhar-054082285/"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M21 21h-4.5v-5.5c0-1.31-0.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9V9h4.2v1.83h0.06c0.58-1.1 2-2.27 4.15-2.27 4.43 0 5.24 2.91 5.24 6.68V21zM4.5 4.5C3.12 4.5 2 5.62 2 7s1.12 2.5 2.5 2.5S7 8.38 7 7 5.88 4.5 4.5 4.5zM6.5 21H2V9h4.5v12z" />
                </svg>
              </a>
            
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} JiffyCart. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
