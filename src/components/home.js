import Nav from './Nav';
import '../styles/home.scss';
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
          <a data-content="See My Work" href="#">
            See My Work
          </a>
          <a data-content="Contact Me" href="#">
            Contact Me
          </a>
        </div>
        <div className="headline">
          <div className="text-wrapper">
            <p>I Love to create</p>
            <p>
              <span className="dm">Unique</span> &{' '}
              <span className="dm">Appealing</span>
            </p>
            <p>Website and Designs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
