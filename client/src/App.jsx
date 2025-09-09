import React, { useContext } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";


const App = () => {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);

  return (
    <div className="text-black bg-white p-4">
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apply-job/:id" element={<ApplyJob />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          {companyToken ? (
            <>
              <Route path="add-job" element={<AddJob />}></Route>
              <Route path="manage-jobs" element={<ManageJobs />}></Route>
              <Route
                path="view-applications"
                element={<ViewApplications />}
              ></Route>
            </>
          ) : null}
        </Route>
      </Routes>
    </div>
  );
};

export default App;





// import React, { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ApplyJob from "./pages/ApplyJob";
// import Applications from "./pages/Applications";
// import RecruiterLogin from "./components/RecruiterLogin";
// import { AppContext } from "./context/AppContext";
// import Dashboard from "./pages/Dashboard";
// import AddJob from "./pages/AddJob";
// import ManageJobs from "./pages/ManageJobs";
// import ViewApplications from "./pages/ViewApplications";
// import "quill/dist/quill.snow.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AnimatedBackground from "./components/AnimateBackground"; // Import the new component

// const App = () => {
//   const { showRecruiterLogin, companyToken } = useContext(AppContext);

//   return (
//     <div className="relative bg-white text-black min-h-screen">
//       <AnimatedBackground /> {/* Add the background component here */}
//       <div className="relative z-10 p-4">
//         {showRecruiterLogin && <RecruiterLogin />}
//         <ToastContainer />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/apply-job/:id" element={<ApplyJob />}></Route>
//           <Route path="/applications" element={<Applications />}></Route>
//           <Route path="/dashboard" element={<Dashboard />}>
//             {companyToken ? (
//               <>
//                 <Route path="add-job" element={<AddJob />}></Route>
//                 <Route path="manage-jobs" element={<ManageJobs />}></Route>
//                 <Route
//                   path="view-applications"
//                   element={<ViewApplications />}
//                 ></Route>
//               </>
//             ) : null}
//           </Route>
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;


