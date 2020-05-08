import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Access extends Component {

	render() {
		return <div className="exception-body accessdenied">
			<div className="exception-panel">
				<div className="exception-code">
					<img src="assets/layout/images/exception/401.svg" alt="serenity-react"/>
				</div>

				<div className="exception-detail">

					<div className="exception-icon">
						<i className="material-icons">verified_user</i>
					</div>
					<h1>ACCESS DENIED</h1>
					<p>Please contact your administrator!</p>

					<Button label="GO TO DASHBOARD" onClick={() => {window.location = "/"}} />
				</div>
			</div>
		</div>
	}
}