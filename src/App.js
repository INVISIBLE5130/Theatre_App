import React, { Component } from 'react';
import './App.css';

import HomePage from './components/pages/HomePage';
import ActorsPage from './components/pages/ActorsPage';
import RolesPage from './components/pages/RolesPage';
import SchedulesPage from './components/pages/SchedulesPage';
import ClinicsPage from './components/pages/ShowsPage';
import DonationsPage from './components/pages/TheatersPage';
import TicketsPage from './components/pages/TicketsPage';
import VisitorsPage from './components/pages/VisitorsPage';
import WorkersPage from './components/pages/WorkersPage';

import { MoreHoriz, AddBox, Delete, Edit, Build } from '@material-ui/icons';

import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

  render() {

    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/actors"} component={ActorsPage}/>
            <Route exact path={"/roles"} component={RolesPage}/>
            <Route exact path={"/schedules"} component={SchedulesPage}/>
            <Route exact path={"/shows"} component={ClinicsPage}/>
            <Route exact path={"/theaters"} component={DonationsPage}/>
            <Route exact path={"/tickets"} component={TicketsPage}/>
            <Route exact path={"/visitors"} component={VisitorsPage}/>
            <Route exact path={"/workers"} component={WorkersPage}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
