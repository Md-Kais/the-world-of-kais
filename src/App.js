
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import About from './Components/AboutPage/About/About';
import Switch from 'react-bootstrap/esm/Switch';
function App() {
  return (
  
     <Router>
  
      <Route>
        <HomePage></HomePage>

      </Route>
      <Route path="/about">

        <About></About>
      </Route>
    </Router>


  





  );
}

export default App;
