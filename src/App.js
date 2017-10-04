import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Banner from './Banner';
import SideNav from './SideNav';
import TemplateContainer from './TemplateContainer';
import QueryBuilder from './QueryBuilder';
import SolutionBuilder from './SolutionBuilder';
import DashboardContainer from './DashboardContainer';
import NotFound from './NotFound';
import ModalHolder from './ModalHolder';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <ModalHolder/>
        <div className="container-fluid">
          <Router>
            <div>
              <SideNav />
              <Switch>
                    <Route exact path="/" component={DashboardContainer}/>
                    <Route exact path="/template" component={TemplateContainer}/>
                    <Route path="/querybuilder" component={QueryBuilder}/>
                    <Route path="/solution" component={SolutionBuilder}/>
                    <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
