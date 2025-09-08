// import React from 'react'
// import { assets } from '../assets/assets';
// import {useNavigate} from "react-router-dom"

// function JobCard({job, key}) {

//     const navigate = useNavigate();

//     return ( 
//         <div className='border p-6 shadow rounded'>
//             <div className='flex justify-between items-center '>
//                 <img className='h-8' src={job.companyId.image} alt=""/>
//             </div>
//             <h4 className='font-medium mt-2 text-xl'>{job.title}</h4>
//             <div className='flex items-center gap-3 mt-2 text-xs'>
//                 <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
//                 <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
//             </div>
//             <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
//             <div className='mt-4 flex gap-4 text-sm'>
//                 <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
//                 <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn more</button>
//             </div> 
//         </div>
//      );
// }

// export default JobCard;



import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function JobCard({ job }) {
    const navigate = useNavigate();

    const handleJobClick = () => {
        navigate(`/apply-job/${job._id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='flex flex-col border border-gray-200 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
            {/* Company Logo and Details */}
            <div className='flex items-center justify-between'>
                <img className='h-10 w-auto rounded-md object-contain' src={job.companyId.image} alt={`${job.companyId.name} logo`} />
            </div>

            {/* Job Title */}
            <h4 className='mt-4 text-xl font-bold text-gray-800'>{job.title}</h4>

            {/* Tags for Location and Level */}
            <div className='mt-2 flex items-center gap-2 text-sm'>
                <span className='rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700'>{job.location}</span>
                <span className='rounded-full bg-red-50 px-3 py-1 font-medium text-red-700'>{job.level}</span>
            </div>

            {/* Job Description */}
            <p className='mt-4 flex-1 text-base text-gray-600' dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + (job.description.length > 150 ? '...' : '') }}></p>

            {/* Action Buttons */}
            <div className='mt-6 flex gap-3'>
                <button
                    onClick={handleJobClick}
                    className='rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700'
                >
                    Apply now
                </button>
                <button
                    onClick={handleJobClick}
                    className='rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:bg-gray-100'
                >
                    Learn more
                </button>
            </div>
        </div>
    );
}

export default JobCard;