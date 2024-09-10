import { fetchCategories } from "@/redux/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ShopDropdown() {
  console.log("ShopDropdown component is rendering...");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.products?.categories;
  });
  const fetchState = useSelector((state) => state.product?.fetchState);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full text-left font-montserrat">
      <div className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
        <NavLink
          to="/shop"
          activeClassName="active_link"
          className="font-semibold text-[#737373]"
        >
          Shop
        </NavLink>{" "}
        <i
          className="fa-solid fa-chevron-down ml-1 text-[#737373]"
          onClick={toggleDropdown}
        ></i>
      </div>

      {isOpen && (
        <>
          {fetchState?.categories === "NOT_FETCHED" ||
          fetchState?.categories === "PENDING" ? (
            <div>Loading...</div> // or a loading spinner
          ) : fetchState?.categories === "FAILED" ? (
            <div>Error fetching categories</div> // or an error message
          ) : (
            <div className="absolute z-10 mt-2 w-56 origin-top-right bg-white shadow-lg focus:outline-none">
              <ul>
                {categories?.map((category) => (
                  <li key={category.id}>
                    <NavLink to={`/shop/${category.gender}/${category.title}`}>
                      {category.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ShopDropdown;
