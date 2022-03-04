import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/register/register.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
