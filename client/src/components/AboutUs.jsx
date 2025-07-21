import React from "react";
import image from "../images/aboutimg.png";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Welcome to MediLink, your one-stop solution for seamless doctor appointment bookings and healthcare access. We are committed to making healthcare more accessible, organized, and user-friendly—for both patients and medical professionals.

Our platform allows users to browse and book appointments with verified doctors across various specializations, choosing the day and time that suits them best. Whether it’s a general consultation or a specialist visit, scheduling care has never been easier.

For doctors, we provide a streamlined registration process where they can create their professional profile, including specialization, years of experience, and availability. This enables patients to make informed decisions while ensuring maximum visibility for medical professionals.

At MediLink, we believe in connecting people to quality care—on their terms, at their convenience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
