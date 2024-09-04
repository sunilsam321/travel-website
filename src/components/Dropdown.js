import React, { useState } from "react";
import { serviceDropdown } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropdownStyle.css";

function Dropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    return (
      <>
        <ul
          className={dropdownOpen ? "services-submenu clicked" : "services-submenu"}
          onClick={toggleDropdown} // Toggle dropdown on click
           >
            {serviceDropdown.map((item) =>  {
                return (
                    <li key={item.index}>
                        <Link
                            to={item.url}
                            className={item.cName}
                            onClick={() => setDropdownOpen(false)}
                            >
                                <i className={item.icon}></i>
                                {item.title}
                            </Link>
                    </li>
                );
            })}


           </ul>
        </>
    );

}

export default Dropdown;