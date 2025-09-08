import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Dashboard() {
  const navigate = useNavigate();

  const { companyData , setCompanyData , setCompanyToken } = useContext(AppContext);

  // function to logout for company
  const logout = async ()=>{
    setCompanyToken(null);
    localStorage.removeItem('companyToken');
    setCompanyData(null)
    navigate('/')
  }

  useEffect(()=>{
    if(companyData){
      navigate('/dashboard/manage-jobs')
    }
  },[companyData])

  return (
    <div className="min-h-screen">
      {/* navbar for recruiter panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={(e) => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          {companyData && (
            <div className="flex items-center gap-3">
              <p className="max-sm:hidden">Welcome, {companyData.name}</p>
              <div className="relative group">
                <img
                  className="w-8 border rounded-full"
                  src={companyData.image}
                  alt=""
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounde pt-12">
                  <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                    <li onClick={logout} className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-start">
        {/* left sidebar with options to add job, manage jobs and view applications */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              to={"/dashboard/add-job"}
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              to={"/dashboard/manage-jobs"}
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              to={"/dashboard/view-applications"}
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 h-full p-2 sm:p-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


// import React, { useContext, useEffect } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// function Dashboard() {
//   const navigate = useNavigate();
//   const { companyData, setCompanyData, setCompanyToken } = useContext(AppContext);

//   // function to logout for company
//   const logout = async () => {
//     setCompanyToken(null);
//     localStorage.removeItem('companyToken');
//     setCompanyData(null)
//     navigate('/')
//   }

//   useEffect(() => {
//     if (companyData) {
//       navigate('/dashboard/manage-jobs')
//     }
//   }, [companyData])

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* navbar for recruiter panel */}
//       <div className="bg-gray-800 shadow-2xl border-b border-gray-700 py-4">
//         <div className="px-5 flex justify-between items-center">
//           <img
//             onClick={(e) => navigate("/")}
//             className="max-sm:w-32 cursor-pointer"
//             src={assets.logo}
//             alt=""
//           />
//           {companyData && (
//             <div className="flex items-center gap-3">
//               <p className="max-sm:hidden text-white">Welcome, {companyData.name}</p>
//               <div className="relative group">
//                 <img
//                   className="w-8 h-8 border border-gray-600 rounded-full object-cover"
//                   src={companyData.image}
//                   alt=""
//                 />
//                 <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-white rounded pt-12">
//                   <ul className="list-none m-0 p-2 bg-gray-800 rounded-md border border-gray-700 text-sm shadow-2xl">
//                     <li 
//                       onClick={logout} 
//                       className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-700 rounded"
//                     >
//                       Logout
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="flex items-start">
//         {/* left sidebar with options to add job, manage jobs and view applications */}
//         <div className="inline-block min-h-screen border-r-2 border-gray-700 bg-gray-800">
//           <ul className="flex flex-col items-start pt-5 text-gray-300">
//             <NavLink
//               to={"/dashboard/add-job"}
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-700 ${
//                   isActive && "bg-gradient-to-r from-blue-700/30 to-cyan-600/30 border-r-4 border-cyan-500"
//                 }`
//               }
//             >
//               <img className="min-w-4 filter invert" src={assets.add_icon} alt="" />
//               <p className="max-sm:hidden">Add Job</p>
//             </NavLink>
//             <NavLink
//               to={"/dashboard/manage-jobs"}
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-700 ${
//                   isActive && "bg-gradient-to-r from-blue-700/30 to-cyan-600/30 border-r-4 border-cyan-500"
//                 }`
//               }
//             >
//               <img className="min-w-4 filter invert" src={assets.home_icon} alt="" />
//               <p className="max-sm:hidden">Manage Jobs</p>
//             </NavLink>
//             <NavLink
//               to={"/dashboard/view-applications"}
//               className={({ isActive }) =>
//                 `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-700 ${
//                   isActive && "bg-gradient-to-r from-blue-700/30 to-cyan-600/30 border-r-4 border-cyan-500"
//                 }`
//               }
//             >
//               <img className="min-w-4 filter invert" src={assets.person_tick_icon} alt="" />
//               <p className="max-sm:hidden">View Applications</p>
//             </NavLink>
//           </ul>
//         </div>
//         <div className="flex-1 h-full p-2 sm:p-5 bg-gray-900">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;