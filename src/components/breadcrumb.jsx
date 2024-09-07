import { NavLink, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  const currentPageName = location.pathname.split("/").pop();

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
        to={location.pathname}
        activeClassName="active_link"
        className="text-sm font-bold leading-[24px] text-[#737373]"
      >
        {currentPageName.charAt(0).toUpperCase() + currentPageName.slice(1)}
      </NavLink>
    </ul>
  );
}
