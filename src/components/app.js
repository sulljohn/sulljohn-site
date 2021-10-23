import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import AOS from 'aos';
import NavBar from './navbar';
import Home from './home';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Artwork from './artwork';
import withTracker from './withTracker';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class App extends React.Component {
  // Loading state; source: https://stackoverflow.com/a/40989121
  state = {
    loading: true,
  };

  componentDidMount() {
    // Set state not loading anymore
    this.setState({ loading: false });

    // Start Animate on Scroll
    // Source: https://github.com/michalsnik/aos/issues/49
    AOS.init({
      startEvent: 'load',
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={withTracker(Home)} />
          <Route path="/home" component={withTracker(Home)} />
          <Route path="/about" component={withTracker(About)} />
          <Route path="/experience" component={withTracker(Experience)} />
          <Route path="/projects" component={withTracker(Projects)} />
          <Route path="/artwork" component={withTracker(Artwork)} />
          <Route render={() => (<div className="placeholder">Page Not Found</div>)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
