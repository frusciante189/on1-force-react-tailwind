import React from "react";

const Roadmap = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto lg:px-5 px-10 md:mt-24 mt-12">
        <div className="flex flex-col items-start justify-center">
          <h1 className="md:text-[44px] text-xl uppercase font-bold md:text-left text-center">
            \\ THE ROADMAP - <span className="text-onRed">ACTIVATED</span>
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-y-10">
            <div className="flex flex-col items-start space-y-12">
              <div className="flex flex-col items-start justify-center">
                <h1 className="line-through font-bold">25% SOLD</h1>
                <p className="md:text-xl text-base font-normal">
                  \\ ON1 NFT GIVEAWAY ASSEMBLE IN
                  <br />
                  <br />
                  <span className="text-onRed">DISCORD</span> & SUBMIT A
                  DERIVATIVE IN YOUR STYLE. BY COMMUNITY VOTE, LET THE BEST
                  DESIGN WIN
                </p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="line-through font-bold">50% SOLD</h1>
                <p className="md:text-xl text-base font-normal">
                  \\ MERCH
                  <br />
                  <br />
                  LIMITED APPAREL RELEASE BASED ON CHARACTER AESTHETIC.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-12 md:mt-0 mt-10">
              <div className="flex flex-col items-start justify-center md:ml-44 ml-0">
                <h1 className="line-through font-bold">75% SOLD</h1>
                <p className="md:text-xl text-base font-normal">
                  \\ 0N1 METAVERSE PLANNING BEGINS
                  <br />
                  <br />
                  BRING THE 0N1VERSE TO LIFE. ART AND COLLABORATIVE EXHIBITIONS
                  FOR 0N1 HOLDERS.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center md:ml-44 ml-0">
                <h1 className="line-through font-bold">100% SOLD</h1>
                <p className="md:text-xl text-base font-bold">
                  <span className="font-normal">
                    \\ COMIC BOOK DRAFTING BEGINS
                  </span>
                  <br />
                  <br />
                  0N1 FORCE HAS SOLD OUT. KEEP AN EYE OUT FOR ANNOUNCEMENTS IN
                  <span className="text-onRed"> DISCORD</span> FOR ROADMAP
                  ACTIVATIONS!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
