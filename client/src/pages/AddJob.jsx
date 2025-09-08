import React, { useContext, useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
import axios from "axios";
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

function AddJob() {

    const [title , setTitle] = useState("");
    const [location , setLocation] = useState("Bangalore");
    const [category , setCategory] = useState("Programming");
    const [level, setLevel] = useState("Beginner Level");
    const [salary , setSalary ] = useState(0);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    const {backendUrl, companyToken} = useContext(AppContext);

    const onSubmitHandler = async(e)=>{
        e.preventDefault()
        try{
            const description = quillRef.current.root.innerHTML;

            const {data} = await axios.post(backendUrl+'/api/company/post-job',
                {title, description, location, salary, category, level},
                {headers : {token : companyToken }}
            )
            if(data.success){
                toast.success("Job Added Successfully");
                setTitle("");
                setSalary(0);
                quillRef.current.root.innerHTML = ""
            }else{
                toast.error(data.message);
            }
        }catch(error){
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current,{
                theme:'snow'
            });
        }
    },[])



    return ( 
       <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>   
            <div className='w-full'>
                <p className='mb-2'>Job Title</p>
                <input required className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded' value={title} type='text' placeholder='Type here' onChange={e => setTitle(e.target.value)}/>
            </div>

            <div className='w-full max-w-lg'>
                <p className='my-2'>Job description</p>
                <div ref={editorRef}>

                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>
                        Job Category
                    </p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setCategory(e.target.value)}>
                        {JobCategories.map((category, index)=>(
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2'>
                        Job Location
                    </p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setLocation(e.target.value)}>
                        {JobLocations.map((location, index)=>(
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2'>
                        Job Level
                    </p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setLevel(e.target.value)}>
                       <option value="Beginner level">Beginner level</option>
                       <option value="Intermediate level">Intermediate level</option>
                       <option value="Senior level">Senior level</option>
                    </select>
                </div>
            </div>
            <div>
                <p className='mb-2'>Job Salary</p>
                <input min={0} className='w-full px-3 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e=> setSalary(e.target.value)} type="Number" placeholder='2500'/>
            </div>
            <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
       </form>
     );
}

export default AddJob;




// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Quill from 'quill';
// import { JobCategories, JobLocations } from '../assets/assets';
// import axios from "axios";
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// function AddJob() {
//     const [title, setTitle] = useState("");
//     const [location, setLocation] = useState("Bangalore");
//     const [category, setCategory] = useState("Programming");
//     const [level, setLevel] = useState("Beginner Level");
//     const [salary, setSalary] = useState(0);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const editorRef = useRef(null);
//     const quillRef = useRef(null);

//     const { backendUrl, companyToken } = useContext(AppContext);

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
        
//         try {
//             const description = quillRef.current.root.innerHTML;

//             const { data } = await axios.post(backendUrl + '/api/company/post-job',
//                 { title, description, location, salary, category, level },
//                 { headers: { token: companyToken } }
//             )
//             if (data.success) {
//                 toast.success("Job Posted Successfully!");
//                 setTitle("");
//                 setSalary(0);
//                 quillRef.current.root.innerHTML = ""
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         } finally {
//             setIsSubmitting(false);
//         }
//     }

//     useEffect(() => {
//         if (!quillRef.current && editorRef.current) {
//             quillRef.current = new Quill(editorRef.current, {
//                 theme: 'snow',
//                 modules: {
//                     toolbar: [
//                         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//                         ['bold', 'italic', 'underline', 'strike'],
//                         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                         [{ 'indent': '-1' }, { 'indent': '+1' }],
//                         ['link', 'image'],
//                         ['clean']
//                     ]
//                 },
//                 placeholder: 'Write a detailed job description...',
//             });
            
//             // Customize Quill editor for dark theme
//             const toolbar = quillRef.current.getModule('toolbar');
//             toolbar.addHandler('image', () => {
//                 // Handle image upload
//             });
            
//             // Apply dark theme to Quill editor
//             const editorElement = editorRef.current;
//             editorElement.querySelector('.ql-toolbar').classList.add('ql-dark-toolbar');
//             editorElement.querySelector('.ql-container').classList.add('ql-dark-container');
//         }
//     }, [])

//     return (
//         <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-10">
//                     <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Post a New Job</h1>
//                     <p className="text-lg text-gray-400">Fill in the details below to create a new job posting</p>
//                 </div>

//                 <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
//                     <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
//                         <h2 className="text-xl font-semibold text-white">Job Information</h2>
//                     </div>

//                     <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
//                         {/* Job Title */}
//                         <div>
//                             <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
//                                 Job Title <span className="text-red-400">*</span>
//                             </label>
//                             <input
//                                 required
//                                 id="title"
//                                 className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                                 value={title}
//                                 type="text"
//                                 placeholder="e.g. Senior Frontend Developer"
//                                 onChange={e => setTitle(e.target.value)}
//                             />
//                         </div>

//                         {/* Job Description */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300 mb-1">
//                                 Job Description <span className="text-red-400">*</span>
//                             </label>
//                             <div className="rounded-lg border border-gray-600 overflow-hidden">
//                                 <div ref={editorRef} className="h-60 bg-gray-700"></div>
//                             </div>
//                             <p className="mt-1 text-sm text-gray-400">Describe the role, responsibilities, and requirements</p>
//                         </div>

//                         {/* Job Details Grid */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {/* Category */}
//                             <div>
//                                 <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
//                                     Category
//                                 </label>
//                                 <div className="relative">
//                                     <select
//                                         id="category"
//                                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
//                                         onChange={e => setCategory(e.target.value)}
//                                     >
//                                         {JobCategories.map((category, index) => (
//                                             <option key={index} value={category}>{category}</option>
//                                         ))}
//                                     </select>
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                                         <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Location */}
//                             <div>
//                                 <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
//                                     Location
//                                 </label>
//                                 <div className="relative">
//                                     <select
//                                         id="location"
//                                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
//                                         onChange={e => setLocation(e.target.value)}
//                                     >
//                                         {JobLocations.map((location, index) => (
//                                             <option key={index} value={location}>{location}</option>
//                                         ))}
//                                     </select>
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                                         <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Level */}
//                             <div>
//                                 <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-1">
//                                     Experience Level
//                                 </label>
//                                 <div className="relative">
//                                     <select
//                                         id="level"
//                                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition"
//                                         onChange={e => setLevel(e.target.value)}
//                                     >
//                                         <option value="Beginner Level">Beginner Level</option>
//                                         <option value="Intermediate Level">Intermediate Level</option>
//                                         <option value="Senior Level">Senior Level</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                                         <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Salary */}
//                         <div className="w-full md:w-1/2">
//                             <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-1">
//                                 Salary (per month)
//                             </label>
//                             <div className="relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <span className="text-gray-400 sm:text-sm">$</span>
//                                 </div>
//                                 <input
//                                     id="salary"
//                                     min={0}
//                                     className="block w-full pl-7 pr-12 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                                     onChange={e => setSalary(e.target.value)}
//                                     type="number"
//                                     placeholder="0.00"
//                                 />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                                     <span className="text-gray-400 sm:text-sm">USD</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="pt-6 border-t border-gray-700 flex justify-end">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
//                             >
//                                 {isSubmitting ? (
//                                     <>
//                                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                         </svg>
//                                         Posting...
//                                     </>
//                                 ) : 'Post Job'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="mt-8 text-center text-sm text-gray-400">
//                     <p>Your job posting will be reviewed and visible to candidates within 24 hours.</p>
//                 </div>
//             </div>
            
//             <style jsx global>{`
//                 /* Custom styles for Quill editor in dark mode */
//                 .ql-dark-toolbar {
//                     background-color: #374151;
//                     border-color: #4B5563 !important;
//                 }
                
//                 .ql-dark-toolbar .ql-stroke {
//                     stroke: #E5E7EB !important;
//                 }
                
//                 .ql-dark-toolbar .ql-fill {
//                     fill: #E5E7EB !important;
//                 }
                
//                 .ql-dark-toolbar .ql-picker {
//                     color: #E5E7EB !important;
//                 }
                
//                 .ql-dark-container {
//                     background-color: #374151;
//                     border-color: #4B5563 !important;
//                     color: #E5E7EB;
//                 }
                
//                 .ql-editor {
//                     color: #E5E7EB;
//                 }
                
//                 .ql-snow .ql-tooltip {
//                     background-color: #1F2937;
//                     border: 1px solid #4B5563;
//                     color: #E5E7EB;
//                     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//                 }
                
//                 .ql-snow .ql-tooltip input[type=text] {
//                     background-color: #374151;
//                     border: 1px solid #4B5563;
//                     color: #E5E7EB;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default AddJob;