import React from "react";
import { logo } from "../../assets/images/index";
import { navLinksdata } from "../../constants/index";
import {link} from "react-scroll";

export const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont ">
      <div>
        <img className="w-20 h-20" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base front-normal text-grey-400 tracking-wide hover:text-designColor duration-300 cursor-pointer"
              key={_id}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
