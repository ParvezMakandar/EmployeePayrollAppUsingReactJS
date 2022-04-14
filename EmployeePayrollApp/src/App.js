import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import PayrollForm from "./components/pages/PayrollForm";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from './components/pages/NotFound';
import Adduser from './components/users/Adduser';

import EditUser from "./components/users/Edituser";
import User from "./components/users/Users";


function App() {
  return (
    
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={PayrollForm} />
        <Route exact path="/users/add" component={Adduser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
