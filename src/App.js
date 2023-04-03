import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import Offers from './pages/Offers';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/ForgotPass' element={<ForgotPass />} />
          <Route path='/Offers' element={<Offers/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
