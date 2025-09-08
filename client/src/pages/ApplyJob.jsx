import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";

function ApplyJob() {
  const { id } = useParams();

  const {getToken} = useAuth()

  const navigate = useNavigate();

  const [JobData, setJobData] = useState(null);

  const [isAlreadyApplied , setIsAlreadyApplied] = useState(false);

  const { jobs, backendUrl , userData, userApplications ,fetchUserApplications } = useContext(AppContext);

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(backendUrl + `/api/jobs/${id}`);
      if (data.success) {
        setJobData(data.job);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const applyHandler = async () => {
    try{
      if(!userData){
        return toast.error("Login to apply for jobs")
      }
      if(!userData.resume){
        navigate('/applications')
        return toast.error("Upload resume to apply");
      }

      const token = await getToken()

      const {data} = await axios.post(backendUrl+'/api/users/apply',
        {jobId : JobData._id},
        {headers : {Authorization :  `Bearer ${token}`}}
      )

      if(data.success){
        toast.success(data.message)
        fetchUserApplications()
      }else{
        toast.error(data.message)
      }

    }catch(error){
      toast.error(error.message)
    }
  }

  const checkAlreadyApplied =  () =>{
    const hasApplied = userApplications.some(item => item.jobId._id === JobData._id)
    setIsAlreadyApplied(hasApplied)

  }

  useEffect(() => {
    fetchJob();
  }, [id]);

  useEffect(()=>{
    if(userApplications.length > 0 && JobData){
      checkAlreadyApplied()
    }
  },[JobData, userApplications,id])

  return JobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl ">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border "
                src={JobData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {JobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {JobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC : {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button onClick={applyHandler} className="bg-blue-600 p-2.5 px-10 text-white rounded">
                {isAlreadyApplied ? 'Already Applied' : "Apply Now"}
              </button>
              <p className="mt-1 text-gray-600 ">
                Posted {moment(JobData.date).fromNow()}{" "}
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
                <h2 className="font-bold text-2xl mb-4">Job Description</h2>
                <div dangerouslySetInnerHTML={{__html:JobData.description}}></div>
                <button className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10">Apply Now</button>
            </div>
        </div> */}

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job Description</h2>

              <div
                className="job-description text-gray-600"
                dangerouslySetInnerHTML={{ __html: JobData.description }}
              ></div>

              <button onClick={applyHandler} className="bg-blue-600 hover:bg-blue-700 p-2.5 px-10 text-white rounded mt-10 transition">
                {isAlreadyApplied ? 'Already Applied' : "Apply Now"}
              </button>
            </div>

            {/* right section more jobs */}
            <div className="w-full lg:w-1/3 mt-8 lg:ml-8 space-y-5">
              <h2>More jobs from {JobData.companyId.name}</h2>
              {jobs
                .filter(
                  (job) =>
                    job._id != JobData._id &&
                    job.companyId._id === JobData.companyId._id
                )
                .filter((job) => {
                  // set of applied jobs
                  const appliedJobsIds = new Set(userApplications.map(app=>app.jobId && app.jobId._id))
                  // return true if the user has not applied for this job 
                  return !appliedJobsIds.has(job._id)
                })
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default ApplyJob;




// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";
// import Loading from "../components/Loading";
// import Navbar from "../components/Navbar";
// import kconvert from "k-convert";
// import moment from "moment";
// import JobCard from "../components/JobCard";
// import Footer from "../components/Footer";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useAuth } from "@clerk/clerk-react";

// function ApplyJob() {
//   const { id } = useParams();
//   const { getToken } = useAuth();
//   const navigate = useNavigate();
//   const [JobData, setJobData] = useState(null);
//   const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);
//   const { jobs, backendUrl, userData, userApplications, fetchUserApplications } = useContext(AppContext);

//   const fetchJob = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + `/api/jobs/${id}`);
//       if (data.success) {
//         setJobData(data.job);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const applyHandler = async () => {
//     try {
//       if (!userData) {
//         return toast.error("Login to apply for jobs");
//       }
//       if (!userData.resume) {
//         navigate('/applications');
//         return toast.error("Upload resume to apply");
//       }

//       const token = await getToken();

//       const { data } = await axios.post(backendUrl + '/api/users/apply',
//         { jobId: JobData._id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         fetchUserApplications();
//       } else {
//         toast.error(data.message);
//       }

//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const checkAlreadyApplied = () => {
//     const hasApplied = userApplications.some(item => item.jobId && item.jobId._id === JobData._id);
//     setIsAlreadyApplied(hasApplied);
//   };

//   useEffect(() => {
//     fetchJob();
//   }, [id]);

//   useEffect(() => {
//     if (userApplications.length > 0 && JobData) {
//       checkAlreadyApplied();
//     }
//   }, [JobData, userApplications, id]);

//   return JobData ? (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Job Details</h1>
//             <p className="text-lg text-gray-400">Apply for this position and explore similar opportunities</p>
//           </div>

//           {/* Job Header Card */}
//           <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700 mb-8">
//             <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
//               <h2 className="text-xl font-semibold text-white">Position Overview</h2>
//             </div>
//             <div className="p-6">
//               <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="flex flex-col md:flex-row items-center gap-6">
//                   <img
//                     className="h-24 w-24 bg-gray-700 rounded-xl p-4 border border-gray-600 object-contain"
//                     src={JobData.companyId.image}
//                     alt={JobData.companyId.name}
//                   />
//                   <div className="text-center md:text-left">
//                     <h1 className="text-2xl sm:text-3xl font-medium text-white">
//                       {JobData.title}
//                     </h1>
//                     <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
//                       <span className="flex items-center gap-2 text-gray-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                         </svg>
//                         {JobData.companyId.name}
//                       </span>
//                       <span className="flex items-center gap-2 text-gray-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         {JobData.location}
//                       </span>
//                       <span className="flex items-center gap-2 text-gray-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                         {JobData.level}
//                       </span>
//                       <span className="flex items-center gap-2 text-gray-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         CTC: {kconvert.convertTo(JobData.salary)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center md:items-end gap-4">
//                   <button
//                     onClick={applyHandler}
//                     disabled={isAlreadyApplied}
//                     className={`px-8 py-3 rounded-lg font-medium text-white transition ${isAlreadyApplied
//                       ? 'bg-gray-600 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
//                       }`}
//                   >
//                     {isAlreadyApplied ? 'Already Applied' : "Apply Now"}
//                   </button>
//                   <p className="text-gray-400 text-sm">
//                     Posted {moment(JobData.date).fromNow()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Job Content */}
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Job Description */}
//             <div className="w-full lg:w-2/3">
//               <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
//                 <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
//                   <h2 className="text-xl font-semibold text-white">Job Description</h2>
//                 </div>
//                 <div className="p-6">
//                   <div
//                     className="job-description text-white prose prose-invert prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 max-w-none"
//                     style={{ color: 'white !important' }}
//                     dangerouslySetInnerHTML={{ 
//                       __html: JobData.description.replace(
//                         /<(\w+)([^>]*)>/g, 
//                         (match, tag, attributes) => {
//                           // Skip style and script tags
//                           if (tag === 'style' || tag === 'script') return match;
                          
//                           // Add style to override text color for all elements
//                           if (attributes.includes('style=')) {
//                             return match.replace(
//                               'style="', 
//                               'style="color: white !important; '
//                             ).replace(
//                               "style='", 
//                               "style='color: white !important; "
//                             );
//                           } else {
//                             return `<${tag} style="color: white !important;"${attributes}>`;
//                           }
//                         }
//                       ) 
//                     }}
//                   ></div>

//                   <button
//                     onClick={applyHandler}
//                     disabled={isAlreadyApplied}
//                     className={`mt-8 px-8 py-3 rounded-lg font-medium text-white transition ${isAlreadyApplied
//                       ? 'bg-gray-600 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
//                       }`}
//                   >
//                     {isAlreadyApplied ? 'Already Applied' : "Apply Now"}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* More Jobs Sidebar */}
//             <div className="w-full lg:w-1/3">
//               <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
//                 <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
//                   <h2 className="text-xl font-semibold text-white">More Jobs from {JobData.companyId.name}</h2>
//                 </div>
//                 <div className="p-6">
//                   {jobs
//                     .filter(
//                       (job) =>
//                         job._id !== JobData._id &&
//                         job.companyId._id === JobData.companyId._id
//                     )
//                     .filter((job) => {
//                       const appliedJobsIds = new Set(userApplications.map(app => app.jobId && app.jobId._id));
//                       return !appliedJobsIds.has(job._id);
//                     })
//                     .slice(0, 4)
//                     .map((job, index) => (
//                       <div key={index} className="mb-4 last:mb-0">
//                         <JobCard job={job} />
//                       </div>
//                     ))}
                  
//                   {jobs.filter(
//                     (job) =>
//                       job._id !== JobData._id &&
//                       job.companyId._id === JobData.companyId._id
//                     ).length === 0 && (
//                     <p className="text-gray-400 text-center py-4">No other jobs from this company</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   ) : (
//     <Loading />
//   );
// }

// export default ApplyJob;