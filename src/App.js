import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Work from './pages/Work/Work';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portraits from './components/Portraits/Portraits';
import Fashion from './components/Fashion/Fashion';
import Flowers from './components/Flowers/Flowers';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Work}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/portraits' component={Portraits}></Route>
          <Route exact path='/fashion' component={Fashion}></Route>
          <Route exact path='/flowers' component={Flowers}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
