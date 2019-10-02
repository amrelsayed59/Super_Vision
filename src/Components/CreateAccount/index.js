import React, {Component} from 'react'
import './account.css'


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formError, ...rest }) => {
    let valid = true;

    //validate the form errors being empy
    Object.values(formError).forEach(val => {
        val.length > 0  && (valid = false);
    });

    // validate the from was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class CreateAccount extends Component {

    state ={
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formError: {
            firstName: "",
            lastName: "",
            email:"",
            password:""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if(formValid(this.state)) {
            alert(`
                --SUBMITTING--
                First Name: ${this.state.firstName}
                Last Name: ${this.state.lastName}
                Email: ${this.state.email}
                Password: ${this.state.password}    
            `)
        } else {
            alert('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        let formError = this.state.formError;

        switch(name) {
            case 'firstName':
                formError.firstName = 
                value.length < 3 ? 'minimum 3 charachters required' : "";
                break;
            case 'lastName':
                formError.lastName = 
                value.length < 3 ? 'minimum 3 charachters required' : "";
                break;
            case 'email':
                formError.email = 
                emailRegex.test(value) && value.length > 0 
                ? "" 
                :"invalid email address";
                break;
            case 'password':
                formError.password = 
                value.length < 6  ? 'minimum 6 charachters required' : "";
                break;
            
            default: 
            break;

        }

        this.setState({
            formError, [name]: value
        }, () => console.log(this.state))
    }

    render() {
        const {formError} = this.state
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="firstName">
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                        className={formError.firstName.length > 0 ? "error" : null} 
                                        placeholder="First Name"  
                                        type="text" 
                                        name="firstName" 
                                        noValidate
                                        onChange={this.handleChange}
                                        required
                                        />
                                        {formError.firstName.length > 0 && (
                                            <span className="errorMessage">{formError.firstName}</span>
                                        )}
                                </div>

                                <div className="lastName">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input 
                                        className={formError.lastName.length > 0 ? "error" : null} 
                                        placeholder="Last Name"  
                                        type="text" 
                                        name="lastName" 
                                        noValidate
                                        onChange={this.handleChange}
                                        />
                                        {formError.lastName.length > 0 && (
                                            <span className="errorMessage">{formError.lastName}</span>
                                        )}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="email">
                                <label htmlFor="email">Email</label>
                                <input  
                                    className={formError.email.length > 0 ? "error" : null}
                                    placeholder="Email"  
                                    type="email" 
                                    name="email" 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formError.email.length > 0 && (
                                        <span className="errorMessage">{formError.email}</span>
                                    )}
                            </div>

                                <div className="password">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className={formError.password.length > 0 ? "error" : null}
                                    placeholder="Password"  
                                    type="password" 
                                    name="password" 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formError.password.length > 0 && (
                                        <span className="errorMessage">{formError.password}</span>
                                    )}
                            </div>
                            </div>
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                        
                    </form>
                </div>
            </div>
        )

    }
}

export default CreateAccount