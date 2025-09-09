// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// function Navbar() {
//   const navigate = useNavigate();
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const {setShowRecruiterLogin} = useContext(AppContext);

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         <img onClick={()=> navigate('/')} className="cursor-pointer" src={assets.logo} alt="" />
//         {user ? (
//           <div className="flex items-center gap-3">
//             <Link to={'/applications'}>Applied Jobs</Link>
//             <p>|</p>
//             <p className="max-sm:hidden">Hi, {user.firstName+" "+user.lastName}</p>
//             <UserButton/>
//           </div>
//         ) : (
//           <div className="flex gap-4 max-sm:text-xs">
//             <button className="text-gray-600" onClick={e => setShowRecruiterLogin(true)}>Recruiter Login</button>
//             <button
//               onClick={(e) => openSignIn()}
//               className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;




// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// function Navbar() {
//   const navigate = useNavigate();
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const { setShowRecruiterLogin } = useContext(AppContext);

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         <img
//           onClick={() => navigate("/")}
//           className="cursor-pointer h-8 w-auto"
//           src={assets.logo}
//           alt="Company logo"
//         />
//         {user ? (
//           <div className="flex items-center gap-4">
//             <Link
//               to={"/applications"}
//               className="px-4 py-2 text-sm md:text-base font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white"
//             >
//               Applied Jobs
//             </Link>
//             <span className="hidden h-5 w-px bg-gray-300 md:block"></span>
//             <p className="hidden md:block text-gray-700 font-medium">
//               Hi, {user.firstName} {user.lastName}
//             </p>
//             <UserButton />
//           </div>
//         ) : (
//           <div className="flex gap-4 max-sm:text-xs">
//             <button
//               className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
//               onClick={e => setShowRecruiterLogin(true)}
//             >
//               Recruiter Login
//             </button>
//             <button
//               onClick={(e) => openSignIn()}
//               className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;




// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// function Navbar() {
//   const navigate = useNavigate();
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const { setShowRecruiterLogin } = useContext(AppContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-md py-3 sticky top-0 z-50">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             onClick={() => navigate("/")}
//             className="cursor-pointer h-9 w-auto transition-transform duration-300 hover:scale-105"
//             src={assets.logo}
//             alt="Company logo"
//           />
//           <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">CareerHub</span>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         {user ? (
//           <div className="hidden md:flex items-center gap-4">
//             <Link
//               to={"/applications"}
//               className="px-5 py-2.5 text-sm font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg flex items-center gap-2"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Applied Jobs
//             </Link>
//             <span className="h-6 w-px bg-gray-300"></span>
//             <div className="flex items-center gap-3 bg-gray-50 rounded-full pl-4 pr-2 py-1">
//               <p className="text-gray-700 font-medium">
//                 Hi, {user.firstName}
//               </p>
//               <div className="border-l border-gray-200 pl-2">
//                 <UserButton appearance={{
//                   elements: {
//                     avatarBox: "w-9 h-9",
//                   }
//                 }} />
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="hidden md:flex items-center gap-5">
//             <button
//               className="text-gray-600 font-medium hover:text-blue-600 transition-colors flex items-center gap-1 group"
//               onClick={e => setShowRecruiterLogin(true)}
//             >
//               <svg className="w-5 h-5 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               Recruiter Login
//             </button>
//             <button
//               onClick={(e) => openSignIn()}
//               className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//               </svg>
//               Login
//             </button>
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t">
//             <div className="container px-4 py-4 mx-auto">
//               {user ? (
//                 <div className="flex flex-col gap-4">
//                   <Link
//                     to={"/applications"}
//                     className="px-5 py-2.5 text-sm font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white flex items-center gap-2 justify-center"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                     Applied Jobs
//                   </Link>
//                   <div className="flex items-center justify-center gap-3 pt-2 border-t border-gray-100">
//                     <p className="text-gray-700 font-medium">
//                       Hi, {user.firstName}
//                     </p>
//                     <UserButton />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-4">
//                   <button
//                     className="text-gray-600 font-medium hover:text-blue-600 transition-colors flex items-center gap-2 justify-center py-2"
//                     onClick={() => {
//                       setShowRecruiterLogin(true);
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     Recruiter Login
//                   </button>
//                   <button
//                     onClick={() => {
//                       openSignIn();
//                       setIsMenuOpen(false);
//                     }}
//                     className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                     </svg>
//                     Login
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;





import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { setShowRecruiterLogin } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About"},
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer h-9 w-auto transition-transform duration-300 hover:scale-105"
            src={assets.logo}
            alt="Company logo"
          />
          <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">AlimightyCoders</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* User Actions */}
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <Link
              to={"/applications"}
              className="px-5 py-2.5 text-sm font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Applied Jobs
            </Link>
            <span className="h-6 w-px bg-gray-300"></span>
            <div className="flex items-center gap-3 bg-gray-50 rounded-full pl-4 pr-2 py-1">
              <p className="text-gray-700 font-medium">
                Hi, {user.firstName}
              </p>
              <div className="border-l border-gray-200 pl-2">
                <UserButton appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  }
                }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5">
            <button
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors flex items-center gap-1 group"
              onClick={e => setShowRecruiterLogin(true)}
            >
              <svg className="w-5 h-5 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t">
            <div className="container px-4 py-4 mx-auto">
              {/* Navigation Links for Mobile */}
              <div className="flex flex-col gap-4 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {user ? (
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  <Link
                    to={"/applications"}
                    className="px-5 py-2.5 text-sm font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white flex items-center gap-2 justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Applied Jobs
                  </Link>
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-medium">
                      Hi, {user.firstName}
                    </p>
                    <UserButton />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  <button
                    className="text-gray-600 font-medium hover:text-blue-600 transition-colors flex items-center gap-2 justify-center py-2"
                    onClick={() => {
                      setShowRecruiterLogin(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Recruiter Login
                  </button>
                  <button
                    onClick={() => {
                      openSignIn();
                      setIsMenuOpen(false);
                    }}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;