import { gsap } from 'gsap';
import '../Styles/Homepage.scss';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Homepage = () => {
  const homeSection = useRef(null);
  const ctaBtn = useRef(null);
  const headline = useRef(null);
  const loaderTitle = useRef(null);
  const nameHeadline = useRef(null);
  const loaderSubTitle = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });

    timeline
      .fromTo(
        loaderTitle.current,
        {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          delay: 0.5,
        }
      )
      .fromTo(
        loaderSubTitle.current,
        {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.in',
        },
        '-=0.5'
      )
      .to(
        loaderTitle.current,
        {
          duration: 1,
          opacity: 0,
          y: -50,
          ease: 'power3.out',
        },
        '+=1'
      )
      .to(
        loaderSubTitle.current,
        {
          duration: 1,
          opacity: 0,
          y: -50,
          ease: 'power3.out',
        },
        '-=0.5'
      );
  });

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        homeSection.current,
        {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }
      )
      .fromTo(
        headline.current,
        {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }
      )
      .fromTo(
        nameHeadline.current,
        {
          duration: 0.5,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .fromTo(
        ctaBtn.current,
        {
          duration: 0.5,
          opacity: 0,
          y: 50,
          ease: 'power3.in',
        },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }
      );
  });

  return loading ? (
    <div className="loader">
      <h1 className="logo" ref={loaderTitle}>
        Ayush Rameja
      </h1>
      <h1 className="title" ref={loaderSubTitle}>
        Web Developer • UI Designer
      </h1>
    </div>
  ) : (
    <div className="homepage">
      <Nav />
      <div ref={homeSection} className="landing-page">
        <div className="nav-spacing"></div>
        <div className="page-content">
          <div className="headline">
            <h1 ref={headline}>
              Creating<br></br>
              User Experience<br></br> <span className="yellow">Unique</span> &
              <span className="yellow"> Clean</span>
            </h1>
          </div>
          <div className="about">
            <div ref={nameHeadline} className="title">
              <h1>Ayush Rameja</h1>
              <p>Web Developer • UI Designer</p>
            </div>
            <div ref={ctaBtn} className="info-cta">
              <p>
                A creative developer with a proven track record of delivering
                unique and visually appealing websites and designs.
              </p>
              <div className="cta">
                <Link to="#contact">Let's Work</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
