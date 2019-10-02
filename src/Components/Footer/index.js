import React from 'react'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-sm-3">
                        <div className="content-one">
                            <a href="#">
                                <div className="img-box">
                                    <img src="imgs/logo.png" alt="" />
                                </div>
                            </a>
                         
                            <div className="map-box">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3610.1786539269137!2d55.27218771459475!3d25.197196983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1482638534378" width="100%" height="100%" frameBorder="0"></iframe>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-3">
                        <div className="content-two">
                            <h4 className="bold">Quck Links</h4>
                            <ul className="list-unstyled">
                                <a href="about-us.html">
                                    <li>About Us</li>
                                </a>
                                
                                <a href="services.html">
                                    <li>Services</li>
                                </a>
                                <a href="procedures.html">
                                    <li>Specialties</li>
                                </a>
                                <a href="faqs.html">
                                    <li>Faq's</li>
                                </a>
                                <a href="make-appointment.html">
                                    <li>Appointment</li>
                                </a>
                                <a href="contact.html">
                                    <li>Contact</li>
                                </a>
                            </ul>
                        </div>
                    
                    </div>
                    
                    <div className="col-sm-3">
                        <div className="content-three">
                            <h4 className="bold">News letter</h4>
                           <p className="bold">Sign up our news letter and be updated about us.</p>
                           <form>
                               <div className="text-box">
                                    <input className="form-control" type="email" name="email" placeholder="Your E-mail" required />
                               </div>

                               <div className="submit-button">
                                    <button  type="submit">Submit</button>     
                               </div>

                           </form>
                        </div>
                    
                    </div>
                                 
                    <div className="col-sm-3">
                        <div className="content-four">
                            <h4 className="bold">Contact Us</h4>

                            <ul className="list-unstyled content-details">
                                <li>
                                    <i className="fa fa-mobile-phone fa-lg fa-fw"></i>
                                    <span className="bold">0114799169</span>
                                </li>

                                <li>
                                    <i className="fa fa-map-marker fa-lg fa-fw"></i>
                                    <span className="bold">Egypt, Cairo, Nasr City</span>
                                </li>

                                <li>
                                    <i className="fa fa-envelope fa-lg fa-fw"></i>
                                    <span className="bold">info@DoctorCenter.com</span>
                                </li>

                            </ul>

                           <div className="social-icons">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square fa-lg fa-fw"></i> 
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter-square fa-lg fa-fw"></i> 
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus-square fa-lg fa-fw"></i> 
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin-square fa-lg fa-fw"></i> 
                                        </a>
                                    </li>
    
                                </ul>
                           </div>

                        </div>
                    
                    </div>
                
                </div>
            
            </div>

            <div className="copy text-center">
                .CopyRight 2018 All Rights Reserved
            </div>
        </section>
    )
}

export default Footer