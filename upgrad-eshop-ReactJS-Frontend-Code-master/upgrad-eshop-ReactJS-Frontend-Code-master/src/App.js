import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login signup/Login';
import Signup from './components/login signup/Signup';
import Products from './components/products/Products';
import Details from './components/details/Details';
import Orders from './components/orders/Orders';
import Admin from './components/admin/Admin';
import Thanks from './components/thanks/Thanks';
// import ProductState from './context/products/ProductState';

function App() {
  return (
    <>
      {/* <ProductState > */}

        <Router>

          <Navbar />

          <div className='container'>

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/products/details">
                <Details />
              </Route>
              <Route exact path="/orders">
                <Orders />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login/admin">
                <Admin />
              </Route>
              <Route exact path="/thanks">
                <Thanks />
              </Route>

            </Switch>
          </div>
        </Router>
      {/* </ProductState> */}

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

// final apk