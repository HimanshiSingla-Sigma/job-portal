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




import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer h-8 w-auto"
          src={assets.logo}
          alt="Company logo"
        />
        {user ? (
          <div className="flex items-center gap-4">
            <Link
              to={"/applications"}
              className="px-4 py-2 text-sm md:text-base font-semibold text-blue-600 rounded-full border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            >
              Applied Jobs
            </Link>
            <span className="hidden h-5 w-px bg-gray-300 md:block"></span>
            <p className="hidden md:block text-gray-700 font-medium">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
              onClick={e => setShowRecruiterLogin(true)}
            >
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;