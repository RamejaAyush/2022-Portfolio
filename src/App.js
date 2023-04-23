import './Styles/Global.scss';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Links = lazy(() => import('./Pages/Links'));
const Homepage = lazy(() => import('./Pages/Homepage'));
const NotFound = lazy(() => import('./Pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/links" Component={Links} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
