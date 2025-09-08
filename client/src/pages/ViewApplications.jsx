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

import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function ViewApplications() {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

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
      // window.location.href = "http://localhost:3001"; // redirect to another port
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
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl sm:text-2xl">No Applications Available</p>
      </div>
    ) : (
      <div className="container mx-auto p-4">
        <div>
          <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">User name</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
                <th className="py-2 px-4 text-left">Resume</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants
                .filter((item) => item.jobId && item.userId)
                .map((applicant, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-2 px-4 border-b text-center">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
                        src={applicant.userId.image}
                      />
                      <span>{applicant.userId.name}</span>
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {applicant.jobId.title}
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {applicant.jobId.location}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a
                        href={applicant.userId.resume}
                        target="_blank"
                        className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"
                      >
                        Resume <img src={assets.resume_download_icon} alt="" />
                      </a>
                    </td>

                    {/* Status column */}
                    <td className="py-2 px-4 border-b text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                          ${
                            applicant.status === "Accepted"
                              ? "bg-blue-100 text-blue-600"
                              : applicant.status === "Rejected"
                              ? "bg-red-100 text-red-600"
                              : applicant.status === "Interviewing"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {applicant.status}
                      </span>
                    </td>

                    {/* Action column */}
                    <td className="py-2 px-4 border-b relative">
                      <div className="relative inline-block text-left group">
                        <button className="text-gray-500 action-button">...</button>
                        <div className="z-10 hidden absolute right-0 left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                          <button
                            onClick={() =>
                              changeJobApplicationStatus(applicant._id, "Accepted")
                            }
                            className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              changeJobApplicationStatus(applicant._id, "Rejected")
                            }
                            className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleInterviewingClick(applicant)}
                            className="block w-full text-left px-4 py-2 text-purple-500 hover:bg-gray-100"
                          >
                            Interviewing
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Redirect Notice
              </h2>
              <p className="text-gray-600 mb-6">
                You will be directed to another website. Do you want to continue?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinue}
                  className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600"
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
    <Loading />
  );
}

export default ViewApplications;


