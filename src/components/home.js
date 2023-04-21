import Nav from './Nav';
import '../Styles/home.scss';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/image.png';

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="header">
          <h1>AXU</h1>
        </div>
        <div className="profile-photo">
          <img src={profilePhoto} alt="Ayush Rameja" />
        </div>
        <div className="btns">
          <Link data-content="See My Work" to="#">
            See My Work
          </Link>
          <Link data-content="Contact Me" to="#">
            Contact Me
          </Link>
        </div>
        <div className="headline">
          <div className="text-wrapper">
            <p>I Love to create</p>
            <p>
              <span className="dm">Unique</span> &{' '}
              <span className="dm">Appealing</span>
            </p>
            <p>Websites and Designs</p>
          </div>
        </div>
        <div className="introduction">
          <h1>
            Hi, I'm <span className="bold">Ayush Rameja</span>, Currently
            working as a <span className="bold">Web Developer </span>
            at <span className="bold">Accenture.</span> I've{' '}
            <span className="bold">3+ years</span> of Industrial experience in
            Web Development and UI/UX with companies like{' '}
            <span className="bold">Google, CHUBB, Nokia </span>
            and many more.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
