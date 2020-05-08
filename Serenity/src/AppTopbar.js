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
                <span className="app-name">  STUDENTS MANAGEMENT</span>
            </button>;

        return (
            <div className="layout-topbar">
                {horizontalIcon}
                <img alt="logo" src="assets/ITEC.png" className="mobile-logo"/>

                <button className="p-link menu-btn" onClick={this.props.onMenuButtonClick}>
                    <i className="material-icons">&#xE5D2;</i>
                </button>

                <button className="p-link topbar-menu-btn" onClick={this.props.onTopbarMobileMenuButtonClick}>
                    <i className="material-icons">&#xE853;</i>
                </button>

                <div className="layout-topbar-menu-wrapper">
                    <ul className={topbarClass}>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'settings'})}>
                            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
                                <i className="topbar-icon material-icons">settings</i>
                                <span className="topbar-item-name">Settings</span>
                            </button>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">palette</i>
                                        <span>Change Theme</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">star</i>
                                        <span>Favorites</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">lock</i>
                                        <span>Lock Screen</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">wallpaper</i>
                                        <span>Wallpaper</span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'messages'})}>
                            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
                                <i className="topbar-icon material-icons animated swing">&#xE0C9;</i>
                                <span className="topbar-badge animated rubberBand">5</span>
                                <span className="topbar-item-name">Messages</span>
                            </button>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <button className="topbar-message p-link">
                                        <img src="assets/layout/images/avatar1.png" width="35"  alt="avatar1"/>
                                        <span>Give me a call</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="topbar-message p-link">
                                        <img src="assets/layout/images/avatar2.png" width="35"  alt="avatar2"/>
                                        <span>Sales reports attached</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="topbar-message p-link">
                                        <img src="assets/layout/images/avatar3.png" width="35" alt="avatar3"/>
                                        <span>About your invoice</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="topbar-message p-link">
                                        <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2"/>
                                        <span>Meeting today at 10pm</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="topbar-message p-link">
                                        <img src="assets/layout/images/avatar4.png" width="35" alt="avatar4"/>
                                        <span>Out of office</span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'notifications'})}>
                            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
                                <i className="topbar-icon material-icons">notifications</i>
                                <span className="topbar-badge animated rubberBand">4</span>
                                <span className="topbar-item-name">Notifications</span>
                            </button>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">bug_report</i>
                                        <span>Pending tasks</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">event</i>
                                        <span>Meeting today at 3pm</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">cloud_download</i>
                                        <span>Download documents</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link">
                                        <i className="material-icons">flight</i>
                                        <span>Book flight</span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames('search-item', {'active-topmenuitem': this.props.activeTopbarItem === 'search'})}
                            onClick={(e) => this.onTopbarItemClick(e, 'search')}>
                            <span className="md-inputfield">
                                <InputText type="text" />
                                <label>Search</label>
                                <i className="topbar-icon material-icons">search</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}