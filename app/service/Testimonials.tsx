import React from "react";

const Testimonials: React.FC = React.memo(() => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        Customer Testimonials
      </h2>
      <div className="flex flex-col gap-5">
        <blockquote className="italic text-black">
          "Offroad Adventures provided an unforgettable experience! The guides
          were knowledgeable and the vehicles were top-notch. Highly recommend!"
          - Sarah K.
        </blockquote>
        <blockquote className="italic text-black">
          "We had an amazing time on the custom tour. The team took care of
          everything, and we just enjoyed the ride. Will definitely be back!" -
          Mark T.
        </blockquote>
        <blockquote className="italic text-black">
          "Great service and excellent vehicles. Renting from Offroad Adventures
          was easy and hassle-free. Loved every moment of our trip." - Emily R.
        </blockquote>
      </div>
    </section>
  );
});

export default Testimonials;
