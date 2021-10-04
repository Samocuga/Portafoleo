import Portafolio from './pages/Portafolio';
import Error404 from './pages/Error404';
import Home from './pages/home/Home';
import Educacion from './pages/Educacion';
import Aptitudes from './pages/Aptitudes';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      <Route path="/portafolio">
        <Portafolio/>
      </Route>
      <Route path="/educacion">
        <Educacion/>
      </Route>
      <Route path="/aptitudes">
        <Aptitudes/>
      </Route>
      <Route path="*">
        <Error404/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
