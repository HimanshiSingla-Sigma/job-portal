import React from 'react';
import './HowItWorks.css'; // We'll create this CSS file

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create an Account",
      description: "Sign up and complete your profile with your skills and experience."
    },
    {
      number: 2,
      title: "Search Jobs",
      description: "Browse through thousands of job listings that match your criteria."
    },
    {
      number: 3,
      title: "Apply for Jobs",
      description: "Submit your application with just a few clicks."
    },
    {
      number: 4,
      title: "Give Interviews",
      description: "Give interview to AIRecruiter"
    },
    {
        number: 5,
        title: "Get Hired",
        description: "Connect with employers and land your dream job."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Get your dream job in 4 simple steps</p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;