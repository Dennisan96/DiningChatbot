import React, { Component } from 'react';
import { HelpBlock, FormGroup, FormControl, ControlLabel, FormLabel} from 'react-bootstrap';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
			email: '',
			password: '',
			confirmPassword: '',
        }
    }

    validateForm() {
		return (
			this.state.email.length > 0 &&
			this.state.password.length > 0 &&
			this.state.password === this.state.confirmPassword
		);
    }

    handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
    

    render() { 
        return ( 
			<form onSubmit={this.handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
					<FormLabel>Email</FormLabel>
					<FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<FormLabel>Password</FormLabel>
					<FormControl value={this.state.password} onChange={this.handleChange} type="password" />
				</FormGroup>
				<FormGroup controlId="confirmPassword" bsSize="large">
					<FormLabel>Confirm Password</FormLabel>
					<FormControl value={this.state.confirmPassword} onChange={this.handleChange} type="password" />
				</FormGroup>
			</form>
        );
    }
}
 
export default SignUp;