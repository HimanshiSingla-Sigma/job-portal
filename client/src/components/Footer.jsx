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


import React from 'react'
import { assets } from "../assets/assets"

function Footer() {
    return (
        <footer className='container mx-auto mt-20 border-t border-gray-200 px-4 py-8 md:flex md:items-center md:justify-between'>
            {/* Logo and Copyright */}
            <div className='flex items-center gap-4'>
                <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
                <p className='text-sm text-gray-500 md:pl-4 md:border-l md:border-gray-300'>
                    Copyright © 2025 AlmightyCoders. All rights reserved.
                </p>
            </div>

            {/* Social Icons */}
            <div className='mt-6 flex justify-center gap-4 md:mt-0'>
                <a href="#" aria-label="Facebook">
                    <img
                        src={assets.facebook_icon}
                        alt="Facebook"
                        className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                    />
                </a>
                <a href="#" aria-label="Twitter">
                    <img
                        src={assets.twitter_icon}
                        alt="Twitter"
                        className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                    />
                </a>
                <a href="#" aria-label="Instagram">
                    <img
                        src={assets.instagram_icon}
                        alt="Instagram"
                        className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;