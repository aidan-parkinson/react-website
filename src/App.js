import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Introduction from './components/introduction';
import Insight from './components/insight';

function App() {

  const containerStyle = {
    margin: "auto",
    maxWidth: "997px",
    textAlign: "center",
  };

  return (
    <Router>
      <div class="app-container">
        <div style={containerStyle}>
          <div>
            <nav class="navbar navbar-expand-lg flex-column align-items-stretch">
              <div class="d-flex">
                  <a href="#" class="navbar-brand mx-sm-auto mr-auto">Aidan Thomas Parkinson BEng(Hons) MSc PhD CEng</a>
              </div>
              <ul className="navbar-nav">
                <li class="nav-item">
                  <Link to="/" class="nav-link-1">Introduction</Link>
                </li>
                <li class="nav-item">
                  <Link to="/insight" class="nav-link-2">Insight</Link>
                </li>
                <li class="nav-item">
                  <a href="http://learning.aidanparkinson.xyz/" class="nav-link-3">Executive Education</a>
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
