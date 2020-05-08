import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Error extends Component {

	render() {
		return <div className="exception-body error">
			<div className="exception-panel">
				<div className="exception-code">
					<img src="assets/layout/images/exception/500.svg" alt="serenity-react"/>
				</div>

				<div className="exception-detail">

					<div className="exception-icon">
						<i className="material-icons">close</i>
					</div>
					<h1>ERROR OCCURED</h1>
					<p>Please contact the system administrator</p>

					<Button label="GO TO DASHBOARD" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
	}
}