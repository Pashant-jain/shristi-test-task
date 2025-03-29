import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/AccountPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/account' element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
