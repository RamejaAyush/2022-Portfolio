import { gsap } from 'gsap';
import '../Styles/Homepage.scss';
import { useEffect, useRef, useState } from 'react';

const Homepage = () => {
  const loaderTitle = useRef(null);
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
          ease: 'power3.out',
          delay: 0.5,
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
          delay: 0.5,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.in',
          delay: 0.5,
        },
        '-=1.5'
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
      <h2>Homepage</h2>
    </div>
  );
};

export default Homepage;
