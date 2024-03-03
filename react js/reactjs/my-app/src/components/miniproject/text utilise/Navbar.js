import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      ><Link to="/" className="navbar-brand">{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link active btn" aria-current="page">{props.home}</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link">{props.Aboutus}</Link>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleclick}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
// Navbar.propTypes={
//   title:PropTypes.string,
//   home:PropTypes.string,
//   Aboutus:PropTypes.string
// }
