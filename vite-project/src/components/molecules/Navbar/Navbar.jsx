import NavEl from "../../atoms/NavEl/NavEl";
import "./Navbar.scss";
import logo from "../../../assets/logo-name.svg";

const Navbar = () => {
  const navLinks = [
    "About Us",
    "Services",
    "Case Studies",
    "Blog",
    "How it Works",
    "Hire",
  ];
  return (
    <nav>
      <div className="nav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav__links">
        {navLinks.map((navEl, index) => (
          <NavEl link={navEl} key={index} />
        ))}
      </div>
      <div className="nav__button">
        <button>Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
