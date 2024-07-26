import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
