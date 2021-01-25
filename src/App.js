import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Work from './pages/Work/Work';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Work}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
