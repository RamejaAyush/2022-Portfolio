import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Error from './components/ErrorMessage';
import Certificates from './components/Certificates';

function App() {
  const isAppDown = true;

  return (
    <Router>
      <>
        {isAppDown && <Navigate to="/error" />}
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
