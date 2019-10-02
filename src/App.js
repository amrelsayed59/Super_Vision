import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './Components/Header';
import Index from './Components/Index'
import ContactPage from './Components/ContactPage'
import AboutPage from './Components/AboutUsPage'
import BlogsPage from './Components/BlogsPage'
import OurMedia from './Components/OurMediaPage'
import WhyUs from './Components/WhyUsPage'
import ServicesPage from './Components/ServicesPage'
import EventsPage from './Components/EventsPage'
import ProgramPage from './Components/TrainingProgramPage'
import CreateAccount from './Components/CreateAccount'
import NoMatch from './Components/NoMatch'

 
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path='/' component={Index}/>
              <Route path='/contact' component={ContactPage}/>
              <Route path='/about-us' component={AboutPage}/>
              <Route path='/blogs' component={BlogsPage}/>
              <Route path='/our-media' component={OurMedia}/>
              <Route path='/why-us' component={WhyUs}/>
              <Route path='/services' component={ServicesPage}/>
              <Route path='/events' component={EventsPage}/>
              <Route path='/training-program' component={ProgramPage}/>
              <Route path='/create-account' component={CreateAccount}/>
              <Route path='/:test_params' component={NoMatch}/>
            </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
