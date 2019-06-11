import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import NavBar from './navbar'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Artwork from './artwork'

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = () => {
  return <div>URL Not Found</div>;
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

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
