import React, {useState, useEffect,} from 'react'
import axios from 'axios'
import Footer from '../Footer'

const EventsPage = () => {

    const [events, setEvents] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then(res => { setEvents(res.data.event) })
    }, [] )

    const AllEvents = events.map( (eventItem) => {
        return (
                <React.Fragment key={eventItem.id}>
                    <div className="col-sm-6">
                        <div className="events-box">
                            <div className="img-box">
                                <img src={eventItem.Image} alt="event"/>
                            </div>
                            <div className="events-details">  
                                <div className="events-time">
                                    <p className="number">
                                            {eventItem.Number}
                                    </p>
                                    <p className="month">
                                        {eventItem.Month}                                               
                                    </p>
                                    <p className="date">
                                        {eventItem.Date}
                                    </p>
                                </div>
                                <div className="events-content">
                                    <h5 className="bold">{eventItem.HeadEvent}</h5>
                                    <p className="">{eventItem.Content}</p>
                                    <div className="same-button">
                                        <a className="slider-more main-color" href="events-details.html" target="_blank">Get Tickets</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })


        return (
            <React.Fragment>           
                <section className="second-our-events main-padding">
                    <div className="container">
                        <h3 className="text-center bold head-with-imgs main-padding">Our <span className="black-color">Events</span></h3>
                        <div className="main-events">
                            <div className="row">
                                {AllEvents}
                            </div>        
                        </div>
                    </div>
                </section>
                <Footer/>
            </React.Fragment>
        )
}

export default EventsPage