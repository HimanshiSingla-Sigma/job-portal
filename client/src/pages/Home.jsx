import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import HowItWorks from './HowItWorks';
import CareerCTA from './CareerCTA';
import { Outlet } from 'react-router-dom';


function Home() {
    return ( 
        <div>
            <Navbar/>
            <Hero/>
            <JobListing/>
            <HowItWorks/>
            <CareerCTA/>
            {/* <AppDownload/> */}
            <Footer/>
            <div className="flex-1 h-full p-2 sm:p-5 ">
          <Outlet />
        </div>
        </div>
     );
}

export default Home;