import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components/common/heading/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Crops } from './components/crops/Crops';
import { Fertilizers } from './components/fertilizers/Fertilizers';
import  Weathercomp  from './components/weather/Weathercomp';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/crops" exact component={Crops}/>
          <Route path="/fertilizers" exact component={Fertilizers}/>
          <Route path="/weather" exact component={Weathercomp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
