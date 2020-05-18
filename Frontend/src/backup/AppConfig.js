import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabView, TabPanel } from 'primereact/tabview';

export class AppConfig extends Component {

	static defaultProps = {
		layoutMode: 'slim',
		darkMenu: false,
		layoutColor: 'moody',
		themeColor: 'bluegrey',
		configDialogActive: false
	}

	static propTypes = {
		layoutMode: PropTypes.string.isRequired,
		darkMenu: PropTypes.bool.isRequired,
		layoutColor: PropTypes.string.isRequired,
		themeColor: PropTypes.string.isRequired,
		configDialogActive: PropTypes.bool.isRequired
	}

	render() {
		let themeColors = [
			{ name: 'Blue Amber', file: 'blue', image: 'blue-amber.svg' },
			{ name: 'Blue Grey Green', file: 'bluegrey', image: 'bluegrey-green.svg' },
			{ name: 'Brown Cyan', file: 'brown', image: 'brown-cyan.svg' },
			{ name: 'Cyan Amer', file: 'cyan', image: 'cyan-amber.svg' },
			{ name: 'Deep Orange Cyan', file: 'deeporange', image: 'deeporange-cyan.svg' },
			{ name: 'Deep Purple Orange', file: 'deeppurple', image: 'deeppurple-orange.svg' },
			{ name: 'Green Brown', file: 'green', image: 'green-brown.svg' },
			{ name: 'Grey Indigo', file: 'grey', image: 'grey-indigo.svg' },
			{ name: 'Indigo Pink', file: 'indigo', image: 'indigo-pink.svg' },
			{ name: 'Light Blue Blue Grey', file: 'lightblue', image: 'lightblue-bluegrey.svg' },
			{ name: 'Light Green Purple', file: 'lightgreen', image: 'lightgreen-purple.svg' },
			{ name: 'Lime Blue Grey', file: 'lime', image: 'lime-bluegrey.svg' },
			{ name: 'Orange Indigo', file: 'orange', image: 'orange-indigo.svg' },
			{ name: 'Pink Amber', file: 'pink', image: 'pink-amber.svg' },
			{ name: 'Purple Pink', file: 'purple', image: 'purple-pink.svg' },
			{ name: 'Teal Red', file: 'teal', image: 'teal-red.svg' },
			{ name: 'Yellow Teal', file: 'yellow', image: 'yellow-teal.svg' }
		];
		let layoutColors = [
			{name:'Amber Pink', file:'amber', image:'amber-pink.png'},
			{name:'Blue Amber', file:'blue', image:'blue-amber.png'},
			{name:'Blue Grey Green', file:'bluegrey', image:'bluegrey-green.png'},
			{name:'Brown Cyan', file:'brown', image:'brown-cyan.png'},
			{name:'Cyan Amber', file:'cyan', image:'cyan-amber.png'},
			{name:'Deep Orange Cyan', file:'deeporange', image:'deeporange-cyan.png'},
			{name:'Deep Purple Orange', file:'deeppurple', image:'deeppurple-orange.png'},
			{name:'Green Brown', file:'green', image:'green-brown.png'},
			{name:'Grey Indigo', file:'grey', image:'grey-indigo.png'},
			{name:'Indigo Pink', file:'indigo', image:'indigo-pink.png'},
			{name:'Light Blue Blue Grey', file:'lightblue', image:'lightblue-bluegrey.png'},
			{name:'Light Green Purple', file:'lightgreen', image:'lightgreen-purple.png'},
			{name:'Lime Blue Grey', file:'lime', image:'lime-bluegrey.png'},
			{name:'Orange Indigo', file:'orange', image:'orange-indigo.png'},
			{name:'Pink Amber', file:'pink', image:'pink-amber.png'},
			{name:'Purple Pink', file:'purple', image:'purple-pink.png'},
			{name:'Teal Red', file:'teal', image:'teal-red.png'},
			{name:'Yellow Teal', file:'yellow', image:'yellow-teal.png'},
		];
		let	layoutSpecialColors = [
			{name:'Reflection', file:'reflection', image:'reflection.png'},
			{name:'Moody', file:'moody', image:'moody.png'},
			{name:'Cityscape', file:'cityscape', image:'cityscape.png'},
			{name:'Cloudy', file:'cloudy', image:'cloudy.png'},
			{name:'Storm', file:'storm', image:'storm.png'},
			{name:'Palm', file:'palm', image:'palm.png'},
			{name:'Flatiron', file:'flatiron', image:'flatiron.png'},
			{name:'Panaroma', file:'panaroma', image:'panaroma.png'},
			{name:'Horizon', file:'horizon', image:'horizon.png'},
		]

		return (
			<div id="layout-config" className={classNames("layout-config", {'layout-config-active': this.props.configDialogActive})} onClick={this.props.onConfigClick}>
				<div className="layout-config-content">
					<button className="layout-config-button" id="layout-config-button" onClick={this.props.onConfigButtonClick}>
						<i className="pi-md-settings"/>
					</button>

					<button className="layout-config-close" onClick={this.props.onConfigCloseClick}>
						<i className="pi-md-close"/>
					</button>

					<TabView>
						<TabPanel header="Menu">
							<h1>Menu Modes</h1>
							<div className="panel-items">
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'overlay' })}>
										<img src="assets/layout/images/configurator/menu/serenity-overlay.png" alt="serenity"/>
										{this.props.layoutMode === 'overlay' && <i className="pi-md-check"/>}
									</button>
									<span>Vertical</span>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'horizontal' })}>
										<img src="assets/layout/images/configurator/menu/serenity-horizontal.png" alt="serenity"/>
										{this.props.layoutMode === 'horizontal' && <i className="pi-md-check"/>}
									</button>
									<span>Horizontal</span>
								</div>
							</div>

							<h1>Menu Colors</h1>
							<div className="panel-items">
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkMenu: true })}>
										<img src="assets/layout/images/configurator/menu/serenity-dark.png" alt="serenity"/>
										{this.props.darkMenu === true && <i className="pi-md-check"/>}
									</button>
									<span>Dark</span>
								</div>
								<div className="panel-item">
									<button className="p-link" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkMenu: false })}>
										<img src="assets/layout/images/configurator/menu/serenity-overlay.png" alt="serenity"/>
										{this.props.darkMenu === false && <i className="pi-md-check"/>}
									</button>
									<span>Light</span>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="Layout">
							<h1>Flat</h1>
							<div className="panel-items">
								{layoutColors && layoutColors.map((l, index) => {
									return <div className="panel-item colors" key={index}>
										<button className="p-link layout-config-layout-option"
												onClick={event => this.props.changeLayout({theme: l.file})}>
											<img src={"assets/layout/images/configurator/layout/flat/" + l.image} alt={l.name}/>
											{this.props.layoutColor === l.file && <i className="pi-md-check"/>}
										</button>
									</div>
								})
								}
							</div>

							<h1>Special</h1>
							<div className="panel-items">
								{layoutSpecialColors && layoutSpecialColors.map((l, index) => {
									return <div className="panel-item colors" key={index}>
										<button className="p-link layout-config-layout-option"
												onClick={event => this.props.changeLayout({theme: l.file})}>
											<img src={"assets/layout/images/configurator/layout/special/" + l.image} alt={l.name}/>
											{this.props.layoutColor === l.file && <i className="pi-md-check"/>}
										</button>
									</div>
								})
								}
							</div>
						</TabPanel>

						<TabPanel header="Themes">
							<div className="panel-items">
								{themeColors && themeColors.map((t, index) => {
									return <div className="panel-item colors" key={index}>
										<button className="p-link layout-config-option"
												onClick={event => this.props.changeTheme({theme: t.file})}>
											<img src={"assets/layout/images/configurator/theme/" + t.image} alt={t.name}/>
											{this.props.themeColor === t.file && <i className="pi-md-check"/>}
										</button>
									</div>
								})
								}
							</div>
						</TabPanel>
					</TabView>
				</div>
			</div>
		);
	}
}
