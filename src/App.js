import './App.css';
import Homepage from './pages/homepage';
import About from './pages/about';
import Gallery from './pages/gallery';
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
          <Route exact path="/gallery/:id" element={<Gallery />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
