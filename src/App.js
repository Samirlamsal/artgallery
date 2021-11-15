import './App.css';
import Homepage from './pages/homepage';
import About from './pages/about';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
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
