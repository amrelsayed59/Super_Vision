import React from 'react';
import './events.css'

const Events = () => {
    return (
        <div className='testim'>
            <div className="overlay">
                <div className="container main-padding">

                    <h3 className="text-center bold head-with-imgs head-center"> <span className="black-color">Our Events</span></h3>
                    <div id="testim" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#testim" data-slide-to="0" className="active"></li>
                            <li data-target="#testim" data-slide-to="1"></li>
                            <li data-target="#testim" data-slide-to="2"></li>
                        </ol>
                        
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                                <div className="carousel-caption d-md-block">
                                    <div className="events-box text-center">

                                        <div className="events-date">
                                            <h2 className="number bold">25</h2>
                                            <p className="month bold">January</p>
                                            <p className="year bold">2018</p>
                                        </div>

                                        <div className="event-details">
                                            <h3 className="bold head">Lorem Ipsum is simply dummy text</h3>
                                            <p className="prag">
                                                Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim.sunt in culpa qui officia deserunt mollit anim.
                                            </p>
                                            <div className="same-button">
                                                <a className="slider-more main-color" href="events-details.html">Get Tickets</a> 
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="carousel-item">
                                <div className="carousel-caption d-md-block">
                                    <div className="events-box text-center">

                                        <div className="events-date">
                                            <h2 className="number bold">25</h2>
                                            <p className="month bold">January</p>
                                            <p className="year bold">2018</p>
                                        </div>

                                        <div className="event-details">
                                            <h3 className="bold head">Lorem Ipsum is simply dummy text</h3>
                                            <p className="prag">
                                                Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim.sunt in culpa qui officia deserunt mollit anim.
                                            </p>
                                            <div className="same-button">
                                                <a className="slider-more main-color" href="events-details.html" target="_blank">Get Tickets</a> 
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="carousel-item">       
                                <div className="carousel-caption d-md-block">
                                    <div className="events-box text-center">

                                        <div className="events-date">
                                            <h2 className="number bold">25</h2>
                                            <p className="month bold">January</p>
                                            <p className="year bold">2018</p>
                                        </div>

                                        <div className="event-details">
                                            <h3 className="bold head">Lorem Ipsum is simply dummy text</h3>
                                            <p className="prag">
                                                Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim.sunt in culpa qui officia deserunt mollit anim.
                                            </p>
                                            <div className="same-button">
                                                <a className="slider-more main-color" href="events-details.html">Get Tickets</a> 
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
            
                </div>

            
                <a className="carousel-control-prev" href="#testim" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                        
                <a className="carousel-control-next" href="#testim" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        
            </div>
        </div>	
    )
}


export default Events