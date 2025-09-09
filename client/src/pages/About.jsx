import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-blue-600">InsiderJobs</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Built by <span className="font-semibold text-indigo-600">AlmightyCoders</span>, 
          InsiderJobs is your trusted platform to connect skilled talent with 
          top companies. Our mission is simple: make hiring smarter, faster, and 
          more transparent for recruiters and job seekers alike.
        </p>
      </div>

      {/* Mission + Vision Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-600">
            To bridge the gap between passionate professionals and forward-thinking 
            employers. We empower candidates to showcase their true potential while 
            giving recruiters AI-powered tools to make confident, data-driven hiring decisions.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🌍 Our Vision</h2>
          <p className="text-gray-600">
            To create a world where every job seeker finds the right opportunity, 
            and every company discovers the talent that transforms their business. 
            We aim to redefine the hiring journey with innovation, fairness, and trust.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mt-16 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">For Job Seekers</h3>
            <p className="text-gray-600">
              Build standout resumes, gain AI-driven insights, and land interviews at 
              companies that value your skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">For Recruiters</h3>
            <p className="text-gray-600">
              Access smart tools to analyze resumes, streamline hiring workflows, 
              and make better hiring decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">For Companies</h3>
            <p className="text-gray-600">
              Discover talent faster, reduce bias in hiring, and build teams that 
              drive long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Together, let’s shape the future of work 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Whether you’re a recruiter, job seeker, or company, InsiderJobs is here 
          to make your journey smoother and smarter.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default About;
