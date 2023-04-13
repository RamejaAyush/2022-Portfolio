import '../styles/home.scss';
import imagesLoaded from 'imagesloaded';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const Home = () => {
  const content = useRef();
  const headingText = useRef();
  const loadingScreen = useRef();

  const timeline = gsap.timeline({});

  useLayoutEffect(() => {
    const imgloaded = imagesLoaded(content);

    imgloaded.on('done', (instance) => {
      console.log('content loaded');

      timeline
        .from(headingText.current, {
          duration: 0.5,
          scale: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'power4.out',
        })
        .to(headingText.current, {
          duration: 0.5,
          opacity: 0,
          y: -50,
          ease: 'power4.out',
        })
        .to(loadingScreen.current, { duration: 3, opacity: 0 });

      timeline.play();
    });
  });

  return (
    <>
      <div className="loading-page" ref={loadingScreen}>
        <h1 className=".logo" ref={headingText}>
          AXU
        </h1>
      </div>
      <div className="home-container" ref={content}>
        <div className="landing-page">
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
