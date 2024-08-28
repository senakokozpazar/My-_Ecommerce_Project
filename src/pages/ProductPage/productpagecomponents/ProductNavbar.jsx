import { NavLink } from "react-router-dom";

export default function ProductNavbar() {
  return (
    <nav className="flex items-center justify-center p-10">
      <ul className="flex gap-2">
        <li>
          <NavLink
            to="#"
            activeClassName="active_link"
            className="font-semibold"
            isActive={() => true}
          >
            Description
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/additional-information"
            activeClassName="active_link"
            className="font-semibold"
          >
            Additional Information
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            activeClassName="active_link"
            className="font-semibold"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
