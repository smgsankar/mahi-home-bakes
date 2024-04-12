import { useState } from "react";
import { Logo } from "../components/Logo";
import { NavbarItem } from "../components/NavbarItem";
import { MenuSvg } from "../icons/MenuSvg";
import "../styles/navbar.css";

export const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav>
      <ul className="navContainer">
        <NavbarItem targetId="about">About</NavbarItem>
        <NavbarItem targetId="gallery">Gallery</NavbarItem>
        <NavbarItem targetId="main">
          <Logo />
        </NavbarItem>
        <NavbarItem targetId="testimonials">Testimonials</NavbarItem>
        <NavbarItem targetId="contact">Contact</NavbarItem>
      </ul>
      <section className="navContainerMobile">
        <button onClick={toggleDropdown}>
          <MenuSvg />
        </button>
        <Logo />
      </section>
      {showDropdown && (
        <div
          className={showDropdown ? "dropdown" : "hiddenDropdown"}
          onClick={toggleDropdown}
        >
          <ul>
            <NavbarItem targetId="about">About</NavbarItem>
            <NavbarItem targetId="gallery">Gallery</NavbarItem>
            <NavbarItem targetId="testimonials">Testimonials</NavbarItem>
            <NavbarItem targetId="contact">Contact</NavbarItem>
          </ul>
        </div>
      )}
    </nav>
  );
};
