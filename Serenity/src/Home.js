import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppBreadcrumb } from "./AppBreadcrumb";
import DomHandler from 'primereact/components/utils/DomHandler';
import { withRouter } from 'react-router';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './ripple.js';
import './App.css';

import {removeUserSession} from './utils/Common'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            activeTopbarItem: null,
            layoutMode: 'horizontal',
            mobileMenuActive: null,
            topbarMenuActive: null,
            currentRoute: null,
            menuActive: false,
            themeColor: 'bluegrey',
            layoutColor: 'moody',
            configDialogActive: false
        };

        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarMobileMenuButtonClick = this.onTopbarMobileMenuButtonClick.bind(this);
        this.onSidebarMouseEnter = this.onSidebarMouseEnter.bind(this);
        this.onSidebarMouseLeave = this.onSidebarMouseLeave.bind(this);
        this.onToggleMenuClick = this.onToggleMenuClick.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onTopbarItemClick(event) {
        this.topbarMenuClick = true;
        if (this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();

    }

    onMenuButtonClick(event) {
        this.menuButtonClick = true;

        if (this.isMobile()) {
            this.setState({mobileMenuActive: !this.state.mobileMenuActive});
        }

        event.preventDefault();
    }

    onTopbarMobileMenuButtonClick(event) {
        this.topbarMenuButtonClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        event.preventDefault();
    }

    onToggleMenuClick(event) {
        this.setState({layoutMode: (this.state.layoutMode !== 'static') ? 'static' : 'overlay'})
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onSidebarMouseEnter(event) {
        if (this.sidebarTimeout) {
            clearTimeout(this.sidebarTimeout);
        }
        DomHandler.addClass(this.sidebar, 'layout-sidebar-active');
    }

    onSidebarMouseLeave(event) {
        this.sidebarTimeout = setTimeout(() => {
            DomHandler.removeClass(this.sidebar, 'layout-sidebar-active');
        }, 250);
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });
    }

    onMenuItemClick(event) {
        if(!event.item.items && this.isHorizontal()) {
            this.setState({
                menuActive: false
            })
        }
    }
    

    createMenu() {         
        this.menu = [
            {label: 'Home', icon: 'dashboard', to:'/'},
            {label: 'Account', icon: 'people', to:'/account'},
            {label: 'Course', icon: 'dashboard', to:'/course'},
            {label: 'Class', icon: 'dashboard', to:'/class'},
            {label: 'Students', icon: 'people', to:'/student'},
            {label: 'Attendance', icon: 'people'},
            {label: 'Logout', icon: 'power', command:()=>{ removeUserSession(); this.props.history.push('/');}}
        ];
    }

    changeStyleSheetUrl(id, value, prefix) {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    replaceLink(linkElement, href) {
        if(this.isIE()){
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isMobile() {
        return window.innerWidth <= 1024;
    }

    isOverlay() {
        return this.state.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.state.layoutMode === 'horizontal';
    }

    render() {
        let wrapperClass = classNames('layout-wrapper', {
                                        'layout-wrapper-static': this.state.layoutMode === 'static',
                                        'layout-wrapper-active': this.state.mobileMenuActive,
                                        'layout-menu-horizontal': this.state.layoutMode === 'horizontal'
                                    });
        let sidebarClassName = classNames("layout-sidebar",{'layout-sidebar-dark': this.state.darkMenu});
        const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}
                    onMouseEnter={this.onSidebarMouseEnter} onMouseLeave={this.onSidebarMouseLeave}>

                    <div className="sidebar-logo">
                        <button className="p-link">
                            <img alt="logo" src="assets/layout/images/logo-slim.png" />
                            <span className="app-name">SERENITY</span>
                        </button>
                        <button className="p-link sidebar-anchor" title="Toggle Menu" onClick={this.onToggleMenuClick}> </button>
                    </div>

                        <div className="layout-menu-container">
                            <AppMenu model={this.menu}  onRootMenuItemClick={this.onRootMenuItemClick} layoutMode={this.state.layoutMode}
                                     active={this.state.menuActive} onMenuItemClick={this.onMenuItemClick}/>
                        </div>
                </div>
                <div className="layout-main">
                    <AppTopbar layoutMode={this.state.layoutMode} activeTopbarItem={this.state.activeTopbarItem} onTopbarItemClick={this.onTopbarItemClick}
                               onMenuButtonClick={this.onMenuButtonClick} onTopbarMobileMenuButtonClick={this.onTopbarMobileMenuButtonClick}
                               topbarMenuActive={this.state.topbarMenuActive}/>

                    <AppBreadCrumbWithRouter />
                    <div className="layout-content">
                        
                    </div>

                    <AppFooter />

                    {this.state.mobileMenuActive && <div className="layout-main-mask"></div>}
                </div>
            </div>
        );
  }
}

export default Home;
