import React, {useState, useEffect} from 'react'
import FixedHeader from '../FixedHeader'
import Footer from '../Footer'
import axios from 'axios'

const ServicesPage = () => {

    const [Services, setServices] = useState([])
    
    useEffect( () =>{
        axios.get('js/data.json').then(res =>{setServices(res.data.servicesPage)})
    }, [])

    const AllServices = Services.map( (servItem) =>{
        return (
            <div key={servItem.id} className="services-box">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={servItem.Image} alt="service-one"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content-services">
                            <h5 className="bold">{servItem.Heading}</h5>
                            <p>{servItem.Content}</p>
                        </div>
                    </div>   

                    <div className="col-md-6">
                        <div className="content-services">
                            <h5 className="bold">{servItem.Heading}</h5>
                            <p>{servItem.Content}</p>
                        </div>
                    </div>  

                     <div className="col-md-6">
                        <div className="img-box">
                            <img src={servItem.Image} alt="service-one"/>
                        </div>
                    </div> 
                </div>
            </div>
        )
    })

    return(
        <React.Fragment>
            <FixedHeader/>
            <div className="our-services-section ">
                <div className="container">
                    <h3 className="text-center bold head-with-imgs main-padding">Our <span className="black-color">Services</span></h3>
                    {AllServices}
                </div>
            </div>

            <Footer/>
        </React.Fragment>

        
    )
}

export default ServicesPage