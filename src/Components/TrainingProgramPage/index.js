import React from 'react'
import Footer from '../Footer'


const ProgramPage = () => {
    return (
        <React.Fragment>

            <section className="courses-section main-padding">
                <div className="container">
                    <div className="course-box">

                        <div className="head-course">
                            <div className="heading">
                                <h6 className="bold">
                                    16 Courses
                                </h6>
                            </div>
                            <div className="selection">
                                
                                    <div className="main-select">
                                        <select id="select" className="custom-select">
                                            <option value="release date"> release date </option>
                                            <option value="Director"> Director </option>
                                            <option value="Manager"> Manager </option>
                                            <option value="CEO">CEO</option>
                                        </select>
                                    <span className="fa fa-chevron-down"></span>
                                </div>
                            
                            </div>
                        </div>

                        <div className="main-courses">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <a href="training-programs.html" target="_blank">
                                        <div className="img-box">
                                            <img className="img-fluid" src="imgs/services/services-one.png" alt="services-one"/>
                                        </div>          
                                    </a>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="content-course main-padding">
                                        <a href="training-programs.html" target="_blank">
                                            <h5 className="bold head">Graphic Design Tips &amp; Tricjs Weekly <span>with john McWade</span></h5>
                                        </a>
                                    
                                        <p className="prag">John McWade presents a blweekly series that touches on all areas of design. helping designers new and old shrpen their powerfil work.</p>
                                        <p className="second-p">8h 45m Appropriate for all Dec 14,2018 <span>Views 1,557,535</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-courses">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <a href="training-programs.html">
                                        <div className="img-box">
                                            <img className="img-fluid" src="imgs/slider/home-page-2.jpeg" alt="Images"/>
                                        </div>
                                    </a>                             
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="content-course main-padding">
                                        <a href="training-programs.html">
                                            <h5 className="bold head">Graphic Design Tips &amp; Tricjs Weekly <span>with john McWade</span></h5>
                                        </a>
                                        <p className="prag">John McWade presents a blweekly series that touches on all areas of design. helping designers new and old shrpen their powerfil work.</p>
                                        <p className="second-p">8h 45m Appropriate for all Dec 14,2018 <span>Views 1,557,535</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                
                
                        
                </div>
            </section>
            
            <Footer/>
        </React.Fragment>
    )
}

export default ProgramPage