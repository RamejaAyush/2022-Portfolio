import './Styles/app.scss';
import Links from './Components/Links';
import Homepage from './Page/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route path="/links" Component={Links} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
