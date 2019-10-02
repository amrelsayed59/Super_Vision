import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {OurServicesSec, ServHead, Box, BoxImgBox, Image, BoxPrag} from './services.js'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then(res => {setServices(res.data.services)})
    }, [])

    const AllServices = services.map( (servItem) => {
        return (
           
            <div key={servItem.id} className="col-lg-4 col-md-12">
                <Box className="text-center">
                    <BoxImgBox>
                        <Image src={servItem.Icon} alt="icon1"/>
                    </BoxImgBox>
                    <ServHead className="bold">{servItem.HeadServ}</ServHead>
                    <BoxPrag>{servItem.ContentServ}</BoxPrag>
                </Box>
            </div>  
                
        )
    })

    return (
       
        <OurServicesSec className="main-padding">
            <div className="container">
                <h3 className="text-center bold">Our <span className="black-color">Services</span></h3>

                    <div className="row main-padding">
                    
                      
                            {AllServices}
                        
                                
                    </div>

                    <div className="same-button text-center">
                        <a className="slider-more main-color" href="#">See More</a> 
                    </div>

            </div>
        </OurServicesSec>
       
    )
}


export default Services