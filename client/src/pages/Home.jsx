import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import HowItWorks from './HowItWorks';
import CareerCTA from './CareerCTA';

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
        </div>
     );
}

export default Home;