import React, {Component} from 'react'
import Footer from './../Footer'



class ContactPage extends Component {

    state = {
        username : '', 
        email:'',
        mobile:'',
        textarea:''
    }

    handleUserChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMobileChange = (e) => {
        this.setState({
            mobile: e.target.value
        })
    }

    handleTextAreaChange = (e) => {
        this.setState({
            textarea: e.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        alert(`

            UserName => ${this.state.username}
            Email => ${this.state.email} 
            Mobile => ${this.state.mobile}
            TextArea => ${this.state.textarea}

        `)
    }

    render() {
        const {username, email, mobile, textarea} = this.state
        return(
            <React.Fragment>
                <section className="contact-us-section contact main-padding">
                    <div className="container">
                        <h3 className="text-center bold head-with-imgs">Contact <span className="black-color">Us</span></h3>

                        <div className="contact-box main-padding">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="imgs/contact/main-contact.png" alt="main-contact"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form">
                                            <form className="form-group" onSubmit={this.handleSubmit}>
                                                <p>{username}</p>
                                                <input onChange={this.handleUserChange} value={username} className="form-control" type="text" name="text" placeholder="Your Name" required/>
                                                <input onChange={this.handleEmailChange} value={email} className="form-control" type="email" name="email" placeholder="Your E-mail" required/>
                                                <input onChange={this.handleMobileChange} value={mobile} className="form-control" type="text" name="text" placeholder="Youe Mobile" required/>
                                                <label>Your Message</label>
                                                <textarea onChange={this.handleTextAreaChange} value={textarea} />
                                                <div className="same-button">
                                                    <button className="slider-more" type="submit">Send</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                        </div>       
                    </div>
                </section>

                <Footer/>
            </React.Fragment>
        )
    }
}

export default ContactPage