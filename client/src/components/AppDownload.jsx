// import React from "react";
// import { assets } from "../assets/assets";

// function AppDownload() {
//   return (
//     <div className="container px-2 2xl:px-20 mx-auto my-20 ">
//       <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg  ">
//         <div>
//           <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">dowload mobile app for better experience</h1>
//           <div className="flex gap-4 ">
//             <a href='#' className="inline-block">
//               <img className="h-12 " src={assets.play_store} />
//             </a>
//             <a  href='#' className="inline-block">
//               <img src={assets.app_store} />
//             </a>
//           </div>
//         </div>
//         <img src={assets.app_main_img} className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"/>
//       </div>
//     </div>
//   );
// }

// export default AppDownload;


import React from "react";
import { assets } from "../assets/assets";

function AppDownload() {
  return (
    <div className="container mx-auto my-20 px-4 md:px-8 xl:px-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 p-8 md:p-16 lg:p-24">
        <div className="z-10 relative">
          <h1 className="max-w-md text-3xl font-bold leading-tight text-gray-800 md:text-4xl lg:text-5xl">
            Download the mobile app for a better experience
          </h1>
          <div className="mt-8 flex gap-4">
            <a href="#">
              <img
                src={assets.play_store}
                alt="Google Play Store"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
            <a href="#">
              <img
                src={assets.app_store}
                alt="Apple App Store"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
        <img
          src={assets.app_main_img}
          alt="Mobile App"
          className="absolute bottom-0 right-0 hidden w-96 translate-x-12 translate-y-12 lg:block xl:w-[480px] xl:translate-x-16 xl:translate-y-16"
        />
      </div>
    </div>
  );
}

export default AppDownload;
