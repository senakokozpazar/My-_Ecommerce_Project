import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, NavLink, useHistory } from "react-router-dom";
import Gravatar from "react-gravatar";
import { login, logout } from "@/redux/clientSlice";
import ShopDropdown from "@/components/shopDropDown";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <>
      {/*Desktop Header */}
      <div className="sticky top-0 z-10 m-0 hidden flex-col p-0 lg:block">
        <div
          className={`flex h-[46px] items-center justify-between ${location.pathname === "/" ? "bg-[#252B42]" : "bg-[#23856D]"} text-sm font-semibold leading-[24px] tracking-[0.2px] text-white`}
        >
          <div className="flex gap-5">
            <div>
              <i className="fa-solid fa-phone p-2 text-white"></i>
              <span>(225) 555-0118</span>
            </div>
            <div>
              <i className="fa-regular fa-envelope p-2 text-white"></i>
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="m-3 flex gap-3">
            <p>Follow Us : </p>
            <img
              src="/navbaricons/a.png"
              alt="instagram"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/navbaricons/icn settings icn-xs.png"
              alt="youtube"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/navbaricons/facebook.png"
              alt="facebook"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/navbaricons/twitter.png"
              alt="twitter"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <div className="sticky z-10 flex h-[58px] items-center justify-between bg-white text-sm font-semibold leading-[24px] tracking-[0.2px]">
          <div className="flex gap-5">
            <img src="/navbar-brand.png" className="p-2" />
            <ul className="flex items-center gap-5 text-[#737373]">
              <NavLink
                to="/"
                exact
                activeClassName="active_link"
                className="font-semibold"
              >
                Home
              </NavLink>
              <ShopDropdown />
              <NavLink
                to="/aboutus"
                activeClassName="active_link"
                className="font-semibold"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                activeClassName="active_link"
                className="font-semibold"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active_link"
                className="font-semibold"
              >
                Contact
              </NavLink>
              <NavLink
                to="/pages"
                activeClassName="active_link"
                className="font-semibold"
              >
                Pages
              </NavLink>
            </ul>
          </div>
          <div className="m-2 flex items-center gap-2 text-[#23A6F0]">
            {user && (
              <>
                <Gravatar
                  email={user.email}
                  size={30}
                  className="m-2 rounded-full"
                />
                <span className="font-semibold">{user.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
            {!user && (
              <>
                <i className="fa-regular fa-user p-2"></i>
                <Link to="/login">Login</Link> /{" "}
                <Link to="/register">Register</Link>
              </>
            )}
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="font-normal">1</span>
            <i class="fa-regular fa-heart"></i>
            <span className="font-normal">1</span>
          </div>
        </div>
      </div>

      {/*Mobile Header */}
      <div className="mx-5 font-montserrat lg:hidden">
        <div className="flex justify-between">
          <img src="/navbar-brand.png" />

          <div>
            <i class="fa-solid fa-magnifying-glass p-7"></i>
            <i class="fa-solid fa-cart-shopping p-7"></i>
            <i class="fa-solid fa-bars p-7"></i>
          </div>
        </div>

        <div className="font-2xl m-10 justify-center p-5 text-center text-xl font-normal leading-[45px] tracking-[0.2px]">
          <ul className="flex flex-col text-[#737373]">
            {isHomePage ? (
              <>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/product"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Product
                </NavLink>
                <NavLink
                  to="/pricing"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Contact
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Home
                </NavLink>
                <ShopDropdown />
                <NavLink
                  to="/aboutus"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  About
                </NavLink>
                <NavLink
                  to="/blog"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/pages"
                  activeClassName="active_link"
                  className="font-semibold"
                >
                  Pages
                </NavLink>
                <div className="mt-5 flex flex-col gap-2 text-[#23A6F0]">
                  <div className="flex items-center justify-center font-semibold">
                    {user && (
                      <>
                        <Gravatar
                          email={user.email}
                          size={30}
                          className="m-2 rounded-full"
                        />
                        <span className="font-semibold">{user.name}</span>
                      </>
                    )}
                    {!user && (
                      <>
                        <i className="fa-regular fa-user p-2"></i>
                        <Link to="/login">Login</Link> /{" "}
                        <Link to="/register">Register</Link>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="font-normal">1</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    <i className="fa-regular fa-heart"></i>
                    <span className="font-normal">1</span>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
