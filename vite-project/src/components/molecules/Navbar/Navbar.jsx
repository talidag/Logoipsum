import "./Navbar.scss";
import NavEl from "../../atoms/NavEl/NavEl";
import { useEffect, useState, useRef } from "react";
import logo from "../../../assets/logo-name.svg";
import Button from "../../atoms/Button/Button";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const navbarRef = useRef(null); // to get the height of the navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts to prevent memory leaks

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling with offset
  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    setClickedItem(targetId);
    if (targetSection) {
      const navbarHeight = navbarRef.current.clientHeight;

      setTimeout(() => {
        const targetPosition = targetSection.offsetTop - navbarHeight;
        window.scrollTo({
          // For better view of services
          top: targetId === "services" ? targetPosition - 90 : targetPosition,
          behavior: "smooth",
        });
      }, 50); // Adding a setTimeout because of visual issue
    }
  };

  const navLinks = [
    "Services",
    "About Us",
    "Case Studies",
    "Blog",
    "How it Works",
    "Hire",
  ];

  return (
    <nav className={hasScrolled ? "nav scrolled" : "nav"} ref={navbarRef}>
      <div className="nav__logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav__links">
        {navLinks.map((navEl, index) => (
          <NavEl
            link={navEl}
            key={index}
            onClick={() =>
              scrollToSection(navEl.toLowerCase().replace(/ /g, "-"))
            }
            clickedItem={clickedItem === navEl.toLowerCase().replace(/ /g, "-")}
          />
        ))}
      </div>
      <Button text="Contact us" className="btn-gradient" />
    </nav>
  );
};

export default Navbar;
