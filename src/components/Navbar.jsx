import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ count }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleChange = () => {
    setIsNavOpen(!isNavOpen);
  };

  const activeLink =
    "text-2xl font-bold md:m-4 md:text-sm md:font-normal md:border-primary-orange md:border-b-4 md:pb-8 md:text-black";
  const normalLink = "text-2xl font-bold md:m-4 md:text-sm md:font-normal";

  return (
    <div className="py-3 md:py-6 w-[90%] md:w-4/5 mx-auto text-grayish-blue md:border-b flex md:block gap-4 items-center">
      <img
        src="/images/icon-menu.svg"
        alt="Hamburger menu"
        className="block md:hidden w-6 h-4"
        onClick={handleChange}
      />

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="md:mr-6 ">
            <NavLink activeClassName="active" to="/">
              <img src="/images/logo.svg" alt="Logo" />
            </NavLink>
          </div>
          <div
            className={
              isNavOpen
                ? "block absolute  text-slate-900 md:flex md:items-center left-0 top-5 bg-white w-[75%] h-full md:static md:text-grayish-blue"
                : "hidden absolute  text-slate-900 md:flex md:items-center left-0 top-5 bg-white w-[75%] h-full md:static md:text-grayish-blue"
            }
          >
            <div className="mt-2 mb-12 ml-8 md:m-0 md:hidden">
              <img
                src="/images/icon-close.svg"
                alt="Menu close"
                onClick={handleChange}
              />
            </div>

            <div className="m-8 md:m-0">
              <NavLink
                activeClassName="active"
                to="/collections"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Collections
              </NavLink>
            </div>
            <div className="m-8 md:m-0">
              <NavLink
                activeClassName="active"
                to="/men"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Men
              </NavLink>
            </div>
            <div className="m-8 md:m-0">
              <NavLink
                exact
                activeClassName="active"
                to="/women"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Women
              </NavLink>
            </div>
            <div className="m-8 md:m-0">
              <NavLink
                activeClassName="active"
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About
              </NavLink>
            </div>
            <div className="m-8 md:m-0">
              <NavLink
                activeClassName="active"
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5 cursor-pointer md:mr-10">
            {count === 0 ? (
              <span></span>
            ) : (
              <span className="bg-primary-orange text-white text-[8px] rounded-lg absolute top-7 translate-x-2 px-2">
                {count}
              </span>
            )}
            <img
              className="block"
              src="/images/icon-cart.svg"
              alt="Cart"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />

            <div
              className={
                isCartOpen
                  ? "absolute w-[98%] bg-white shadow-xl left-0 mx-1 rounded-xl top-[86px] md:w-[25%] md:left-[65%]"
                  : "hidden absolute w-[98%] bg-white shadow-md left-0 mx-1 rounded-xl top-[86px] md:w-[25%] md:right-0"
              }
            >
              <div className="h-10 border-b px-6">
                <p className="my-4 font-bold text-black">Cart</p>
              </div>

              {count === 0 ? (
                <div className="flex justify-center items-center h-40 px-4 py-6">
                  <p className="text-sm font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col px-4 py-6">
                  <div className="flex mb-6 gap-4 items-center">
                    <div className="w-[100px] md:w-[50px]">
                      <img
                        className="w-full rounded-md"
                        src="images/image-product-1-thumbnail.jpg"
                        alt="Product"
                      />
                    </div>
                    <div className="w-[85%] flex flex-col items text-sm text-grayish-blue font-semibold">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {count}{" "}
                        <span className="text-black font-bold">
                          ${(125.0 * `${count}`).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <div>
                      <img
                        src="images/icon-delete.svg"
                        alt="Item Delete button"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="bg-primary-orange w-full py-4 rounded-xl text-white hover:opacity-70">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img
              className="block w-10 hover:border-2 border-primary-orange rounded-[50%] cursor-pointer"
              src="/images/image-avatar.png"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
