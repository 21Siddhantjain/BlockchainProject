import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewCustomer from './components/NewCustomer'
import TrackCalorie from './components/TrackCalorie'
import Home from  './components/Home'
import Web3 from 'web3'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

function App() {

  return (
    <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewCustomer} />
      <Route exact path="/update" component={TrackCalorie} />
    </Router>
    </div>
  );
}

export default App;
