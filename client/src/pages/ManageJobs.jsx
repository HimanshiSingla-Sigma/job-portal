// import React, { useContext, useEffect, useState } from "react";
// import { jobsData, manageJobsData } from "../assets/assets";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../components/Loading";

// function ManageJobs() {
//   const navigate = useNavigate();

//   const { backendUrl, companyToken } = useContext(AppContext);

//   const [jobs, setJobs] = useState(false);

//   // function to fetch company job applications data
//   const fetchCompanyJobs = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
//         headers: { token: companyToken },
//       });
//       if (data.success) {
//         setJobs(data.jobsData.reverse());
//         console.log(data.jobsData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // function to change job visiblity
//   const changeJobVisibility = async (id) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/company/change-visibility",
//         { id },
//         { headers: { token: companyToken } }
//       );
//       if (data.success) {
//         toast.success(data.message);
//         fetchCompanyJobs();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (companyToken) {
//       fetchCompanyJobs();
//     }
//   }, [companyToken]);

//   return jobs ? (
//     jobs.length === 0 ? (
//       <div className="flex items-center justify-center h-[70vh]">
//         <p className="text-xl sm:text-2xl">No Jobs Available or posted</p>
//       </div>
//     ) : (
//       <div className="container p-4 max-w-5xl">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left max-sm:hidden">
//                   #
//                 </th>
//                 <th className="py-2 px-4 border-b text-left">Job Title</th>
//                 <th className="py-2 px-4 border-b text-left max-sm:hidden">
//                   Date
//                 </th>
//                 <th className="py-2 px-4 border-b text-left max-sm:hidden">
//                   Location
//                 </th>
//                 <th className="py-2 px-4 border-b text-center">Applicants</th>
//                 <th className="py-2 px-4 border-b text-left">Visible</th>
//               </tr>
//             </thead>
//             <tbody>
//               {jobs.map((job, index) => (
//                 <tr key={index} className="text-gray-700">
//                   <td className="py-2 px-4 border-b max-sm:hidden">
//                     {index + 1}
//                   </td>
//                   <td className="py-2 px-4 border-b">{job.title}</td>
//                   <td className="py-2 px-4 border-b max-sm:hidden">
//                     {moment(job.date).format("ll")}
//                   </td>
//                   <td className="py-2 px-4 border-b max-sm:hidden">
//                     {job.location}
//                   </td>
//                   <td className="py-2 px-4 border-b text-center">
//                     {job.applicants}
//                   </td>
//                   <td className="py-2 px-4 border-b text-center">
//                     <input
//                       onChange={() => changeJobVisibility(job._id)}
//                       className="scale-125 ml-4"
//                       type="checkbox"
//                       checked={job.visible}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <button
//             className="bg-black text-white py-2 px-4 rounded"
//             onClick={() => navigate("/dashboard/add-job")}
//           >
//             Add new job
//           </button>
//         </div>
//       </div>
//     )
//   ) : (
//     <Loading />
//   );
// }

// export default ManageJobs;




import React, { useContext, useEffect, useState } from "react";
import { jobsData, manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function ManageJobs() {
  const navigate = useNavigate();

  const { backendUrl, companyToken } = useContext(AppContext);

  const [jobs, setJobs] = useState(false);

  // function to fetch company job applications data
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to change job visiblity
  const changeJobVisibility = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibility",
        { id },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return jobs ? (
    jobs.length === 0 ? (
      <div className="flex items-center justify-center h-[70vh] bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <p className="text-xl sm:text-2xl text-gray-700 mb-2">No Jobs Available</p>
          <p className="text-gray-500">You haven't posted any jobs yet</p>
        </div>
      </div>
    ) : (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h1 className="text-3xl font-bold text-white">Manage Job Postings</h1>
            <p className="text-blue-100 mt-2">View and manage all your job listings</p>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">
                      #
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      Job Title
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">
                      Location
                    </th>
                    <th className="py-3 px-4 text-center text-gray-700 font-medium border-b">
                      Applicants
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                      Visible
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 max-sm:hidden text-gray-600">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 text-gray-800 font-medium">
                        {job.title}
                      </td>
                      <td className="py-3 px-4 max-sm:hidden text-gray-600">
                        {moment(job.date).format("ll")}
                      </td>
                      <td className="py-3 px-4 max-sm:hidden text-gray-600">
                        {job.location}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full">
                          {job.applicants}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            onChange={() => changeJobVisibility(job._id)}
                            type="checkbox"
                            checked={job.visible}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-lg"
                onClick={() => navigate("/dashboard/add-job")}
              >
                Add New Job
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Loading />
    </div>
  );
}

export default ManageJobs;