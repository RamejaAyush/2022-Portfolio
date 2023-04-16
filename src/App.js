import './styles/app.scss';
import './styles/loco.css';
import { gsap } from 'gsap';
import Home from './components/Home';
import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const logo = useRef(null);
  const loaderRef = useRef(null);
  const mainContentRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
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
      ) : (
        <Home ref={mainContentRef} />
      )}
    </div>
  );
};

export default App;
