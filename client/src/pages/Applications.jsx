// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { assets, jobsApplied } from "../assets/assets";
// import moment from "moment";
// import Footer from "../components/Footer";
// import { AppContext } from "../context/AppContext";
// import { useAuth, useUser } from "@clerk/clerk-react";
// import { toast } from "react-toastify";
// import axios from "axios"

// function Applications() {

//   const user = useUser();
//   const {getToken} = useAuth()

//   const [isEdit, setIsEdit] = useState(false);

//   const [resume, setResume] = useState(null);

//   const {backendUrl , userData , userApplications , fetchUserData , fetchUserApplications} = useContext(AppContext);

//   const updateResume = async () =>{
//     try{
//       const formData = new FormData()
//       formData.append('resume',resume);

//       const token = await getToken()

//       const {data} = await axios.post(backendUrl+'/api/users/update-resume',
//         formData,
//         {headers : {Authorization : `Bearer ${token}`}}
//       )
//       if(data.success){
//         await fetchUserData();
//         toast.success(data.message);
//       }else{
//         toast.error(data.message)
//       }

//     }catch(error){
//       toast.error(error.message)
//     }
//     setIsEdit(false);
//     setResume(null);
//   }

//   useEffect(()=>{
//     if(user){
//       fetchUserApplications()
//     }
//   },[user])

//   return (
//     <>
//       <Navbar />
//       <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
//         <h2 className="text-xl font-semibold">Your Resume</h2>
//         <div className="flex gap-2 mb-6 mt-3">
//           {isEdit || userData && userData.resume === ""? (
//             <>
//               <label className="flex items-center" htmlFor="resumeUpload">
//                 <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
//                   {resume ? resume.name : "Select Resume"}
//                 </p>
//                 <input
//                   id="resumeUpload"
//                   onChange={(e) => setResume(e.target.files[0])}
//                   type="file"
//                   hidden
//                   accept="application/pdf"
//                 />
//                 <img src={assets.profile_upload_icon}></img>
//               </label>
//               <button
//                 className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
//                 onClick={updateResume}
//               >
//                 Save
//               </button>
//             </>
//           ) : (
//             <div className="flex gap-2">
//               <a
//                 href={userData.resume} target="_blank"
//                 className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
//               >
//                 Resume
//               </a>
//               <button
//                 onClick={() => setIsEdit(true)}
//                 className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
//           <table className="min-w-full bg-white border rounded-lg">
//             <thead>
//               <tr>
//                 <th className="py-3 px-4 border-b text-left">Company</th>
//                 <th className="py-3 px-4 border-b text-left">Job Title</th>
//                 <th className="py-3 px-4 border-b text-left max-sm:hidden">
//                   Location
//                 </th>
//                 <th className="py-3 px-4 border-b text-left max-sm:hidden">
//                   Date
//                 </th>
//                 <th className="py-3 px-4 border-b text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userApplications.map((job, index) =>
//                 true ? (
//                   <tr key={index}>
//                     <td className="py-3 px-4 flex items-center gap-2 border-b">
//                       <img className="w-8 h-8" src={job.companyId.image} alt="" />
//                       {job.companyId.name}
//                     </td>
//                     <td className="py-2 px-4 border-b">{job.jobId.title}</td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {job.jobId.location}
//                     </td>
//                     <td className="py-2 px-4 border-b max-sm:hidden">
//                       {moment(job.date).format("ll")}
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       <span
//                         className={`${
//                           job.status === "Accepted"
//                             ? "bg-green-100"
//                             : job.status === "Rejected"
//                             ? "bg-red-100"
//                             : "bg-blue-100"
//                         } px-4 py-1.5 rounded `}
//                       >
//                         {job.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ) : null
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default Applications;





import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../components/Loading"; // Assuming you have a Loading component

function Applications() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const { backendUrl, userData, userApplications, fetchUserData, fetchUserApplications } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateResume = async () => {
    if (!resume) {
      toast.info("Please select a resume file to save.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("resume", resume);

      const token = await getToken();

      const { data } = await axios.post(
        backendUrl + "/api/users/update-resume",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        await fetchUserData();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsEdit(false);
      setResume(null);
    }
  };

  const loadApplications = async () => {
    setLoading(true);
    await fetchUserApplications();
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      loadApplications();
    }
  }, [user]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Loading />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h1 className="text-3xl font-bold text-white">My Applications</h1>
            <p className="text-blue-100 mt-2">
              Track your job submissions and manage your resume
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Resume Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Resume
              </h2>
              <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                {isEdit || !userData?.resume ? (
                  <>
                    <label
                      htmlFor="resumeUpload"
                      className="flex items-center gap-2 cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <img src={assets.profile_upload_icon} alt="Upload" className="w-5 h-5" />
                      <span>{resume ? resume.name : "Select Resume (PDF)"}</span>
                    </label>
                    <input
                      id="resumeUpload"
                      onChange={(e) => setResume(e.target.files[0])}
                      type="file"
                      hidden
                      accept="application/pdf"
                    />
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                      onClick={updateResume}
                    >
                      Save
                    </button>
                    {isEdit && (
                       <button
                       onClick={() => setIsEdit(false)}
                       className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                     >
                       Cancel
                     </button>
                    )}
                  </>
                ) : (
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={userData.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg inline-flex gap-2 items-center hover:bg-blue-200 transition-colors font-medium"
                    >
                      View Resume
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <button
                      onClick={() => setIsEdit(true)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Jobs Applied Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Jobs Applied</h2>
              {userApplications.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full bg-white">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Company</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Job Title</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">Location</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-medium max-sm:hidden border-b">Date</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userApplications.map((job, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 flex items-center gap-3 text-gray-800 align-middle">
                            <img className="w-10 h-10 rounded-full object-cover" src={job.companyId.image} alt={`${job.companyId.name} logo`}/>
                            {job.companyId.name}
                          </td>
                          <td className="py-3 px-4 text-gray-600 align-middle">{job.jobId.title}</td>
                          <td className="py-3 px-4 text-gray-600 align-middle max-sm:hidden">{job.jobId.location}</td>
                          <td className="py-3 px-4 text-gray-600 align-middle max-sm:hidden">{moment(job.date).format("ll")}</td>
                          <td className="py-3 px-4 align-middle">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium
                                ${
                                  job.status === "Accepted"
                                    ? "bg-green-100 text-green-700"
                                    : job.status === "Rejected"
                                    ? "bg-red-100 text-red-700"
                                    : job.status === "Interviewing"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-blue-100 text-blue-700" // Default for "Pending" etc.
                                }`}
                            >
                              {job.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <p className="text-xl sm:text-2xl text-gray-700 mb-2">No Applications Found</p>
                  <p className="text-gray-500">You haven't applied for any jobs yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Applications;

