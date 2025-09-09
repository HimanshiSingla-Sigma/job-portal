// import React, { useContext, useRef } from 'react'
// import { assets } from "../assets/assets";
// import { AppContext } from '../context/AppContext';

// function Hero() {

//     const {setSearchFilter, setIsSearched } = useContext(AppContext)

//     const titleRef  = useRef(null);
//     const locationRef = useRef(null);

//     const onSearch =()=>{
//         setSearchFilter({
//             title : titleRef.current.value,
//             location : locationRef.current.value
//         })
//         setIsSearched(true)
//     }


//     return ( 
//         <div className='container 2xl:px-20 mx-auto my-10'>
//             <div className='bg-gradient-to-r  from bg-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
//                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+jobs to apply</h2>
//                 <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5 '>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
//                 <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
//                     <div className='flex items-center '>
//                         <img className='h-4 sm:h-5'  src={assets.search_icon} alt=""/>
//                         <input type='text' placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' ref={titleRef}/>
//                     </div>
//                     <div className='flex items-center'>
//                         <img  src={assets.location_icon} alt="" className='h-4 sm:h-5'/>
//                         <input type='text' placeholder='Location' className='max-sm:text-xs p-2 rounded outline-none w-full' ref={locationRef}/>
//                     </div>
//                     <button className='bg-blue-600 px-6 py-2 rounded text-white m-1' onClick={onSearch}>Search</button>
//                 </div>
//             </div>
//             <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
//                 <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
//                     <p className='font-medium'>Trusted by</p>
//                     <img className="h-6"  src={assets.microsoft_logo } alt=""/>
//                     <img className="h-6"  src={assets.walmart_logo } alt=""/>
//                     <img className="h-6"  src={assets.accenture_logo } alt=""/>
//                     <img className="h-6"  src={assets.samsung_logo } alt=""/>
//                     <img className="h-6"  src={assets.amazon_logo } alt=""/>
//                     <img className="h-6"  src={assets.adobe_logo } alt=""/>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Hero;




import React, { useContext, useRef } from 'react';
import { assets } from "../assets/assets";
import { AppContext } from '../context/AppContext';

function Hero() {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);

    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
        setIsSearched(true);
    };

    return (
        <div className='container mx-auto mt-10 px-4 md:px-8 xl:px-20'>
            {/* Hero Section */}
            <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 text-center rounded-3xl'>
                <h2 className='text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl'>
                    Find Your Dream Job
                </h2>
                <p className='mb-8 mt-4 max-w-xl mx-auto text-lg font-light opacity-80 px-5'>
                    Over 10,000+ jobs available. Your next career move is just a search away.
                </p>
                
                {/* Search Bar */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-full p-2 mx-4 sm:mx-auto max-w-2xl shadow-xl'>
                    <div className='flex flex-1 items-center px-4'>
                        <img className='h-5 w-5 text-gray-500' src={assets.search_icon} alt="Search Icon" />
                        <input
                            type='text'
                            placeholder='Search for jobs (e.g., Software Engineer)'
                            className='w-full p-2 rounded-full outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                            ref={titleRef}
                        />
                    </div>
                    <div className='hidden sm:block h-8 w-px bg-gray-300'></div>
                    <div className='flex flex-1 items-center px-4'>
                        <img src={assets.location_icon} alt="Location Icon" className='h-5 w-5 text-gray-500' />
                        <input
                            type='text'
                            placeholder='Location (e.g., New York, NY)'
                            className='w-full p-2 rounded-full outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                            ref={locationRef}
                        />
                    </div>
                    <button
                        className='bg-blue-600 px-8 py-3 rounded-full text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-300'
                        onClick={onSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className='mt-10 border border-gray-200 shadow-sm rounded-lg py-5 px-6'>
                <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16'>
                    <p className='font-medium text-gray-700 text-sm md:text-base'>Trusted by industry leaders</p>
                    <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12'>
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.microsoft_logo} alt="Microsoft Logo" />
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.walmart_logo} alt="Walmart Logo" />
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.accenture_logo} alt="Accenture Logo" />
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.samsung_logo} alt="Samsung Logo" />
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.amazon_logo} alt="Amazon Logo" />
                        <img className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src={assets.adobe_logo} alt="Adobe Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;