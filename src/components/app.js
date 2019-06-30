import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Artwork from './artwork';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/artwork" component={Artwork} />
        <Route render={() => (<div className="placeholder">Page Not Found</div>)} />
      </Switch>
    </Router>
  );
};

export default App;
