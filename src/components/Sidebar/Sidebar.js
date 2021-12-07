import "./Sidebar.css";
import React from "react";
import { SidebarData } from "./SidebarData";
import { Navbar, NavDropdown, NavLink } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className={val.class}>
                <img src={val.icon} alt={val.title} />
                <p>{val.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <Navbar className="col-md-12 d-none d-md-block  sidebar">
        <NavDropdown
          title="Filter by favorite"
          id="basic-nav-dropdown"
        ></NavDropdown>

        <NavLink>Merlion</NavLink>

        <NavDropdown title="Marina Bay Sands" id="basic-nav-dropdown">
          <NavDropdown.Item>ArtScience Museum</NavDropdown.Item>
          <NavDropdown.Item>Marina Bay Sands Skypark</NavDropdown.Item>
          <NavDropdown.Item>Double Helix Bridge</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Garden by the Bay"
          id="basic-nav-dropdown"
        ></NavDropdown>

        <NavDropdown title="China town" id="basic-nav-dropdown"></NavDropdown>

        <NavLink>Asian Civilisations Museum</NavLink>
        <NavLink>Clarke Quay</NavLink>
        <NavLink>Fort Canning Park</NavLink>
        <NavLink>Singapore Flyer</NavLink>
        <NavLink>Orchard Road</NavLink>
      </Navbar>
    </div>
  );
}

export default Sidebar;
