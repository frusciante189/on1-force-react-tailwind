import data from "../API/ClanAPI";
const Clan = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto lg:px-5 px-10 py-24">
        <h1 className="uppercase w-full md:mt-10 mt-0 md:text-[44px] text-xl font-bold">
          Find Your Clan
        </h1>
        <div className="flex flex-col space-y-8">
          {data.map((item) => {
            return (
              <div>
                <h2 className="mt-5 mb-2.5 text-xl font-bold">
                  TYPE: {item.typeName}
                </h2>
                <h2 className={`${item.typeColor} mb-2.5`}>{item.type}</h2>
                <p className="mb-5 text-2xl">{item.descp}</p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10">
                  {item.content.map((card) => {
                    return (
                      <div className="text-2xl text-left flex flex-col items-start leading-9 mt-8 md:mt-0">
                        <img src={card.img} alt="card" />
                        <h2 className="text-xl font-bold mt-5 mb-2.5">
                          {card.title}
                        </h2>
                        {card.descp && <span className="">{card.descp}</span>}
                        {card.equipments &&
                          card.equipments.map((eq) => {
                            return (
                              <div>
                                <span>{eq.title}</span>
                              </div>
                            );
                          })}
                        {card.backgrounds && (
                          <div className="mt-2.5">
                            <h2>Backgrounds:</h2>
                            <span>{card.backgrounds}</span>
                          </div>
                        )}
                        {card.accessories && (
                          <div className="mt-2.5">
                            <h2>Accessories:</h2>
                            <span>{card.accessories}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clan;
