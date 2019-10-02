import React from 'react'
//import axios from 'axios'
//import {} from './styles'




const Slider = () => {

    /*
    const [sliders, setSliders] = useState([])
    useEffect( () => {
        axios.get('js/data.json').then(res => {setSliders(res.data.Slider) })
    }, [])
    const AllSlider = sliders.map( (sliderItem) => {})
    */


    return (
  


            <section className="slider first-slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">

                            <div className="content-slider">
                                <div className="header-box">
                                    <h4 className="bold">Lorem Ipsum is simply dummy test of the printing</h4>
                                    <p>Lorem ipsum is simply dummy test of the printing Lorem ipsum is simply dummy test of the printing</p>

                                    <div className="same-button">
                                        <a className="slider-more main-color" href="#">Learn More</a> 
                                    </div>

                                </div>
                                
                            </div>
                            

                            <div className="overlay"></div>
                            <img className="d-block img-fluid" src="imgs/slider/home-page-1.jpg" alt="slider-1" />

                        </div>
            
                        <div className="carousel-item">

                                <div className="content-slider">

                                    <div className="header-box">
                                        <h4 className="bold">Lorem Ipsum is simply dummy test of the printing</h4>
                                        <p>Lorem ipsum is simply dummy test of the printing Lorem ipsum is simply dummy test of the printing</p>

                                        <div className="same-button">
                                            <a className="slider-more main-color" href="#">Learn More</a> 
                                        </div>

                                    </div>
                                    
                                </div>

                                
                                    

                                <div className="overlay"></div>
                                <img className="d-block img-fluid" src="imgs/slider/home-page-2.jpeg" alt="slider-2" />

                        </div>

                        <div className="carousel-item">
                            <div className="content-slider">

                                    <div className="header-box">
                                        <h4 className="bold">Lorem Ipsum is simply dummy test of the printing</h4>
                                        <p>Lorem ipsum is simply dummy test of the printing Lorem ipsum is simply dummy test of the printing</p>

                                        <div className="same-button">
                                            <a className="slider-more main-color" href="#">Learn More</a> 
                                        </div>

                                    </div>

                            </div>
                                    

                            <div className="overlay"></div>
                            <img className="d-block img-fluid" src="imgs/slider/home-page-3.jpg" alt="slider-3" />

                        </div>
                    
                    </div>

                    
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

                        <span className="chevron" aria-hidden="true">
                            <i className="fa fa-chevron-left fa-lg"></i>
                        
                        </span>
                        <span className="sr-only">Previous</span>
                    </a> 
                    
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">

                        <span className="chevron" aria-hidden="true">
                        
                            <i className="fa fa-chevron-right fa-lg"></i>

                        </span>

                        <span className="sr-only">Next</span>
                    </a> 

                </div>

            </section>
            
        
    )
}

export default Slider