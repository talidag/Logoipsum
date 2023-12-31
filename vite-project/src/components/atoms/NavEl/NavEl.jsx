import "./NavEl.scss";

const NavEl = ({ link, onClick, clickedItem }) => {
  return (
    <li>
      <a
        href="#"
        onClick={onClick}
        className={`nav__anchor ${clickedItem ? "active" : ""}`}
      >
        {link}
      </a>
    </li>
  );
};

export default NavEl;
