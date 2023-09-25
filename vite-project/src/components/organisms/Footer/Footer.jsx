import "./Footer.scss";
import footerLogo from "../../../assets/footer-logo.svg";
import footerGoogle from "../../../assets/footer-google.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import linkedin from "../../../assets/linkedin.svg";

const Footer = () => {
  const footerLogoText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const footerLinksText = "Links";
  const footerLinks = [
    "About Us",
    "Services",
    "Case Studies",
    "How it works",
    "Blog",
    "Careers",
    "Areas We Serve",
  ];
  const footerContactText = "Contact us";
  const footerContactUsText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const footerContactNr = "+908 89097 890";
  const copyright =
    "© 2023 Copyright by Agency Solutions. All rights reserved.";
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img src={footerLogo} alt="" />
          <p>{footerLogoText}</p>
          <img src={footerGoogle} alt="" />
        </div>
        <div className="footer__links">
          <h5>{footerLinksText}</h5>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contact">
          <h5>{footerContactText}</h5>
          <p>{footerContactUsText}</p>
          <p>{footerContactNr}</p>
        </div>
        <div className="social__media">
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={instagram} alt="" />
          </button>
          <button>
            <img src={twitter} alt="" />
          </button>
          <button>
            <img src={linkedin} alt="" />
          </button>
        </div>
      </div>
      <p className="copyright">{copyright}</p>
    </footer>
  );
};

export default Footer;
