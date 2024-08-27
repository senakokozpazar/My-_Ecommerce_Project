import { NavLink } from "react-router-dom";

export default function ShopContainer() {
  const shopCards = [
    {
      src: "/mobileshopcards/card-cover-1.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-2.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-3.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-4.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
    {
      src: "/mobileshopcards/card-cover-6.jpg",
      title: "CLOTHS",
      subtitle: "5 Items",
    },
  ];
  return (
    <div className="bg-[#FAFAFA] font-montserrat">
      <div className="m-10 mb-5 flex items-center justify-center p-14">
        <h1 className="text-2xl font-semibold leading-[32px] tracking-[0.1px] text-[#252B42]">
          Shop
        </h1>
      </div>

      <ul className="flex items-center justify-center gap-5 p-10 tracking-[0.2px]">
        <NavLink
          to="/"
          exact
          activeClassName="active_link"
          className="text-sm font-bold leading-[24px] text-[#737373]"
        >
          Home
        </NavLink>
        <i className="fa-solid fa-chevron-right h-[12px] w-[7px] items-center justify-center text-[#BDBDBD]"></i>
        <NavLink
          to="/shop"
          activeClassName="active_link"
          className="text-sm font-bold leading-[24px] text-[#737373]"
        >
          Shop
        </NavLink>
      </ul>

      <div className="flex flex-col items-center justify-center gap-3">
        {shopCards.map((card, index) => (
          <div key={index} className="relative text-white">
            <img src={card.src} className="h-[330px] w-[332px] object-cover" />
            <div className="flex flex-col items-center justify-center font-semibold">
              <p className="absolute top-1/2 text-center text-base">
                {card.title}
              </p>
              <p className="absolute top-2/3 text-center text-sm">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
