import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

class AppSubmenu extends Component {

	static defaultProps = {
		className: null,
		items: null,
		onRootItemClick: null,
		onMenuItemClick: null,
		root: false,
		layoutMode: null,
		menuActive: false,
		parentMenuItemActive: false
	}

	static propTypes = {
		className: PropTypes.string,
		items: PropTypes.array,
		onRootItemClick: PropTypes.func,
		onMenuItemClick: PropTypes.func,
		root: PropTypes.bool,
		layoutMode: PropTypes.string,
		menuActive: PropTypes.bool,
		parentMenuItemActive: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	onMenuItemClick(event, item, index) {
		//avoid processing disabled items
		if (item.disabled) {
			event.preventDefault();
			return true;
		}

		if (this.props.root && this.props.onRootItemClick) {
			this.props.onRootItemClick({
				originalEvent: event,
				item: item
			});
		}

		//execute command
		if (item.command) {
			item.command({originalEvent: event, item: item});
			event.preventDefault();
		}

		if (index === this.state.activeIndex)
			this.setState({activeIndex: null});
		else
			this.setState({activeIndex: index});

		if (this.props.onMenuItemClick) {
			this.props.onMenuItemClick({
				originalEvent: event,
				item: item
			});
		}
	}

	onKeyDown(event, item, index) {
		if (event.key === 'Enter') {
			this.onMenuItemClick(event, item, index);
		}
	}

	onMenuItemMouseEnter(index) {
		if (this.props.root && this.props.menuActive && this.isHorizontal() && !this.isMobile()) {
			this.setState({activeIndex: index});
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.parentMenuItemActive === false) {
			return {
				activeIndex: null
			}
		}

		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.isHorizontal() && !this.isMobile() && prevProps.menuActive && !this.props.menuActive) {
			this.setState({activeIndex: null});
		}
	}

	isHorizontal() {
		return (this.props.layoutMode === 'horizontal');
	}

	isMobile() {
		return window.innerWidth <= 1024;
	}

	renderLinkContent(item) {
		let submenuIcon = item.items && <i className="material-icons layout-submenu-toggler">keyboard_arrow_down</i>;
		let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

		return (
			<React.Fragment>
				<i className="material-icons">{item.icon}</i>
				<span className="menuitem-text">{item.label}</span>
				{submenuIcon}
				{badge}
			</React.Fragment>
		);
	}

	renderLink(item, i) {
		let content = this.renderLinkContent(item);

		if (item.to) {
			return (
				<NavLink activeClassName="active-menuitem-routerlink" to={item.to}
						 onClick={(e) => this.onMenuItemClick(e, item, i)} exact role="menuitem"
						 target={item.target} onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}
						 className={item.styleClass}>{content}</NavLink>
			)
		} else {
			return (
				<a className={classNames("ripplelink", item.styleClass)} role="menuitem" href={item.url} tabIndex={item.url ? '' : 0}
				   onClick={(e) => this.onMenuItemClick(e, item, i)} target={item.target} onKeyDown={(e) => this.onKeyDown(e, item, i)}
				   onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}>
					{content}
				</a>
			);

		}
	}


	render() {
		var items = this.props.items && this.props.items.map((item, i) => {
			let active = this.state.activeIndex === i;
			let styleClass = classNames(item.badgeStyleClass, {'active-menuitem': active});

			return <li className={styleClass} key={i} role="none">
				{this.renderLink(item, i)}
				<CSSTransition classNames="layout-submenu" timeout={{enter: 400, exit: 400}} in={active}>
					<AppSubmenu items={item.items} onMenuItemClick={this.props.onMenuItemClick}
								layoutMode={this.props.layoutMode}
								menuActive={this.props.menuActive} parentMenuItemActive={active}/>
				</CSSTransition>
			</li>
		});

		return <ul role="menu" className={this.props.className}>{items}</ul>;

	}
}

export class AppMenu extends Component {

	static defaultProps = {
		model: null,
		onRootMenuItemClick: null,
		onMenuItemClick: null,
		layoutMode: null,
		active: false
	}

	static propTypes = {
		model: PropTypes.array,
		layoutMode: PropTypes.string,
		onRootMenuItemClick: PropTypes.func,
		onMenuItemClick: PropTypes.func,
		active: PropTypes.bool
	}

	render() {

		return (
			<AppSubmenu items={this.props.model} className="layout-menu" menuActive={this.props.active}
						onMenuItemClick={this.props.onMenuItemClick} onRootItemClick={this.props.onRootMenuItemClick}
						root={true} layoutMode={this.props.layoutMode} parentMenuItemActive={true}/>
		);
	}
}
