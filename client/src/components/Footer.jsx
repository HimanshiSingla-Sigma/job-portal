// import React from 'react'
// import {assets} from "../assets/assets"

// function Footer() {
//     return ( 
//         <div className='container px-2 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
//             <img src={assets.logo}  alt="" width={160}/>
//             <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>| Copyright @AlmightyCoders.dev | All rights reserved.</p>
//             <div className='flex gap-2.5'>
//                 <img  width={38} src={assets.facebook_icon} alt="" />
//                 <img  width={38} src={assets.twitter_icon} alt="" />
//                 <img  width={38}src={assets.instagram_icon} alt="" />
//             </div>
//         </div>
//      );
// }

// export default Footer;


// import React from 'react'
// import { assets } from "../assets/assets"

// function Footer() {
//     return (
//         <footer className='container mx-auto mt-20 border-t border-gray-200 px-4 py-8 md:flex md:items-center md:justify-between'>
//             {/* Logo and Copyright */}
//             <div className='flex items-center gap-4'>
//                 <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
//                 <p className='text-sm text-gray-500 md:pl-4 md:border-l md:border-gray-300'>
//                     Copyright © 2025 AlmightyCoders. All rights reserved.
//                 </p>
//             </div>

//             {/* Social Icons */}
//             <div className='mt-6 flex justify-center gap-4 md:mt-0'>
//                 <a href="#" aria-label="Facebook">
//                     <img
//                         src={assets.facebook_icon}
//                         alt="Facebook"
//                         className="h-8 w-8 transition-transform duration-300 hover:scale-110"
//                     />
//                 </a>
//                 <a href="#" aria-label="Twitter">
//                     <img
//                         src={assets.twitter_icon}
//                         alt="Twitter"
//                         className="h-8 w-8 transition-transform duration-300 hover:scale-110"
//                     />
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                     <img
//                         src={assets.instagram_icon}
//                         alt="Instagram"
//                         className="h-8 w-8 transition-transform duration-300 hover:scale-110"
//                     />
//                 </a>
//             </div>
//         </footer>
//     );
// }

// export default Footer;




import React from 'react';
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={assets.logo} alt="AlmightyCoders" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-gray-900">AlmightyCoders</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              We build innovative digital solutions that empower businesses and transform ideas into reality. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="social-icon">
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="h-7 w-7 transition-transform duration-300 hover:scale-110"
                />
              </a>
              {/* <a href="#" aria-label="Twitter" className="social-icon">
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="h-7 w-7 transition-transform duration-300 hover:scale-110"
                />
              </a> */}
              <a href="#" aria-label="Instagram" className="social-icon">
                <img
                  src={assets.instagram_icon}
                  alt="Instagram"
                  className="h-7 w-7 transition-transform duration-300 hover:scale-110"
                />
              </a>
              {/* <a href="#" aria-label="LinkedIn" className="social-icon">
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="h-7 w-7 transition-transform duration-300 hover:scale-110"
                />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-600">123 Tech Street, San Francisco, CA 94103</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p className="text-gray-600">hello@almightycoders.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex-1 max-w-lg">
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2025 AlmightyCoders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
