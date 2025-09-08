// import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import axios from "axios"
// import {useNavigate} from "react-router-dom"
// import { toast } from "react-toastify";

// function RecruiterLogin() {
//   const navigate = useNavigate();
//   const [state, setState] = useState("Login");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const [image, setImage] = useState(false);

//   const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

//   const {setShowRecruiterLogin, backendUrl, setCompanyToken , setCompanyData} = useContext(AppContext);

//   const onSubmitHandler = async (e) =>{
//     e.preventDefault();
//     if(state === 'Sign Up' && !isTextDataSubmitted ){
//       return setIsTextDataSubmitted(true);
//     }
//     try{
//       if(state == 'Login'){
//         const {data} = await axios.post(backendUrl+'/api/company/login',{email , password})
//         if(data.success){
//           setCompanyData(data.company);
//           setCompanyToken(data.token);
//           localStorage.setItem('companyToken',data.token);
//           setShowRecruiterLogin(false);
//           navigate('/dashboard');
//         }else{
//           toast.error(data.message);
//         }
//       }else{
//         const formData = new FormData()
//         formData.append('name',name)
//         formData.append('password',password)
//         formData.append('email',email)
//         formData.append('image',image)
//         const {data} = await axios.post(backendUrl+'/api/company/register',formData);
//         if(data.success){
//           setCompanyData(data.company);
//           setCompanyToken(data.token);
//           localStorage.setItem('companyToken',data.token);
//           setShowRecruiterLogin(false);
//           navigate('/dashboard');
//         }else{
//           toast.error(data.message)
//         }
//       }
//     }catch(error){
//       toast.error(error.message);
//       console.log(error.message);
//     }
//   }

//   useEffect(()=>{
//     document.body.style.overflow = "hidden"
//     return ()=> {
//       document.body.style.overflow = "unset"
//     }
//   },[])

//   return (
//     <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
//       <form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500">
//         <h1 className="text-center text-2xl text-neutral-700 font-medium">
//           Recruiter {state}
//         </h1>
//         <p className="text-sm">Welcome back!Please sign in to continue</p>
//         {state === "Sign Up" && isTextDataSubmitted ? (
//           <>
//           <div className="flex items-center gap-4 my-10">
//             <label htmlFor="image">
//               <img className="w-16 rounded-full" src={ image ? URL.createObjectURL(image) : assets.upload_area} alt=""/>
//               <input onChange={e => setImage(e.target.files[0])} type="file" id="image" hidden/>
//             </label>
//             <p>Upload Company <br/>logo</p>
//           </div>
//           </>
//         ) : (
//           <>
//             {state !== "Login" && (
//               <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//                 <img src={assets.person_icon} alt="" />
//                 <input
//                   className="outline-none text-sm"
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   type="text"
//                   placeholder="Company Name"
//                   required
//                 />
//               </div>
//             )}

//             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//               <img src={assets.email_icon} alt="" />
//               <input
//                 className="outline-none text-sm"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
//               <img src={assets.lock_icon} alt="" />
//               <input
//                 className="outline-none text-sm"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//           </>
//         )}

//         {state === 'Login' && <p className="text-sm text-blue-600 mt-4 cursor-pointer ">
//           Forgot password? 
//         </p>}
        

//         <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded-full mt-4">
//           {state === "Login" ? "login" : isTextDataSubmitted ? "create account" : "next"}
//         </button>

//         {state === "Login" ? (
//           <p className="mt-5 text-center">
//             Don't have an account?{" "}
//             <span
//               className="text-blue-600 cursor-pointer"
//               onClick={() => setState("Sign Up")}
//             >
//               Sign Up
//             </span>
//           </p>
//         ) : (
//           <p className="mt-5 text-center">
//             Already have an account?{" "}
//             <span
//               className="text-blue-600 cursor-pointer"
//               onClick={() => setState("Login")}
//             >
//               Login
//             </span>
//           </p>
//         )}
//         <img onClick={e => setShowRecruiterLogin(false)} src={assets.cross_icon} className="absolute top-5 right-5" />
//       </form>
//     </div>
//   );
// }


// export default RecruiterLogin;



import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RecruiterLogin() {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
      return;
    }
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/company/login", {
          email,
          password,
        });
        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("image", image);
        const { data } = await axios.post(
          backendUrl + "/api/company/register",
          formData
        );
        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <form
        onSubmit={onSubmitHandler}
        className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-gray-700 shadow-2xl md:p-10"
      >
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Recruiter {state}
        </h1>
        <p className="mb-8 text-center text-sm font-light text-gray-500">
          Welcome! Please sign in to continue.
        </p>

        {state === "Sign Up" && isTextDataSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-4 my-8">
            <label
              htmlFor="image"
              className="group relative h-24 w-24 cursor-pointer"
            >
              <img
                className="h-full w-full rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Company Logo Upload"
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
            <p className="text-center text-sm font-medium">
              Upload Company <br />
              Logo
            </p>
          </div>
        ) : (
          <>
            {state !== "Login" && (
              <div className="mt-5 flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2 transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <img className="h-4 w-4" src={assets.person_icon} alt="Person Icon" />
                <input
                  className="w-full text-sm outline-none"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}
            <div className="mt-5 flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2 transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <img className="h-4 w-4" src={assets.email_icon} alt="Email Icon" />
              <input
                className="w-full text-sm outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2 transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <img className="h-4 w-4" src={assets.lock_icon} alt="Lock Icon" />
              <input
                className="w-full text-sm outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}

        {state === "Login" && (
          <p className="mt-4 cursor-pointer text-right text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center text-sm">
            Don't have an account?{" "}
            <span
              className="cursor-pointer font-semibold text-blue-600 transition-colors hover:text-blue-800"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm">
            Already have an account?{" "}
            <span
              className="cursor-pointer font-semibold text-blue-600 transition-colors hover:text-blue-800"
              onClick={() => {
                setState("Login");
                setIsTextDataSubmitted(false);
              }}
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          className="absolute right-5 top-5 h-6 w-6 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
          alt="Close button"
        />
      </form>
    </div>
  );
}

export default RecruiterLogin;