import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FixedHeader = () =>  {

    const [fixed, setFixed] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then(res => {setFixed(res.data.fixedHead)})
    }, [])

    const AllFixedHeader = fixed.map( (fixedItem) => {
        return (
            
            <div key={fixedItem.id} className="carousel-item active">
                    <div className="content-slider"></div>
                    <img className="d-block" src={fixedItem.Image} alt="tickets" />
            </div> 
        )
    })

    return (
        <section className="slider first-slider">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {AllFixedHeader}
                </div>
            </div>
        </section>
    )
} 

export default FixedHeader