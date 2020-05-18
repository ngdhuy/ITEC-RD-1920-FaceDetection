import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return (
            <div className="layout-footer clearfix">
                <a href="/">
                    <img alt="logo-colored" src="assets/ITEC.png" />
                </a>
                <span className="footer-text-right">
                    <span className="material-icons">copyright</span>
                    <span>All Rights Reserved</span>
                </span>
            </div>
        );
    }
}