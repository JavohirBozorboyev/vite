import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Links = [
  {
    name: "Bosh Sahifa",
    url: "/",
  },
  {
    name: "Kurslar",
    url: "/course",
  },
  {
    name: "O'qtivchilar",
    url: "/teacher",
  },
  {
    name: "Natijalar",
    url: "/info",
  },
  {
    name: "Bog'lanish",
    url: "/contact",
  },
];

const Navbar = (props: Props) => {
  return (
    <>
      <div className=" fixed w-full z-[2000] bg-white ">
        <div className="container flex py-4 items-center justify-between m-auto ">
          <div className="w-full lg:w-1/2 flex items-center justify-between">
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={`text-xl font-extrabold firstText  uppercase  ${
                    isActive ? "text-yellow-400" : "text-slate-700"
                  }`}
                >
                  Ilm-Ziyo
                </span>
              )}
            </NavLink>
            <div className=" lg:hidden">
              <svg
                width={30}
                height={30}
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-end gap-4  w-full lg:w-1/2">
            {Links.map((item, i) => {
              return (
                <NavLink to={`${item.url}`} key={i}>
                  {({ isActive }) => (
                    <span
                      className={`text-xs font-extrabold firstText  capitalize hover:text-yellow-400 duration-300  ${
                        isActive ? "text-yellow-400" : "text-slate-700"
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
