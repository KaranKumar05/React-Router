import './App.css';

import {Routes, Route, Navigate, Link} from 'react-router-dom';

//Importing Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/signup'}>Sing Up</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
