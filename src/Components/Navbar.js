import { useState, useEffect, useRef } from "react";
import data from "../API/NavbarAPI";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setOpen(false);
    }
  }, [open]);

  return (
    <nav className="bg-black">
      <div className="px-10 py-5">
        <div className="lg:flex-row flex flex-col items-center justify-end ">
          <div className="flex items-center justify-end w-full">
            <div className="flex space-x-2">
              <div className="bg-onRed w-6 h-6"></div>
              <div className="bg-onYellow w-6 h-6"></div>
              <div className="bg-onBlue w-6 h-6"></div>
            </div>
            <div className="lg:hidden block ml-5" ref={ref}>
              <button onClick={() => setOpen(!open)}>
                <MenuIcon className="w-9 h-9 text-onRed" />
              </button>
            </div>
          </div>
          <div
            className={
              open ? "flex flex-col mt-5 lg:hidden" : "lg:flex mt-0 hidden"
            }
          >
            {/* lg:flex-row flex flex-col mt-5 lg:mt-0 */}
            <div className="lg:flex-row flex items-center justify-center flex-col lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 ml-5">
              {data.map((item) => {
                return (
                  <h1
                    href="/"
                    className="text-white cursor-pointer text-xl leading-9 hover:text-onBlue"
                  >
                    {item.title}
                  </h1>
                );
              })}
            </div>
            <div className="flex items-center justify-center mt-5 lg:mt-0">
              <a
                href="/"
                className="bg-white rounded-full w-7 h-7 flex items-center justify-center ml-5"
              >
                <img
                  src="https://assets.website-files.com/60ef399b992671a8275e6cff/6108de68356149230eaaa848_twitter.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
              <a
                href="/"
                className="bg-white rounded-full w-7 h-7 flex items-center justify-center ml-5"
              >
                <img
                  src="https://assets.website-files.com/60ef399b992671a8275e6cff/6108de698866019a09fc2162_discord.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
