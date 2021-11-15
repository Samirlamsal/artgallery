import './App.css';
import Homepage from './pages/homepage';
import About from './pages/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/aboutme' element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
