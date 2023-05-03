import './App.css';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">
     <Router>
     <Link to="/"></Link>
     <Routes>
     <Route exact path='/' element={<><Header /><Home /></>}></Route>
     <Route exact path='/login' element={<Login/>}></Route>
     <Route exact path='/checkout' element={<Checkout/>}></Route>
     <Route exact path='/checkout' element={<Checkout/>}></Route>
</Routes>
    </Router>
    </div>
  );
}

export default App;
