import React, { Component } from 'react';
import {InputText} from 'primereact/components/inputtext/InputText'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class AppTopbar extends Component {

    static defaultProps = {
        activeTopbarItem: null,
        topbarMenuActive: null,
        onMenuButtonClick: null,
        onTopbarItemClick: null,
        onTopbarMobileMenuButtonClick: null,
        layoutMode: 'overlay',
    }

    static propTypes = {
        activeTopbarItem: PropTypes.string,
        topbarMenuActive: PropTypes.bool,
        onMenuButtonClick: PropTypes.func.isRequired,
        onTopbarItemClick: PropTypes.func.isRequired,
        onTopbarMobileMenuButtonClick: PropTypes.func.isRequired,
        layoutMode: PropTypes.string
    }

    constructor() {
        super();
        this.state = {};
    }

    onTopbarItemClick(event, item) {
        if(this.props.onTopbarItemClick) {
            this.props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        let topbarClass = classNames('topbar-menu fadeInDown',{'topbar-menu-active': this.props.topbarMenuActive})
        let horizontalIcon = (this.props.layoutMode === 'horizontal') &&
            <button className="p-link topbar-logo">
                <img alt="logo" src="assets/ITEC.png"/>
            </button>;

        return (
            <div className="layout-topbar">
                {horizontalIcon}
                <img alt="logo" src="assets/ITEC.png" className="mobile-logo"/>
                <h2 style={{color:'white', marginBottom: 15, position:'absolute', top: 5, marginLeft: '40vw'}}>STUDENTS MANAGEMENT</h2>
                <button className="p-link menu-btn" onClick={this.props.onMenuButtonClick}>
                    <i className="material-icons">&#xE5D2;</i>
                </button>

                <button className="p-link topbar-menu-btn" onClick={this.props.onTopbarMobileMenuButtonClick}>
                    <i className="material-icons">&#xE853;</i>
                </button>

                <div className="layout-topbar-menu-wrapper">
                    <ul className={topbarClass}>
                    </ul>
                </div>
            </div>
        );
    }
}