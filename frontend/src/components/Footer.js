

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Footer */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           {/* Company */}
//           <div>
//             <h5 className="text-lg font-semibold mb-2">Company</h5>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#about" className="hover:underline">About Us</a>
//               </li>
//               <li>
//                 <a href="#careers" className="hover:underline">Careers</a>
//               </li>
//               <li>
//                 <a href="#blog" className="hover:underline">Blog</a>
//               </li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div>
//             <h5 className="text-lg font-semibold mb-2">Help</h5>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#contact" className="hover:underline">Contact Us</a>
//               </li>
//               <li>
//                 <a href="#support" className="hover:underline">Support</a>
//               </li>
//               <li>
//                 <a href="#faq" className="hover:underline">FAQ</a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
//             <div className="flex justify-center md:justify-start space-x-4">
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/rajshekhar989898/"
//                 className="text-gray-400 hover:text-white transition"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                   className="w-6 h-6" fill="currentColor">
//                   <path d="M12 2.5c-3.28 0-5.63...z" />
//                 </svg>
//               </a>

//               {/* Twitter */}
//               <a
//                 href="https://twitter.com"
//                 className="text-gray-400 hover:text-white transition"
//               >
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.83...z" />
//                 </svg>
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/in/raj-shekhar-054082285/"
//                 className="text-gray-400 hover:text-white transition"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                   className="w-6 h-6" fill="currentColor">
//                   <path d="M21 21h-4.5v-5.5c0-1.31...z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
//           <p>&copy; {new Date().getFullYear()} JiffyCart. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Company</h5>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Help</h5>
            <ul className="space-y-1">
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#support" className="hover:underline">Support</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <a
                href="https://www.instagram.com/rajshekhar989898/"
                className="text-gray-400 hover:text-white transition"
                target="_blank" rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
                target="_blank" rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-shekhar-054082285/"
                className="text-gray-400 hover:text-white transition"
                target="_blank" rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} JiffyCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

