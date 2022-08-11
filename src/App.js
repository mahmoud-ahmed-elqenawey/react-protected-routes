import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import PrivetRoutes from './utilities/PrivetRoutes';

function App() {
    return (
        <div className='App'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='login'>Login</Link>
                </li>
            </ul>
            <Routes>
                <Route element={<PrivetRoutes />}>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                </Route>
                <Route path='login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
