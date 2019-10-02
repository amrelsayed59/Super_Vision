import React from 'react'


const TrainingPrograms = () => {
    return(
        <section className="training-program main-padding">
            <div className="container">
                <h3 className="text-center bold head-with-imgs">Training <span className="black-color">Programs</span></h3>

                <div className="training-box main-padding">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="training-img">
                                <img src="imgs/contact/contact.jpg" alt="contactprogram"/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="training-details">
                                <h4 className="bold head">Lorem Ipsum is simply dummy text of lorem ipsum is simply</h4>
                                <p className="prag">
                                    I began attending this CrossFit and fitness studio just few months after my pregnancy ended. I still had an extra weight problem then. 
                                    But coaches helped me to bounce back and get to top of my physical shape again! I'm so gratefull!
                                </p>
                                <h4 className="bold head">Plans</h4>
                                <ul className="list-unstyled bold plans">
                                    <li>Lorem Ipsum is simply dummy text of lorem ipsum is simply</li>
                                    <li>Lorem Ipsum is simply dummy text of lorem ipsum is simply</li>
                                    <li>Lorem Ipsum is simply dummy text of lorem ipsum is simply</li>
                                </ul>
                                <h4 className="bold head">Targted</h4>

                                <ul className="list-unstyled targted">
                                    <li>
                                        <div className="img-box">
                                            <img src="imgs/icons/icon-12.png" alt="con1"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src="imgs/icons/icon-13.png" alt="con2"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src="imgs/icons/icon-14.png" alt="con3"/>
                                        </div>
                                    </li>
                                </ul>

                                <div className="same-button">
                                    <a className="slider-more main-color" href="#">See More</a> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TrainingPrograms