import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";

import { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/Common';
	
function Login(props) {
	const username = useFormInput('');
	const password = useFormInput('');

	const handleLogin = () => {
		axios.post('https://huy.fromlabs.com/api/account/login', { username: username.value, password: password.value }).then(response => {
			setUserSession(response.data.token, response.data.user);
			 	props.history.push('/home');
				}).catch(error => {
				   if (error) {
					   alert('Unauthorized!')
				   }
				});
			  }

	return <div className="login-body">
			<div className="login-panel p-fluid">
				<div className="login-panel-header">
					<img src="assets/ITEC.png" alt="ITEC"/>
				</div>
				<div className="login-panel-content">
					<div className="p-grid">
						<div className="p-col-12">
							<h1>ITEC STUDENTS MANAGEMENT</h1>
						</div>
						<div className="p-col-12">
                        <span className="md-inputfield">
							<InputText type="text" {...username} />
                            <label>Username</label>
                        </span>
						</div>
						<div className="p-col-12">
                        <span className="md-inputfield">
							<InputText type="password" {...password} />
                            <label>Password</label>
                        </span>
						</div>
						<div className="p-col-12">
							<Button label="Log In" icon="pi-md-person" onClick={handleLogin} />
						</div>
						<div className="p-col-12">
							Don't have an account? 
							<br></br>
							<a href="https://www.itec.hcmus.edu.vn/vn/">Contact your administrator!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	}


	const useFormInput = initialValue => {
		const [value, setValue] = useState(initialValue);
	   
		const handleChange = e => {
		  setValue(e.target.value);
		}
		return {
		  value,
		  onChange: handleChange
		}
	  }

export default Login;