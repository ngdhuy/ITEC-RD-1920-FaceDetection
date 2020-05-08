import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class NotFound extends Component {

	render() {
		return <div className="exception-body notfound">
			<div className="exception-panel">
				<div className="exception-code">
					<img src="assets/layout/images/exception/404.svg" alt="serenity-react"/>
				</div>

				<div className="exception-detail">
					<div className="exception-icon">
						<i className="material-icons">error_outline</i>
					</div>
					<h1>PAGE NOT FOUND</h1>
					<p>Please contact the system administrator</p>

					<Button label="GO TO DASHBOARD" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
	}
}