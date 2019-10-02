import React from 'react'
import  './contact.css'

const ContactUs = () => {
    return (
        <div className="contact-us  border-bottom">
            <div className="overlay">
                <div className="container">
                    <h2 className="text-center">Contact Us</h2>
                    <div className="main-form">
                        <form className="form-group">
                            <input className="form-control" type="text" name="text" placeholder="Name" required/>
                            <input className="form-control" type="emai" name="email" placeholder="Email" required/>
                            <input className="form-control" type="text" name="text" placeholder="Mobile"/>
                            <div className="textarea">
                                <label>Your Message</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="submit-button text-center">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactUs