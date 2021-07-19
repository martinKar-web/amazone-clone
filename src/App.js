import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Render the header regardless */}
        <Header />
        
        {/* Based on the route, render
            the Home or checkout component */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          
          {/* When am at the home page
              render the Header & Home 
              component */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
