import React from "react";

const Testimonials: React.FC = React.memo(() => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        Customer Testimonials
      </h2>
      <div className="flex flex-col gap-5">
        <blockquote className="italic text-black">
          &quot;Offroad Adventures provided an unforgettable experience! The
          guides were knowledgeable and the vehicles were top-notch. Highly
          recommend!&quot; - Sarah K.
        </blockquote>
        <blockquote className="italic text-black">
          &quot;We had an amazing time on the custom tour. The team took care of
          everything, and we just enjoyed the ride. Will definitely be
          back!&quot; - Mark T.
        </blockquote>
        <blockquote className="italic text-black">
          &quot;Great service and excellent vehicles. Renting from Offroad
          Adventures was easy and hassle-free. Loved every moment of our
          trip.&quot; - Emily R.
        </blockquote>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
