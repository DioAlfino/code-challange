import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20">
      {/* Company History Section */}
      <section className="flex flex-col gap-10">
        <h2 className=" bold-20 lg:bold-32 mt-5 capitalize">Our History</h2>
        <p className="regular-16 text-black">
          Our journey began in 2010 with a passion for offroad travel and
          exploration. Founded by a group of adventurers who shared a love for
          rugged terrains and the thrill of discovery, our company has grown
          into a leading name in the offroad travel industry. Over the years, we
          have celebrated numerous milestones, such as launching the first
          cross-country offroad tour in 2012, expanding our fleet with
          state-of-the-art offroad vehicles in 2015, and opening international
          routes in 2018. Our commitment to innovation and excellence continues
          to drive us forward as we explore new horizons.
        </p>
      </section>

      {/* Culture Section */}
      <section className="flex flex-col gap-10">
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Our Culture</h2>
        <p className="regular-16 text-black">
          At Offroad Adventures, our culture is built on values such as
          adventure, sustainability, and community. We believe in fostering a
          spirit of adventure and curiosity, encouraging our team and customers
          to explore the great outdoors and discover the beauty of nature.
          Sustainability is at the core of our operations, and we are committed
          to minimizing our environmental impact through responsible travel
          practices and conservation efforts.
        </p>
        <p className="regular-16 text-black">
          Our community of offroad enthusiasts is what makes us unique. We take
          pride in creating a supportive and inclusive environment where
          everyone is welcome. Whether you're a seasoned offroader or a newcomer
          to the world of adventure travel, you'll find a place in our
          community. We are passionate, dedicated, and always striving to push
          the boundaries of what is possible in offroad travel.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
