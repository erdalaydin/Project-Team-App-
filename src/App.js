import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar'
import { BrowserRouter, Switch , Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Projects/ProjectDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp  from './Components/Auth/SignUp'
import CreateProject from './Components/Projects/CreateProject'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/createproject' component={CreateProject}></Route>

        </Switch>
      </div>
    </BrowserRouter>
   );
  }
}

export default App;
