// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Quill from 'quill';
// import { JobCategories, JobLocations } from '../assets/assets';
// import axios from "axios";
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// function AddJob() {

//     const [title , setTitle] = useState("");
//     const [location , setLocation] = useState("Bangalore");
//     const [category , setCategory] = useState("Programming");
//     const [level, setLevel] = useState("Beginner Level");
//     const [salary , setSalary ] = useState(0);

//     const editorRef = useRef(null);
//     const quillRef = useRef(null);

//     const {backendUrl, companyToken} = useContext(AppContext);

//     const onSubmitHandler = async(e)=>{
//         e.preventDefault()
//         try{
//             const description = quillRef.current.root.innerHTML;

//             const {data} = await axios.post(backendUrl+'/api/company/post-job',
//                 {title, description, location, salary, category, level},
//                 {headers : {token : companyToken }}
//             )
//             if(data.success){
//                 toast.success("Job Added Successfully");
//                 setTitle("");
//                 setSalary(0);
//                 quillRef.current.root.innerHTML = ""
//             }else{
//                 toast.error(data.message);
//             }
//         }catch(error){
//             toast.error(error.message);
//         }
//     }

//     useEffect(()=>{
//         if(!quillRef.current && editorRef.current){
//             quillRef.current = new Quill(editorRef.current,{
//                 theme:'snow'
//             });
//         }
//     },[])



//     return ( 
//        <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>   
//             <div className='w-full'>
//                 <p className='mb-2'>Job Title</p>
//                 <input required className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded' value={title} type='text' placeholder='Type here' onChange={e => setTitle(e.target.value)}/>
//             </div>

//             <div className='w-full max-w-lg'>
//                 <p className='my-2'>Job description</p>
//                 <div ref={editorRef}>

//                 </div>
//             </div>

//             <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//                 <div>
//                     <p className='mb-2'>
//                         Job Category
//                     </p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setCategory(e.target.value)}>
//                         {JobCategories.map((category, index)=>(
//                             <option key={index} value={category}>{category}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>
//                         Job Location
//                     </p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setLocation(e.target.value)}>
//                         {JobLocations.map((location, index)=>(
//                             <option key={index} value={location}>{location}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>
//                         Job Level
//                     </p>
//                     <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=> setLevel(e.target.value)}>
//                        <option value="Beginner level">Beginner level</option>
//                        <option value="Intermediate level">Intermediate level</option>
//                        <option value="Senior level">Senior level</option>
//                     </select>
//                 </div>
//             </div>
//             <div>
//                 <p className='mb-2'>Job Salary</p>
//                 <input min={0} className='w-full px-3 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e=> setSalary(e.target.value)} type="Number" placeholder='2500'/>
//             </div>
//             <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
//        </form>
//      );
// }

// export default AddJob;





// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Quill from 'quill';
// import { JobCategories, JobLocations } from '../assets/assets';
// import axios from "axios";
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';
// import 'quill/dist/quill.snow.css';

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
//         e.preventDefault()
//         setIsSubmitting(true);
//         try {
//             const description = quillRef.current.root.innerHTML;

//             const { data } = await axios.post(backendUrl + '/api/company/post-job',
//                 { title, description, location, salary, category, level },
//                 { headers: { token: companyToken } }
//             )
//             if (data.success) {
//                 toast.success("Job Added Successfully");
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
//                         ['link', 'blockquote', 'code-block'],
//                         ['clean']
//                     ]
//                 },
//                 placeholder: 'Write job description here...',
//             });
//         }
//     }, [])

//     return (
//         <div className="min-h-screen bg-gray-50 py-8 px-4">
//             <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
//                     <h1 className="text-3xl font-bold text-white">Post a New Job</h1>
//                     <p className="text-blue-100 mt-2">Fill in the details below to create a new job posting</p>
//                 </div>

//                 <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
//                     <div className="w-full">
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Job Title</label>
//                         <input
//                             required
//                             className="w-full max-w-lg px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 transition-colors"
//                             value={title}
//                             type="text"
//                             placeholder="e.g. Senior Frontend Developer"
//                             onChange={e => setTitle(e.target.value)}
//                         />
//                     </div>

//                     <div className="w-full max-w-lg">
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Job Description</label>
//                         <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
//                             <div ref={editorRef} className="h-64" />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div>
//                             <label className="block text-gray-700 text-sm font-medium mb-2">Job Category</label>
//                             <select
//                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
//                                 onChange={e => setCategory(e.target.value)}
//                             >
//                                 {JobCategories.map((category, index) => (
//                                     <option key={index} value={category}>{category}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-gray-700 text-sm font-medium mb-2">Job Location</label>
//                             <select
//                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
//                                 onChange={e => setLocation(e.target.value)}
//                             >
//                                 {JobLocations.map((location, index) => (
//                                     <option key={index} value={location}>{location}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-gray-700 text-sm font-medium mb-2">Job Level</label>
//                             <select
//                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
//                                 onChange={e => setLevel(e.target.value)}
//                             >
//                                 <option value="Beginner level">Beginner level</option>
//                                 <option value="Intermediate level">Intermediate level</option>
//                                 <option value="Senior level">Senior level</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="w-full max-w-xs">
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Job Salary ($/year)</label>
//                         <div className="relative">
//                             <span className="absolute left-3 top-3 text-gray-500">$</span>
//                             <input
//                                 min={0}
//                                 className="w-full pl-8 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//                                 onChange={e => setSalary(e.target.value)}
//                                 type="number"
//                                 placeholder="50000"
//                             />
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
//                     >
//                         {isSubmitting ? (
//                             <span className="flex items-center">
//                                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                                 Processing...
//                             </span>
//                         ) : "ADD JOB"}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddJob;




import React, { useContext, useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
import axios from "axios";
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import 'quill/dist/quill.snow.css';

function AddJob() {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("Bangalore");
    const [category, setCategory] = useState("IT & Software");
    const [level, setLevel] = useState("Fresher");
    const [salary, setSalary] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    const { backendUrl, companyToken } = useContext(AppContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsSubmitting(true);
        try {
            const description = quillRef.current.root.innerHTML;

            const { data } = await axios.post(backendUrl + '/api/company/post-job',
                { title, description, location, salary, category, level },
                { headers: { token: companyToken } }
            )
            if (data.success) {
                toast.success("Job Posted Successfully");
                setTitle("");
                setSalary(0);
                quillRef.current.root.innerHTML = ""
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'blockquote', 'code-block'],
                        ['clean']
                    ]
                },
                placeholder: 'Write job description here...',
            });
        }
    }, [])

    // Format salary in Indian numbering system (Lakhs)
    const formatSalaryHint = (amount) => {
        if (!amount) return '0';
        if (amount >= 100000) {
            return `${(amount / 100000).toFixed(1)} LPA`;
        }
        return `${amount.toLocaleString('en-IN')} PA`;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                    <h1 className="text-3xl font-bold text-white">Post a New Job Opening</h1>
                    <p className="text-blue-100 mt-2">Fill in the details below to create a new job posting</p>
                </div>

                <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Job Title *</label>
                        <input
                            required
                            className="w-full max-w-lg px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 transition-colors"
                            value={title}
                            type="text"
                            placeholder="e.g. Senior Frontend Developer, Full Stack Engineer, etc."
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="w-full max-w-lg">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Job Description *</label>
                        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                            <div ref={editorRef} className="h-64" />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Describe the role, responsibilities, and requirements</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Job Category</label>
                            <select
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                            >
                                {JobCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Job Location</label>
                            <select
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
                                onChange={e => setLocation(e.target.value)}
                                value={location}
                            >
                                {JobLocations.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Experience Level</label>
                            <select
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none cursor-pointer"
                                onChange={e => setLevel(e.target.value)}
                                value={level}
                            >
                                <option value="Fresher">Fresher (0-1 years)</option>
                                <option value="Junior">Junior (1-3 years)</option>
                                <option value="Mid-Level">Mid-Level (3-7 years)</option>
                                <option value="Senior">Senior (7+ years)</option>
                                <option value="Lead">Lead/Architect</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full max-w-xs">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Annual Salary (₹)
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-500">₹</span>
                            <input
                                min={0}
                                className="w-full pl-8 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                onChange={e => setSalary(e.target.value)}
                                type="number"
                                placeholder="600000"
                                value={salary}
                            />
                        </div>
                        {salary > 0 && (
                            <p className="text-sm text-green-600 mt-2">
                                {formatSalaryHint(salary)}
                            </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">Enter annual salary in Indian Rupees</p>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Posting Job...
                                </span>
                            ) : "POST JOB"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddJob;