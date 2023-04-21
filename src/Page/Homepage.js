import { gsap } from 'gsap';
import '../Styles/app.scss';
import Home from '../Components/Home';
import { Link } from 'react-router-dom';
import upgradingEmo from '../assets/upgrading.gif';
import ProfileHeader from '../Components/ProfileHeader';
import React, { useEffect, useRef, useState } from 'react';

const Homepage = () => {
  const logo = useRef(null);
  const underMaintenance = true;
  const loaderRef = useRef(null);
  const mainContentRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      },
    });

    timeline
      .fromTo(
        logo.current,
        {
          duration: 0.5,
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          scale: 1.2,
        }
      )
      .to(
        loaderRef.current,
        {
          duration: 0.5,
          backgroundColor: '#000000',
          ease: 'power2.out',
        },
        '+=0.5'
      )
      .to(
        logo.current,
        {
          duration: 0.1,
          y: 50,
          opacity: 0,
          scale: 0.8,
          ease: 'power2.out',
        },
        '+=0.5'
      )
      .from('.home', {
        opacity: 0,
        duration: 0.1,
        y: -10,
        ease: 'power2.out',
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader" ref={loaderRef}>
          <h1 ref={logo}>AXU</h1>
        </div>
      ) : underMaintenance ? (
        <div className="under-maintenance">
          <div className="um-wrapper">
            <ProfileHeader />
            <div className="status">
              <h1>I'm upgrading 😏</h1>
              <img src={upgradingEmo} alt="Upgrading" />
            </div>
            <div className="btns">
              <Link data-content="Mail" to="mailto:ayushrameja@gmail.com">
                Mail
              </Link>
              <Link data-content="Links" to="links">
                Links
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Home ref={mainContentRef} />
      )}
    </div>
  );
};

export default Homepage;
