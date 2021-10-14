import React from "react";

const Story = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-start justify-center">
          <h1 className="w-full mt-14 font-bold md:text-5xl text-xl uppercase md:text-left text-center">
            \\ THE STORY
          </h1>
          <p className="my-10 text-left uppercase md:text-2xl text-base">
            LIFE IN THE ETHEREAL ENCLAVE WAS PEACEFUL AND PROSPEROUS. RULE UNDER
            THE EMPEROR GRANTED ETERNAL LIFE; INFINITE LEISURE FOR MUSIC, ARTS,
            AND POETRY.
            <br />
            <br />
            FOR MANY THIS WAS BLISS, BUT WHEN THE EMPEROR SUDDENLY DIED WITHOUT
            AN HEIR, EVERYTHING COLLAPSED.
            <br />
            <br />
            WHAT WAS ONCE EVERLASTING HAS NOW BEEN CONDENSED TO A MERE 7,777
            HOURS.
            <br />
            <br />
            NOW, GATHERING MEANS FOR SURVIVAL AS SOCIETY CRUMBLES, THE 0N1 FACE
            THEIR GREATEST ENEMIES: THEMSELVES.
            <br />
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="text-2xl py-5 px-[30px] border-[10px] border-black font-bold uppercase">
              Join the discord
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <img
          src="https://assets.website-files.com/60ef399b992671a8275e6cff/611f2be359269f6a0ad0d9c3_0n1%20K4m1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Story;
