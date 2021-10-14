import React from "react";

const Clock = () => {
  return (
    <section className="bg-white">
      <div
        className="md:bg-clock bg-contain bg-no-repeat mt-10 py-36"
        style={{ backgroundPosition: "100% 50%" }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase my-10 text-center md:text-[44px] text-2xl leading-[55px]">
            The Clock is <span className="text-onRed">ticking</span>
          </h1>
          <h1 className="uppercase my-10 text-center text-3xl md:text-[44px] leading-[55px] font-bold">
            7,777 <br className="md:hidden block" /> hours remain <br /> until
            <span className="text-onRed"> d34th</span>.
          </h1>
          <h2 className="text-sm italic text-center">The Story</h2>
        </div>
      </div>
    </section>
  );
};

export default Clock;
