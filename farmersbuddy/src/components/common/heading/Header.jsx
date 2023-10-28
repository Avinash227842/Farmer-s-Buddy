import React from "react";
import { Head } from "./Head";
import { Link } from "react-router-dom";
import "./header.css"

export const Header = () => {
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/crops">Crops</Link>
            </li>
            <li>
              <Link to="/fertilizers">Fertilizers</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li> 
          </ul>
        </nav>
      </header>
    </>
  );
};
