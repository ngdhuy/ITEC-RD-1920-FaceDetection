import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {removeUserSession} from './utils/Common'

export class AppBreadcrumb extends Component {

    static propTypes = {
        match: PropTypes.object
    }

    render(props) {
        const { location } = this.props;

        const handleLogout = () => {
            removeUserSession();
            this.props.history.push('/');
        }

        return (
            <div className="layout-breadcrumb">
                <ul>
                    <li><button className="p-link"><i className="material-icons">home</i></button></li>
                    <li>{location.pathname}</li>
                </ul>
    
                <div className="layout-breadcrumb-options">
                    <button type="button" onClick={handleLogout} className="p-link" title="Logout">
                        <i className="material-icons">power_settings_new</i>
                    </button>
                </div>
            </div>
        );
    }
}