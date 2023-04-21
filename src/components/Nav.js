import '../Styles/nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <Link to="#">home</Link>
        <Link to="#projects">projects</Link>
        <Link to="#contact">contacts</Link>
        <Link to="/links">Links</Link>
      </div>
    </nav>
  );
};

export default Nav;
