import React, {useState, useEffect} from 'react'
import FixedHeader from '../FixedHeader'
import axios from 'axios'
import Footer from '../Footer'

const WhyUs = () => {

    const [WhyUs, setWhyUs] = useState([]);
    
    useEffect( () => {
        axios.get('js/data.json').then(res => {setWhyUs(res.data.whyus) })
    }, [])

    const AllWhyUs = WhyUs.map( (WhyUsItem)=> {

        return (
            <React.Fragment key={WhyUsItem.id}>
                <div className="col-lg-4 col-sm-12">
                    <div className="box text-center">
                        <div className="img-box">
                            <img src={WhyUsItem.Image} alt="icon-1"/>
                        </div>
                        <h5 className="bold">{WhyUsItem.Heading}</h5>
                        <p>{WhyUsItem.Content}</p>
                    </div>
                </div>
            </React.Fragment>
            
        )
    })


    const [OurPartner, setOurPartner] = useState([]);
    
    useEffect( () => {
        axios.get('js/data.json').then(res => {setOurPartner(res.data.ourPartner) })
    }, [])

    const AllOurPartner = OurPartner.map( (OurPartnerItem)=> {

        return (
            <React.Fragment key={OurPartnerItem.id}>
               <div class="col-md-3 shadow-box">
                    <div class="img-box">
                        <img src={OurPartnerItem.Image} alt="Logo" />
                    </div>
                </div>
            </React.Fragment>
            
        )
    })
    

    return (
        <React.Fragment>
            <FixedHeader/>
            
            <section className="why-us-feature">
                <div className="container">
                    <h3 className="text-center bold head-with-imgs">Our <span className="black-color">Services</span></h3>
                    <p className="text-center bold main-prag">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                    <div className="row">
                        {AllWhyUs}
                    </div>
                </div>
            </section>
                
            <div className="second-testim testim-whyus text-center">
                <div className="container main-padding">
                    <h3 className="text-center bold head-with-imgs main-padding"> Testimonials<span className="black-color"></span></h3>
                    <div id="testim" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#testim" data-slide-to="0" class="active"></li>
                            <li data-target="#testim" data-slide-to="1"></li>
                            <li data-target="#testim" data-slide-to="2"></li>
                        </ol>
                        
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                                <div className="carousel-caption d-md-block">
                                    <div className="whyus-box text-center">
                                        <div className="img-box">
                                            <img className="" src="imgs/Doctors/team.png" alt="Profile-1"/>
                                        </div>
                                        <div className="whyus-content">
                                            <h5 className="bold head">Lorem Ipsum is simply</h5>
                                            <p className="prag">
                                                Excepteur sint occaecat cupidatat non proident, 
                                                sunt in culpa qui officia deserunt mollit anim 
                                                Lorem Ipsum is simply dummy text.
                                            </p>
                                            <h5 className="bold name">Amr Ahmed</h5>
                                            <p className="position">Fron End Developer</p>
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                            
                            <div className="carousel-item">
                                <div className="carousel-caption d-md-block">

                                    <div className="whyus-box text-center">
                                        <div className="img-box">
                                            <img className="" src="imgs/Doctors/team.png" alt="Profile-2"/>
                                        </div>
                                        <div className="whyus-content">
                                            <h5 className="bold head">Lorem Ipsum is simply</h5>
                                            <p className="prag">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                                            <h5 className="bold name">Amr Ahmed</h5>
                                            <p className="position">Fron End Developer</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="carousel-item">       
                                <div className="carousel-caption d-md-block">

                                    <div className="whyus-box text-center">
                                        <div className="img-box">
                                            <img className="" src="imgs/Doctors/team.png" alt="Profile-3"/>
                                        </div>
                                        <div className="whyus-content">
                                            <h5 className="bold head">Lorem Ipsum is simply</h5>
                                            <p className="prag">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                                            <h5 className="bold name">Amr Ahmed</h5>
                                            <p className="position">Fron End Developer</p>
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

            <section className="our-partner main-padding">
                <div className="container">
                    <h3 className="text-center bold head-with-imgs main-padding"> Our  <span className="black-color">Partner</span></h3>
                    <div className="main-our-partner">
                        <div className="row">
                            {AllOurPartner}
                        </div>
                    </div>
                </div>
            </section>
        
            <Footer/>
        </React.Fragment>
    )
}
export default WhyUs
