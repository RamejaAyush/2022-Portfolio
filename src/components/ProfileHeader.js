import '../Styles/profile-header.scss';
import profileHeaderImg from '../assets/profile-header.png';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <img src={profileHeaderImg} alt="Ayush Rameja" />
      <h1>Ayush Rameja</h1>
      <a href="mailto:ayushrameja@gmail.com">ayushrameja@gmail.com</a>
    </div>
  );
};

export default ProfileHeader;
