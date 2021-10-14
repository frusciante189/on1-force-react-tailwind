import data from "../API/TeamAPI";

const Team = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-5 md:mt-40 mt-20">
        <h1 className="uppercase md:text-[44px] text-xl leading-[55px] font-bold">
          The Team
        </h1>
        <h2 className="mb-5 md:text-2xl text-lg">
          A <span className="text-onRed">name</span> has been taken... and the
          team behind the ON1 Force.
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mb-24">
          {data.map((item) => {
            return (
              <div className="flex flex-col items-start justify-center">
                <img src={item.img} alt="" className="w-full h-full" />
                <h2 className="mt-5 mb-2.5 text-xl font-bold">{item.title}</h2>
                <h2 className="mb-2.5">{item.role}</h2>
                <a
                  href="/"
                  className="bg-onRed rounded-full p-1.5 flex items-center justify-center"
                >
                  <img
                    src="https://assets.website-files.com/60ef399b992671a8275e6cff/6108de68356149230eaaa848_twitter.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
