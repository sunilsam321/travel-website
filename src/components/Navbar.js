import { Component } from "react";
// import React, { useState } from "react";
import "./NavbarStyle.css";
import Traven from "../images/traven0.png"
import { MenuItems } from "./MenuItems";
import Dropdown from "./Dropdown";
// import Flight from '../routes/Flight'
import { Link } from "react-router-dom";


class Navbar extends Component {
    state = {
      clicked: false,
      servicesDropdownOpen: false,
    };
  
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    };

    handleButtonClick = () => {
      this.setState({ buttonClicked: !this.state.buttonClicked });
      window.location.href = "https://home.traventura.in";
    };
  
  
    handleServicesDropdown = () => {
      this.setState({ servicesDropdownOpen: !this.state.servicesDropdownOpen });
    };
  
    render() {
      return (
        <nav className="NavbarItems">
          <img alt="img" src={Traven} />
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
  
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              if (item.title === "Services") {
                return (
                  <li key={index}>
                    <Link
                      className={item.cName}
                      to={item.url}
                      onClick={this.handleServicesDropdown} // Close dropdown if clicked outside
                    >
                      <i className={item.icon}></i>
                      {item.title}
                      <i
                        className={
                          this.state.servicesDropdownOpen
                            ? "fa fa-caret-up"
                            : "fa fa-caret-down"
                        }
                        onClick={this.handleServicesDropdown}
                      />
                       <Dropdown/>
                    </Link>
                    {/* <ul
                      className={this.state.servicesDropdownOpen ? "dropdown-menu" : ""}
                    > */}
                        
{/* 
                      <li>
                        <Link to="/flights">Flights</Link>
                      </li> */}
                      
                      {/* Add more service links as needed */}
                    {/* </ul> */}
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              }
            })}
  
              <button className="button" onClick={this.handleButtonClick}>
                LogIn or SignUp
              </button>
             {/* <button class="button"><a href="https://home.traventura.in" class="">LogIn or SignUp</a></button>  */}
            {/* <button><a href="/" class="">LogIn or SignUp</a></button> */}
          </ul>
          
        </nav>

       
      );
    }
  }
  
 


export default Navbar;