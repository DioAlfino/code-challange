import React, { Suspense, lazy } from "react";

// Lazy load Testimonials section
const Testimonials = lazy(() => import("./Testimonials"));

const Services = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20">
      {/* Services Overview Section */}
      <section className="flex flex-col gap-10">
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Our Services</h2>
        <p className="regular-16 text-black">
          At Offroad Adventures, we offer a variety of services designed to meet
          the needs of every offroad enthusiast. From guided tours to vehicle
          rentals, we have something for everyone.
        </p>
      </section>

      {/* Individual Services Section */}
      <section className="flex flex-col gap-10">
        <h3 className="bold-18 lg:bold-28 mt-5 capitalize">
          Guided Offroad Tours
        </h3>
        <p className="regular-16 text-black">
          Explore rugged terrains with our experienced guides. Our tours are
          designed to provide a safe and thrilling experience for all skill
          levels.
        </p>
        <p className="regular-16 text-black">
          Pricing: Starting at $150 per person
        </p>

        <h3 className="bold-18 lg:bold-28 mt-5 capitalize">
          Offroad Vehicle Rentals
        </h3>
        <p className="regular-16 text-black">
          Rent state-of-the-art offroad vehicles for your personal adventures.
          Our fleet includes a variety of models to suit different preferences
          and needs.
        </p>
        <p className="regular-16 text-black">
          Pricing: Starting at $200 per day
        </p>

        <h3 className="bold-18 lg:bold-28 mt-5 capitalize">
          Custom Offroad Experiences
        </h3>
        <p className="regular-16 text-black">
          Customize your own offroad adventure with our bespoke services. From
          corporate team-building events to private family outings, we can
          tailor a package to suit your requirements.
        </p>
        <p className="regular-16 text-black">Contact us for pricing details</p>
      </section>

      {/* Testimonials Section */}
      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>
    </div>
  );
};

export default Services;
