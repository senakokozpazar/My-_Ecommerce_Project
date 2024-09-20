import { useState } from "react";
import { NavLink } from "react-router-dom";

function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full text-left font-montserrat">
      <div
        onClick={toggleDropdown}
        className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        Shop <i className="fa-solid fa-chevron-down ml-1 text-[#737373]"></i>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 origin-top-right bg-white shadow-lg focus:outline-none">
          <div className="flex gap-3 p-5">
            <div className="flex flex-col gap-2">
              {" "}
              <NavLink to="/shop/women" className="block text-sm text-gray-700">
                Kadın
              </NavLink>
              <ul className="bg-white p-1 text-[#737373]">
                <li>
                  <NavLink to="/shop/women/bags" className="block p-1 text-sm">
                    Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop/women/belts" className="block p-1 text-sm">
                    Belts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop/women/cosmetics"
                    className="block p-1 text-sm"
                  >
                    Cosmetics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop/women/hats" className="block p-1 text-sm">
                    Hats
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <NavLink to="/shop/men" className="block text-sm text-gray-700">
                Erkek
              </NavLink>
              <ul className="bg-white p-1 pr-0">
                <li>
                  <NavLink to="/shop/men/bags" className="block p-1 text-sm">
                    Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop/men/belts" className="block p-1 text-sm">
                    Belts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop/men/cosmetics"
                    className="block p-1 text-sm"
                  >
                    Cosmetics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop/men/hats" className="block p-1 text-sm">
                    Hats
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;
