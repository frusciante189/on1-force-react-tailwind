import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero h-screen bg-cover bg-no-repeat w-full flex items-center justify-center">
      <div className="bg-black max-w-xl mx-auto w-full p-5 flex items-center justify-center">
        <img
          src="https://assets.website-files.com/60ef399b992671a8275e6cff/60f259b9bca41a0768108cd8_oni-logo-4-white.svg"
          alt=""
          className="lg:max-w-[600px] lg:min-w-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
