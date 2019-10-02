import React from 'react'
import './about-page.css'
import FixedHeader from './../FixedHeader'
import Footer from './../Footer'


const AboutPage = () => {
    return (
        <React.Fragment>
            <FixedHeader/>
      
        <div className="light-slider our-gallery-section main-padding text-center">
            <div className="container">
                <h3 className="bold head-with-imgs">About <span className="black-color">Us</span> </h3>
                <h5 className="bold about-head">
                    Lorem Ipsum is simply dummy text Lorem Ipsum is simply Lorem Ipsum 
                </h5>
                <p className="about-prag">
                    lorem ispum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typsetting industry.
                    lorem ispum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typsetting industry.
                    lorem ispum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typsetting industry.
                </p>                
            </div>
        </div>


        <section className="our-mission main-padding">
            <div className="container">
                <h3 className="text-center bold head-with-imgs main-padding">Our <span className="black-color">Mission</span></h3>
                
                <p className="text-center">
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                </p>
            </div>
        </section>
       

        <section className="our-vision">
            <div className="container">
                <h3 className="text-center bold head-with-imgs main-padding">Our <span className="black-color">Vision</span></h3>
            
                <p className="text-center">
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                    Lorem Ipsum is simply dummy text lorem ipsum is simply Lorem Ipsum is simply dummy text lorem ipsum is simply 
                    Lorem Ipsum is simply dummy text lorem ipsum is simply
                </p>
            </div>
        </section>

        <Footer/>
        
        </React.Fragment>
    )
}


export default AboutPage