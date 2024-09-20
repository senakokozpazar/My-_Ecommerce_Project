import { NavLink, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();

  // Split the pathname into parts and filter out empty strings
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Only take up to 3 levels (e.g., ["shop", "erkek", "tişört"])
  const meaningfulPathnames = pathnames.slice(0, 3);

  // Capitalize the first letter of a word
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <ul className="flex items-center justify-center gap-5 p-10 tracking-[0.2px] lg:mx-20 lg:justify-start">
      {/* Home link */}
      <li>
        <NavLink
          to="/"
          exact
          activeClassName="active_link"
          className="text-sm font-bold leading-[24px] text-[#737373]"
        >
          Home
        </NavLink>
      </li>

      {/* Render meaningful breadcrumbs only (up to category name) */}
      {meaningfulPathnames.map((value, index) => {
        // Create the link path up to the current index
        const to = `/${meaningfulPathnames.slice(0, index + 1).join("/")}`;

        return (
          <li key={to} className="flex items-center">
            {/* Chevron icon */}
            <i className="fa-solid fa-chevron-right mx-2 h-[12px] w-[7px] text-[#BDBDBD]"></i>

            {/* Breadcrumb link */}
            <NavLink
              to={to}
              activeClassName="active_link"
              className="text-sm font-bold leading-[24px] text-[#737373]"
            >
              {capitalize(value)}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
