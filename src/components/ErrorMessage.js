import '../styles/error.scss';
import avatorImg from '../assets/error-avatar.png';

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <p>🧑‍💻 Website is under contruction</p>
          </div>
          <div className="avator">
            <div className="img">
              <img src={avatorImg} alt="Ayush Rameja" />
            </div>
            <h2>Ayush Rameja</h2>
            <p>Social Links</p>
          </div>
          <div className="button">
            <a href="https://www.linkedin.com/in/ayush-rameja-8042541b6/">
              LinkedIn
            </a>
            <a href="https://github.com/RamejaAyush">Github</a>
            <a href="https://drive.google.com/file/d/1Yvy-w19HRa1QRZIgnrkldeIszhY4Esm8/view?usp=sharing">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
