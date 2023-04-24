import '../Styles/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="#">A</Link>
        </div>
        <div className="nav-links">
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
          <Link to="/links">Links</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
