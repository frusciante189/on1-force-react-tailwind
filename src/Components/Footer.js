import data from "../API/FooterAPI";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto lg:px-5 px-10 pt-[60px] pb-10 text-white">
        <div className="grid md:grid-cols-3 grid-cols-1 mb-10">
          <a href="/" className="flex items-start w-full">
            <img
              src="https://assets.website-files.com/60ef399b992671a8275e6cff/60f2822227327bed6468918e_oni-logo-5-white.svg"
              alt="logo"
              className="w-[60px] h-[60px]"
            />
          </a>
          {data.map((item) => {
            return (
              <div className="flex flex-col md:items-end items-start mr-20">
                <h1 className="mb-5 text-sm text-white md:mt-0 mt-5">
                  {item.title}
                </h1>
                {item.content.map((element) => {
                  return (
                    <h1 className="mb-2.5 cursor-pointer text-onYellow text-lg">
                      {element.title}
                    </h1>
                  );
                })}
              </div>
            );
          })}
        </div>
        <h1 className="text-center text-lg">
          Copyright © 2021 0.N.1 Force, LLC. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
