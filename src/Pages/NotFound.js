import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Error 404: Not Found</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
