import './App.css';
import Homepage from './pages/homepage';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
