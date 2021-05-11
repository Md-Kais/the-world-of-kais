
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <Router>

      <Route>
        <HomePage></HomePage>

      </Route>
      {/* <Route path="/about">

        <About></About>
      </Route> */}
    </Router>


   







  );
}

export default App;
