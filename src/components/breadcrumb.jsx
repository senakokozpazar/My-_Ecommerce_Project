import { NavLink } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <ul className="flex items-center justify-center gap-5 p-10 tracking-[0.2px] lg:mx-20 lg:justify-start">
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
  );
}
