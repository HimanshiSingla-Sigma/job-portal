import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      details: "Send us an email and we'll get back to you quickly",
      contact: "support@insiderjobs.com",
      link: "mailto:support@insiderjobs.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      details: "Give us a call during business hours",
      contact: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      details: "Come visit our office",
      contact: "Sector 23A, Gurugram",
      link: "https://maps.google.com",
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "#",
    },
    // {
    //   name: 'Twitter',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    //     </svg>
    //   ),
    //   url: '#'
    // },
    // {
    //   name: 'LinkedIn',
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    //     </svg>
    //   ),
    //   url: '#'
    // },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.7 13.679 3.7 12.316s.498-2.579 1.426-3.375c.875-.856 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.796 1.426 2.012 1.426 3.375s-.498 2.579-1.426 3.375c-.875.856-2.026 1.297-3.323 1.297zm8.062-6.245c0 .677-.118 1.331-.335 1.941a5.346 5.346 0 01-.923 1.619 5.344 5.344 0 01-1.619.923c-.61.217-1.264.335-1.941.335s-1.331-.118-1.941-.335a5.344 5.344 0 01-1.619-.923 5.346 5.346 0 01-.923-1.619c-.217-.61-.335-1.264-.335-1.941s.118-1.331.335-1.941c.217-.61.5-1.148.923-1.619a5.344 5.344 0 011.619-.923c.61-.217 1.264-.335 1.941-.335s1.331.118 1.941.335c.61.217 1.148.5 1.619.923s.823 1.009.923 1.619c.217.61.335 1.264.335 1.941z" />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with us through any of the channels below
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{method.details}</p>
                <a
                  href={method.link}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-block"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="max-w-md mx-auto mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Stay updated with the latest job opportunities and career tips
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
