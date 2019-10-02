import React, { Component } from 'react';

import Slider from './../Slider'
import Services from './../Services'
import Events from './../Events'
import TrainingPrograms from './../TrainingProgramgs'
import ContactUs from './../ContactUs'
import Footer from './../Footer'



class Index extends Component {
  render() {
    return (
      <div>
       
        <Slider/>
        <Services/>
        <Events/>
        <TrainingPrograms />
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default Index;
