import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// function AppRouter() {
class AppRouter extends Component{
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
              <Link to="/users/" className="llaaal"><Button>Users</Button></Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}
  
// }
export default AppRouter;