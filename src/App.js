import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Introduction from './components/introduction';
import Insight from './components/insight';

function App() {

  const headerStyle = {
    margin: "20px",
  };

  const divStyle = {
    background: "#F6FAF8",
    padding: "10px",
    width: "100%",
    height: "100%",
    overflowX: "auto",
    display: "flex",
    justifyContent: "centre"
  };

  const listStyle = {
    whiteSpace: "nowrap"
  }

  const containerStyle = {
    margin: "auto"
  }

  return (
    <Router>
      <div style={divStyle}>
        <div style={containerStyle}>
          <header style={headerStyle}>
          </header>
          <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Aidan Thomas Parkinson BEng(Hons) MSc PhD CEng MCIBSE</span>
                <ul className="navbar-nav" style={listStyle}>
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Introduction</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/insight" class="nav-link">Insight</Link>
                  </li>
                  <li class="nav-item">
                    <a href="http://learning.aidanparkinson.xyz/" class="nav-link">Executive Education</a>
                  </li>
                </ul>
            </nav>
          </div>
          <Switch>
              <Route exact path='/' component={Introduction} />
              <Route exact path='/insight' component={Insight} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
