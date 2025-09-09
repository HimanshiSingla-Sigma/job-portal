// import React, { useContext, useEffect, useState } from "react";
// import { viewApplicationsPageData, assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../components/Loading";

// function ViewApplications() {
//   const { backendUrl, companyToken } = useContext(AppContext);

//   const [applicants, setApplicants] = useState(false);

//   // function to fetch company job applications data
//   const fetchCompanyJobApplications = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/company/applicants", {
//         headers: { token: companyToken },
//       });
//       if (data.success) {
//         // to set latest applications on top
//         setApplicants(data.applications.reverse());
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // function to update job applications status
//   const changeJobApplicationStatus = async (id, status) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/company/change-status",
//         { id, status },
//         { headers: { token: companyToken } }
//       );
//       if (data.success) {
//         fetchCompanyJobApplications();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (companyToken) {
//       fetchCompanyJobApplications();
//     }
//   }, [companyToken]);

//   return applicants ? (
//     applicants.length === 0 ? (
//       <div className="flex items-center justify-center h-[70vh]">
//         <p className="text-xl sm:text-2xl">No Applications Available</p>
//       </div>
//     ) : (
//       <div className="container mx-auto p-4">
//         <div>
//           <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
//             <thead>
//               <tr className="border-b">
//                 <th className="py-2 px-4 text-left">#</th>
//                 <th className="py-2 px-4 text-left">User name</th>
//                 <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
//                 <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
//                 <th className="py-2 px-4 text-left">Resume</th>
//                 <th className="py-2 px-4 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants
//                 .filter((item) => item.jobId && item.userId)
//                 .map((applicant, index) => (
//                   <tr key={index} className="text-gray-700">
//                     <td className="py-2 px-4 border-b text-center">
//                       {index + 1}
//                     </td>
//                     <td className="py-2 px-4 border-b text-center flex items-center">
//                       <img
//                         className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
//                         src={applicant.userId.image}
//                       />
//                       <span>{applicant.userId.name}</span>
//                     </td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {applicant.jobId.title}
//                     </td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {applicant.jobId.location}
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       <a
//                         href={applicant.userId.resume}
//                         target="_blank"
//                         className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"
//                       >
//                         Resume <img src={assets.resume_download_icon} alt="" />
//                       </a>
//                     </td>
//                     <td className="py-2 px-4 border-b relative">
//                       {applicant.status === "Pending" ? (
//                         <div className="relative inline-block text-left group">
//                           <button className="text-gray-500 action-button">
//                             ...
//                           </button>
//                           <div className="z-10 hidden absolute right-0 left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
//                             <button
//                               onClick={() =>
//                                 changeJobApplicationStatus(
//                                   applicant._id,
//                                   "Accepted"
//                                 )
//                               }
//                               className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
//                             >
//                               Accept
//                             </button>
//                             <button
//                               onClick={() =>
//                                 changeJobApplicationStatus(
//                                   applicant._id,
//                                   "Rejected"
//                                 )
//                               }
//                               className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//                             >
//                               Reject
//                             </button>
//                             <button
//                               onClick={() =>
//                                 changeJobApplicationStatus(
//                                   applicant._id,
//                                   "Interviewing"
//                                 )
//                               }
//                               className="block w-full text-left px-4 py-2 text-purple-500 hover:bg-gray-100"
//                             >
//                               Interviewing
//                             </button>
//                           </div>
//                         </div>
//                       ) : (
//                         <div>{applicant.status}</div>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
//   ) : (
//     <Loading />
//   );
// }

// export default ViewApplications;

// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../components/Loading";

// function ViewApplications() {
//   const { backendUrl, companyToken } = useContext(AppContext);
//   const [applicants, setApplicants] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);

//   // function to fetch company job applications data
//   const fetchCompanyJobApplications = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/company/applicants", {
//         headers: { token: companyToken },
//       });
//       if (data.success) {
//         setApplicants(data.applications.reverse()); // latest on top
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // function to update job applications status
//   const changeJobApplicationStatus = async (id, status) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/company/change-status",
//         { id, status },
//         { headers: { token: companyToken } }
//       );
//       if (data.success) {
//         fetchCompanyJobApplications();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (companyToken) {
//       fetchCompanyJobApplications();
//     }
//   }, [companyToken]);

//   const handleInterviewingClick = (applicant) => {
//     setSelectedApplicant(applicant);
//     setShowModal(true);
//   };

//   const handleContinue = () => {
//     if (selectedApplicant) {
//       changeJobApplicationStatus(selectedApplicant._id, "Interviewing");
//       // window.location.href = "http://localhost:3001"; // redirect to another port
//       window.open("http://localhost:3000", "_blank");
//     }
//     setShowModal(false);
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     setSelectedApplicant(null);
//   };

//   return applicants ? (
//     applicants.length === 0 ? (
//       <div className="flex items-center justify-center h-[70vh]">
//         <p className="text-xl sm:text-2xl">No Applications Available</p>
//       </div>
//     ) : (
//       <div className="container mx-auto p-4">
//         <div>
//           <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
//             <thead>
//               <tr className="border-b">
//                 <th className="py-2 px-4 text-left">#</th>
//                 <th className="py-2 px-4 text-left">User name</th>
//                 <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
//                 <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
//                 <th className="py-2 px-4 text-left">Resume</th>
//                 <th className="py-2 px-4 text-left">Status</th>
//                 <th className="py-2 px-4 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants
//                 .filter((item) => item.jobId && item.userId)
//                 .map((applicant, index) => (
//                   <tr key={index} className="text-gray-700">
//                     <td className="py-2 px-4 border-b text-center">
//                       {index + 1}
//                     </td>
//                     <td className="py-2 px-4 border-b text-center flex items-center">
//                       <img
//                         className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
//                         src={applicant.userId.image}
//                       />
//                       <span>{applicant.userId.name}</span>
//                     </td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {applicant.jobId.title}
//                     </td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {applicant.jobId.location}
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       <a
//                         href={applicant.userId.resume}
//                         target="_blank"
//                         className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"
//                       >
//                         Resume <img src={assets.resume_download_icon} alt="" />
//                       </a>
//                     </td>

//                     {/* Status column */}
//                     <td className="py-2 px-4 border-b text-center">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium
//                           ${
//                             applicant.status === "Accepted"
//                               ? "bg-blue-100 text-blue-600"
//                               : applicant.status === "Rejected"
//                               ? "bg-red-100 text-red-600"
//                               : applicant.status === "Interviewing"
//                               ? "bg-purple-100 text-purple-600"
//                               : "bg-gray-100 text-gray-600"
//                           }`}
//                       >
//                         {applicant.status}
//                       </span>
//                     </td>

//                     {/* Action column */}
//                     <td className="py-2 px-4 border-b relative">
//                       <div className="relative inline-block text-left group">
//                         <button className="text-gray-500 action-button">...</button>
//                         <div className="z-10 hidden absolute right-0 left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
//                           <button
//                             onClick={() =>
//                               changeJobApplicationStatus(applicant._id, "Accepted")
//                             }
//                             className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
//                           >
//                             Accept
//                           </button>
//                           <button
//                             onClick={() =>
//                               changeJobApplicationStatus(applicant._id, "Rejected")
//                             }
//                             className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//                           >
//                             Reject
//                           </button>
//                           <button
//                             onClick={() => handleInterviewingClick(applicant)}
//                             className="block w-full text-left px-4 py-2 text-purple-500 hover:bg-gray-100"
//                           >
//                             Interviewing
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Confirmation Modal */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 Redirect Notice
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 You will be directed to another website. Do you want to continue?
//               </p>
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={handleCancel}
//                   className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleContinue}
//                   className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   ) : (
//     <Loading />
//   );
// }

// export default ViewApplications;

// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../components/Loading";

// function ViewApplications() {
//   const { backendUrl, companyToken } = useContext(AppContext);
//   const [applicants, setApplicants] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // function to fetch company job applications data
//   const fetchCompanyJobApplications = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/company/applicants", {
//         headers: { token: companyToken },
//       });
//       if (data.success) {
//         setApplicants(data.applications.reverse()); // latest on top
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // function to update job applications status
//   const changeJobApplicationStatus = async (id, status) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/company/change-status",
//         { id, status },
//         { headers: { token: companyToken } }
//       );
//       if (data.success) {
//         fetchCompanyJobApplications();
//         setActiveDropdown(null); // Close dropdown after selection
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (companyToken) {
//       fetchCompanyJobApplications();
//     }
//   }, [companyToken]);

//   const handleInterviewingClick = (applicant) => {
//     setSelectedApplicant(applicant);
//     setShowModal(true);
//     setActiveDropdown(null); // Close dropdown
//   };

//   const handleContinue = () => {
//     if (selectedApplicant) {
//       changeJobApplicationStatus(selectedApplicant._id, "Interviewing");
//       window.open("http://localhost:3000", "_blank");
//     }
//     setShowModal(false);
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     setSelectedApplicant(null);
//   };

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown-container')) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return applicants ? (
//     applicants.length === 0 ? (
//       <div className="flex items-center justify-center h-[70vh] bg-gray-900">
//         <div className="text-center p-8 bg-gray-800 rounded-xl shadow-lg">
//           <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//           </svg>
//           <p className="text-xl sm:text-2xl text-gray-300 mb-2">No Applications Available</p>
//           <p className="text-gray-400">You haven't received any applications yet</p>
//         </div>
//       </div>
//     ) : (
//       <div className="min-h-screen bg-gray-900 py-8 px-4">
//         <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6">
//             <h1 className="text-3xl font-bold text-white">Job Applications</h1>
//             <p className="text-indigo-200 mt-2">Manage all applicant submissions</p>
//           </div>

//           <div className="p-6">
//             <div className="overflow-x-auto rounded-lg border border-gray-700">
//               <table className="w-full bg-gray-800">
//                 <thead className="bg-gray-700">
//                   <tr>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">#</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">User name</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium max-sm:hidden">Job Title</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium max-sm:hidden">Location</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Resume</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Status</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applicants
//                     .filter((item) => item.jobId && item.userId)
//                     .map((applicant, index) => (
//                       <tr key={index} className="border-t border-gray-700 hover:bg-gray-750 transition-colors">
//                         <td className="py-3 px-4 text-center text-gray-300">
//                           {index + 1}
//                         </td>
//                         <td className="py-3 px-4 text-gray-300 flex items-center">
//                           <img
//                             className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
//                             src={applicant.userId.image}
//                             alt={applicant.userId.name}
//                           />
//                           <span>{applicant.userId.name}</span>
//                         </td>
//                         <td className="py-3 px-4 max-sm:hidden text-gray-400">
//                           {applicant.jobId.title}
//                         </td>
//                         <td className="py-3 px-4 max-sm:hidden text-gray-400">
//                           {applicant.jobId.location}
//                         </td>
//                         <td className="py-3 px-4">
//                           <a
//                             href={applicant.userId.resume}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-indigo-900/30 text-indigo-300 px-3 py-2 rounded-lg inline-flex gap-2 items-center hover:bg-indigo-900/50 transition-colors"
//                           >
//                             Resume
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                             </svg>
//                           </a>
//                         </td>

//                         {/* Status column */}
//                         <td className="py-3 px-4">
//                           <span
//                             className={`px-3 py-1 rounded-full text-sm font-medium
//                               ${
//                                 applicant.status === "Accepted"
//                                   ? "bg-blue-900/30 text-blue-300"
//                                   : applicant.status === "Rejected"
//                                   ? "bg-red-900/30 text-red-300"
//                                   : applicant.status === "Interviewing"
//                                   ? "bg-purple-900/30 text-purple-300"
//                                   : "bg-gray-700 text-gray-300"
//                               }`}
//                           >
//                             {applicant.status}
//                           </span>
//                         </td>

//                         {/* Action column - Improved dropdown */}
//                         <td className="py-3 px-4 relative dropdown-container">
//                           <div className="relative inline-block text-left">
//                             <button
//                               className="text-gray-400 hover:text-gray-200 p-2 rounded-lg hover:bg-gray-700 transition-colors"
//                               onClick={() => toggleDropdown(index)}
//                             >
//                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
//                               </svg>
//                             </button>

//                             {/* Dropdown menu */}
//                             {activeDropdown === index && (
//                               <div className="z-50 absolute right-0 mt-1 w-40 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
//                                 <button
//                                   onClick={() => changeJobApplicationStatus(applicant._id, "Accepted")}
//                                   className="block w-full text-left px-4 py-2 text-blue-300 hover:bg-gray-600 rounded-t-lg transition-colors"
//                                 >
//                                   Accept
//                                 </button>
//                                 <button
//                                   onClick={() => changeJobApplicationStatus(applicant._id, "Rejected")}
//                                   className="block w-full text-left px-4 py-2 text-red-300 hover:bg-gray-600 transition-colors"
//                                 >
//                                   Reject
//                                 </button>
//                                 <button
//                                   onClick={() => handleInterviewingClick(applicant)}
//                                   className="block w-full text-left px-4 py-2 text-purple-300 hover:bg-gray-600 rounded-b-lg transition-colors"
//                                 >
//                                   Interviewing
//                                 </button>
//                               </div>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Confirmation Modal */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
//             <div className="bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full border border-gray-700">
//               <h2 className="text-xl font-semibold text-gray-200 mb-4">
//                 Redirect Notice
//               </h2>
//               <p className="text-gray-400 mb-6">
//                 You will be directed to another website. Do you want to continue?
//               </p>
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={handleCancel}
//                   className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleContinue}
//                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-colors"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   ) : (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <Loading />
//     </div>
//   );
// }

// export default ViewApplications;

// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../components/Loading";

// function ViewApplications() {
//   const { backendUrl, companyToken } = useContext(AppContext);
//   const [applicants, setApplicants] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);

//   // function to fetch company job applications data
//   const fetchCompanyJobApplications = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/company/applicants", {
//         headers: { token: companyToken },
//       });
//       if (data.success) {
//         setApplicants(data.applications.reverse()); // latest on top
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // function to update job applications status
//   const changeJobApplicationStatus = async (id, status) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/company/change-status",
//         { id, status },
//         { headers: { token: companyToken } }
//       );
//       if (data.success) {
//         fetchCompanyJobApplications();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (companyToken) {
//       fetchCompanyJobApplications();
//     }
//   }, [companyToken]);

//   const handleInterviewingClick = (applicant) => {
//     setSelectedApplicant(applicant);
//     setShowModal(true);
//   };

//   const handleContinue = () => {
//     if (selectedApplicant) {
//       changeJobApplicationStatus(selectedApplicant._id, "Interviewing");
//       window.open("http://localhost:3000", "_blank");
//     }
//     setShowModal(false);
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     setSelectedApplicant(null);
//   };

//   return applicants ? (
//     applicants.length === 0 ? (
//       <div className="flex items-center justify-center h-[70vh] bg-gray-900">
//         <div className="text-center p-8 bg-gray-800 rounded-xl shadow-lg">
//           <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//           </svg>
//           <p className="text-xl sm:text-2xl text-gray-300 mb-2">No Applications Available</p>
//           <p className="text-gray-400">You haven't received any applications yet</p>
//         </div>
//       </div>
//     ) : (
//       <div className="min-h-screen bg-gray-900 py-8 px-4">
//         <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6">
//             <h1 className="text-3xl font-bold text-white">Job Applications</h1>
//             <p className="text-indigo-200 mt-2">Manage all applicant submissions</p>
//           </div>

//           <div className="p-6">
//             <div className="overflow-x-auto rounded-lg border border-gray-700">
//               <table className="w-full bg-gray-800">
//                 <thead className="bg-gray-700">
//                   <tr>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">#</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">User name</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium max-sm:hidden">Job Title</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium max-sm:hidden">Location</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Resume</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Status</th>
//                     <th className="py-3 px-4 text-left text-gray-300 font-medium">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applicants
//                     .filter((item) => item.jobId && item.userId)
//                     .map((applicant, index) => (
//                       <tr key={index} className="border-t border-gray-700 hover:bg-gray-750 transition-colors">
//                         <td className="py-3 px-4 text-center text-gray-300">
//                           {index + 1}
//                         </td>
//                         <td className="py-3 px-4 text-gray-300 flex items-center">
//                           <img
//                             className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
//                             src={applicant.userId.image}
//                             alt={applicant.userId.name}
//                           />
//                           <span>{applicant.userId.name}</span>
//                         </td>
//                         <td className="py-3 px-4 max-sm:hidden text-gray-400">
//                           {applicant.jobId.title}
//                         </td>
//                         <td className="py-3 px-4 max-sm:hidden text-gray-400">
//                           {applicant.jobId.location}
//                         </td>
//                         <td className="py-3 px-4">
//                           <a
//                             href={applicant.userId.resume}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-indigo-900/30 text-indigo-300 px-3 py-2 rounded-lg inline-flex gap-2 items-center hover:bg-indigo-900/50 transition-colors"
//                           >
//                             Resume
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                             </svg>
//                           </a>
//                         </td>

//                         {/* Status column */}
//                         <td className="py-3 px-4">
//                           <span
//                             className={`px-3 py-1 rounded-full text-sm font-medium
//                               ${
//                                 applicant.status === "Accepted"
//                                   ? "bg-blue-900/30 text-blue-300"
//                                   : applicant.status === "Rejected"
//                                   ? "bg-red-900/30 text-red-300"
//                                   : applicant.status === "Interviewing"
//                                   ? "bg-purple-900/30 text-purple-300"
//                                   : "bg-gray-700 text-gray-300"
//                               }`}
//                           >
//                             {applicant.status}
//                           </span>
//                         </td>

//                         {/* Action buttons - Always visible */}
//                         <td className="py-3 px-4">
//                           <div className="flex flex-col space-y-2">
//                             <button
//                               onClick={() => changeJobApplicationStatus(applicant._id, "Accepted")}
//                               className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded text-sm hover:bg-blue-900/60 transition-colors"
//                             >
//                               Accept
//                             </button>
//                             <button
//                               onClick={() => changeJobApplicationStatus(applicant._id, "Rejected")}
//                               className="px-3 py-1 bg-red-900/40 text-red-300 rounded text-sm hover:bg-red-900/60 transition-colors"
//                             >
//                               Reject
//                             </button>
//                             <button
//                               onClick={() => handleInterviewingClick(applicant)}
//                               className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded text-sm hover:bg-purple-900/60 transition-colors"
//                             >
//                               Interview
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Confirmation Modal */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
//             <div className="bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full border border-gray-700">
//               <h2 className="text-xl font-semibold text-gray-200 mb-4">
//                 Redirect Notice
//               </h2>
//               <p className="text-gray-400 mb-6">
//                 You will be directed to another website. Do you want to continue?
//               </p>
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={handleCancel}
//                   className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleContinue}
//                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-colors"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   ) : (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <Loading />
//     </div>
//   );
// }

// export default ViewApplications;

import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ViewApplications() {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [resumeFeedback, setResumeFeedback] = useState(null);

  const analyzeResume = async (resumeUrl) => {
    setAnalysisLoading(true);
    setResumeFeedback(""); // Clear previous feedback

    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/analyze-resume", // This is the new backend endpoint
        { resumeUrl },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        setResumeFeedback(data.feedback);
        toast.success("Resume analysis complete!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to analyze resume.");
      console.error(error);
    } finally {
      setAnalysisLoading(false);
    }
  };

  // function to fetch company job applications data
  const fetchCompanyJobApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/applicants", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setApplicants(data.applications.reverse()); // latest on top
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to update job applications status
  const changeJobApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-status",
        { id, status },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        fetchCompanyJobApplications();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications();
    }
  }, [companyToken]);

  const handleInterviewingClick = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const handleContinue = () => {
    if (selectedApplicant) {
      changeJobApplicationStatus(selectedApplicant._id, "Interviewing");
      window.open("http://localhost:3000", "_blank");
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedApplicant(null);
  };

  return applicants ? (
    applicants.length === 0 ? (
      <div className="flex items-center justify-center h-[70vh] bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          <p className="text-xl sm:text-2xl text-gray-700 mb-2">
            No Applications Available
          </p>
          <p className="text-gray-500">
            You haven't received any applications yet
          </p>
        </div>
      </div>
    ) : (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h1 className="text-3xl font-bold text-white">Job Applications</h1>
            <p className="text-blue-100 mt-2">
              Manage all applicant submissions
            </p>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      #
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      User name
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">
                      Job Title
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">
                      Location
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      Resume
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applicants
                    .filter((item) => item.jobId && item.userId)
                    .map((applicant, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-center text-gray-600 align-middle">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4 text-gray-800 align-middle">
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 rounded-full mr-3 max-sm:hidden object-cover"
                              src={applicant.userId.image}
                              alt={applicant.userId.name}
                            />
                            <span className="truncate">
                              {applicant.userId.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 max-sm:hidden text-gray-600 align-middle">
                          <span className="truncate">
                            {applicant.jobId.title}
                          </span>
                        </td>
                        <td className="py-3 px-4 max-sm:hidden text-gray-600 align-middle">
                          {applicant.jobId.location}
                        </td>
                        <td className="py-3 px-4 align-middle">
                          <a
                            href={applicant.userId.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg inline-flex gap-2 items-center hover:bg-blue-200 transition-colors"
                          >
                            Resume
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              ></path>
                            </svg>
                          </a>
                        </td>

                        {/* Status column */}
                        <td className="py-3 px-4 align-middle">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium
                              ${
                                applicant.status === "Accepted"
                                  ? "bg-green-100 text-green-700"
                                  : applicant.status === "Rejected"
                                  ? "bg-red-100 text-red-700"
                                  : applicant.status === "Interviewing"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            {applicant.status}
                          </span>
                        </td>

                        {/* Action buttons - Always visible */}
                        <td className="py-3 px-4 align-middle">
                          <div className="flex flex-col space-y-2">
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Accepted"
                                )
                              }
                              className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 transition-colors"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Rejected"
                                )
                              }
                              className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200 transition-colors"
                            >
                              Reject
                            </button>
                            <button
                              onClick={() => handleInterviewingClick(applicant)}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm hover:bg-purple-200 transition-colors"
                            >
                              Interview
                            </button>
                            <button
                              onClick={() =>
                                analyzeResume(applicant.userId.resume)
                              }
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                            >
                              Analyze Resume
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {analysisLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center space-y-4">
              {/* Tailwind spinner */}
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-700 font-medium text-lg">
                Analyzing resume... ⏳
              </p>
            </div>
          </div>
        )}

        {resumeFeedback && !analysisLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div
              className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full border border-gray-200
                    max-h-[80vh] overflow-y-auto"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Resume Analysis Feedback 📄
              </h2>

              {/* Recommendation & Summary */}
              <p className="text-lg font-semibold mb-2">
                Hiring Recommendation:
              </p>
              <p className="text-blue-700 font-medium mb-4">
                {resumeFeedback.hiring_recommendation}
              </p>

              <p className="text-lg font-semibold mb-2">Summary:</p>
              <p className="mb-4">{resumeFeedback.summary}</p>

              {/* Graph (Ratings) */}
              {resumeFeedback.ratings && (
                <div className="mb-6">
                  <p className="text-lg font-semibold mb-2">
                    Ratings Overview:
                  </p>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart
                      data={Object.entries(resumeFeedback.ratings).map(
                        ([key, value]) => ({
                          category: key.replace(/_/g, " "),
                          score: value,
                        })
                      )}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="category" />
                      <PolarRadiusAxis angle={30} domain={[0, 10]} />
                      <Radar
                        name="Candidate"
                        dataKey="score"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* Strengths */}
              <div className="mb-6">
                <p className="text-lg font-semibold">Strengths:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {resumeFeedback.strengths?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="mb-6">
                <p className="text-lg font-semibold">Weaknesses:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {resumeFeedback.weaknesses?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Close */}
              <div className="flex justify-end">
                <button
                  onClick={() => setResumeFeedback(null)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Redirect Notice
              </h2>
              <p className="text-gray-600 mb-6">
                You will be directed to another website. Do you want to
                continue?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinue}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  ) : (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Loading />
    </div>
  );
}

export default ViewApplications;
