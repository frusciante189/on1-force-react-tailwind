import React from "react";
import data from "../API/AboutAPI";

const About = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto lg:px-5 px-10">
        <div className="flex flex-col justify-center">
          <div className="pt-32">
            <img
              src="https://assets.website-files.com/60ef399b992671a8275e6cff/60f25818bf9eee36f6d1a4a7_oni-logo-5.svg"
              alt=""
              className="max-w-[100px] block mx-auto mb-10"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase text-[32px] font-bold text-left">
              What is the on1 force?
            </h1>
            <p className="my-10 text-2xl font-medium uppercase">
              The 0N1 Force are 7,777 generative side-profile characters with
              over 100 hand-drawn features fighting for their existence.
              Strength, spirit, and style are what you’ll need to survive in The
              Ethereal Enclave.
            </p>
            <span className="text-2xl font-medium uppercase my-10">
              ON1 Force is sold out and now available on:
            </span>
            <div className="flex items-center justify-center">
              <button className="text-2xl py-5 px-[30px] border-[10px] border-black font-bold">
                Opensea
              </button>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 mb-10">
            {data.map((item) => {
              return (
                <div>
                  <img src={item.image} alt="" />
                  <h1 className="uppercase text-2xl font-bold text-center mt-5 mb-2.5">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
          <img
            src="https://assets.website-files.com/60ef399b992671a8275e6cff/610d793938c82b5278a4267a_0n1-bg-p-1600.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
