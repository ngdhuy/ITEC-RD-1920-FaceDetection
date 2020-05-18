import React, { Component } from 'react';
import './Documentation.css';
import {CodeHighlight} from "./CodeHighlight";

export class Documentation extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card docs">
                        <h1>Current Version</h1>
                        <p>React 16.13.0 and PrimeReact 4.x</p>

                        <h1>Getting Started</h1>
                        <p>Serenity is an application template for React, based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
<pre>
{
`npm install

# OR

yarn
`}
</pre>

                        <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.</p>

<pre>
{
`npm start

# OR

yarn start
`}
</pre>

                        <p>That is it, you may now start with the development of your application using the Serenity template.</p>

                        <h1>React Scripts</h1>
                        <p>Following commands are derived from create-app-app.</p>
<pre>
{
`"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</pre>
                        <h1>Dependencies</h1>
                        <p>Dependencies of Serenity are listed below and needs to be added to package.json. Serenity has no direct dependency, even PrimeReact components are an optional dependency.</p>

                        <pre>
{
`"primereact": "^3.4.0",              //optional: PrimeReact components
"primeicons": "^2.0.0",              //optional: PrimeReact component icons
"primeflex": "1.0.0",                //optional: Samples
"react-router-dom": "^4.2.2"         //optional: Router
`
}
</pre>

                        <h1>Structure</h1>
                        <p>Serenity consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                        <h1>Template</h1>
                        <p>Main layout is the JSX template of the App.js, it is divided into a couple of child components such as topbar, breadcrumb, sidebar and footer. Here is render method of the
                            App.js component that implements the logic such as menu state, layout modes and more. The implementation is optimized using best practices to avoid unnecessary renders when state changes.
                        </p>

<CodeHighlight>
{
`
render() {
    (
        <div className={wrapperClass} onClick={this.onWrapperClick}>
                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}
                    onMouseEnter={this.onSidebarMouseEnter} onMouseLeave={this.onSidebarMouseLeave}>

                    <div className="sidebar-logo">
                        <a>
                            <img alt="logo" src="assets/layout/images/logo-slim.png" />
                            <span className="app-name">SERENITY</span>
                        </a>
                        <a className="sidebar-anchor" title="Toggle Menu" onClick={this.onToggleMenuClick}> </a>
                    </div>

                    <div className="layout-menu-container" >
                        <AppMenu model={this.menu} />
                    </div>
                </div>
                <div className="layout-main">
                    <AppTopbar activeTopbarItem={this.state.activeTopbarItem} onTopbarItemClick={this.onTopbarItemClick}
                               onMenuButtonClick={this.onMenuButtonClick} onTopbarMobileMenuButtonClick={this.onTopbarMobileMenuButtonClick}
                               onTopbarMenuClick={this.onTopbarMenuClick} topbarMenuActive={this.state.topbarMenuActive}/>

                    <AppBreadCrumbWithRouter />
                
                    <div className="layout-content">
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/forms" component={FormsDemo} />
                        <Route path="/sample" component={SampleDemo} />
                        <Route path="/data" component={DataDemo} />
                        <Route path="/panels" component={PanelsDemo} />
                        <Route path="/overlays" component={OverlaysDemo} />
                        <Route path="/menus" component={MenusDemo} />
                        <Route path="/messages" component={MessagesDemo} />
                        <Route path="/charts" component={ChartsDemo} />
                        <Route path="/misc" component={MiscDemo} />
                        <Route path="/empty" component={EmptyPage} />
                        <Route path="/utils" component={UtilsDemo} />
                        <Route path="/documentation" component={Documentation} />
                    </div>

                    <AppConfig layoutMode={this.state.layoutMode} darkMenu={this.state.darkMenu} layoutColor={this.state.layoutColor} themeColor={this.state.themeColor}
                               changeMenuMode={this.changeMenuMode} changeMenuColor={this.changeMenuColor} changeTheme={this.changeTheme} changeLayout={this.changeLayout}
                               onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick}
                               onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>

                    <AppFooter />

                    {this.state.mobileMenuActive && <div className="layout-main-mask"></div>}
                </div>
            </div>
    )
}
`
}
</CodeHighlight>

                        <h1>Menu</h1>
                        <p>Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API. In order to define the menuitems,
                            navigate to createMenu() method App.js file and define your own model as a nested structure. Here is the menu component from the demo application.
                            Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style={{overflow: 'auto', height: '400px'}}>
<CodeHighlight lang="js">
{
`
createMenu() {
    this.menu = [
        {label: 'Dashboard', icon: 'dashboard', command:()=>{ window.location = "#/"}},
        {
            label: 'Menu Modes', icon: 'settings',
            items: [
                {label: 'Static Menu', icon: 'view_quilt', command: (event) => {this.setState({layoutMode: 'static'})}},
                {label: 'Overlay Menu', icon: 'flip_to-front', command: (event) => {this.setState({layoutMode: 'overlay'})}},
                {label: 'Horizontal Menu', icon: 'border_horizontal',  command: () => this.setState({layoutMode: 'horizontal'}) },
                {label: 'Light Menu', icon: 'label', command: (event) => {this.setState({darkMenu: false})}},
                {label: 'Dark Menu', icon: 'label_outline', command: (event) => {this.setState({darkMenu: true})}}
            ]
        },
        {
            label: 'Layout Palette', icon: 'palette',
            items: [
                {
                    label: 'Flat', icon: 'format_paint',
                    items: [
                        {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeLayout({theme:'bluegrey'}); }},
                        {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeLayout({theme:'indigo'}); }},
                        {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeLayout({theme:'pink'}); }},
                        {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeLayout({theme:'deeppurple'}); }},
                        {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeLayout({theme:'blue'}); }},
                        {label: 'Light Blue - Blue Grey', icon: 'brush', command: (event) => {this.changeLayout({theme:'lightblue'}); }},
                        {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeLayout({theme:'cyan'}); }},
                        {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeLayout({theme:'teal'}); }},
                        {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeLayout({theme:'green'}); }},
                        {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeLayout({theme:'lightgreen'}); }},
                        {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeLayout({theme:'lime'}); }},
                        {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeLayout({theme:'yellow'}); }},
                        {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeLayout({theme:'amber'}); }},
                        {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeLayout({theme:'orange'}); }},
                        {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeLayout({theme:'deeporange'}); }},
                        {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeLayout({theme:'brown'}); }},
                        {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeLayout({theme:'grey'}); }}
                    ]
                },
                {
                    label: 'Special', icon: 'format_paint',
                    items: [
                        {label: 'Reflection', icon: 'brush', command: (event) => {this.changeLayout({theme:'reflection'}); }},
                        {label: 'Moody', icon: 'brush', command: (event) => {this.changeLayout({theme:'moody'}); }},
                        {label: 'Cityscape', icon: 'brush', command: (event) => {this.changeLayout({theme:'cityscape'}); }},
                        {label: 'Cloudy', icon: 'brush', command: (event) => {this.changeLayout({theme:'cloudy'}); }},
                        {label: 'Storm', icon: 'brush', command: (event) => {this.changeLayout({theme:'storm'}); }},
                        {label: 'Palm', icon: 'brush', command: (event) => {this.changeLayout({theme:'palm'}); }},
                        {label: 'Flatiron', icon: 'brush', command: (event) => {this.changeLayout({theme:'flatiron'}); }}
                    ]
                },
            ]
        },
        {
            label: 'Themes', icon: 'brush', badge: '5',
            items: [
                {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme({theme:'bluegrey'}); }},
                {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeTheme({theme:'indigo'}); }},
                {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeTheme({theme:'pink'}); }},
                {label: 'Purple - Pink', icon: 'brush', command: (event) => {this.changeTheme({theme:'purple'}); }},
                {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeTheme({theme:'deeppurple'}); }},
                {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme({theme:'blue'}); }},
                {label: 'Light Blue - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme({theme:'lightblue'}); }},
                {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeTheme({theme:'cyan'}); }},
                {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeTheme({theme:'teal'}); }},
                {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeTheme({theme:'green'}); }},
                {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeTheme({theme:'lightgreen'}); }},
                {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme({theme:'lime'}); }},
                {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeTheme({theme:'yellow'}); }},
                {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeTheme({theme:'amber'}); }},
                {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeTheme({theme:'orange'}); }},
                {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeTheme({theme:'deeporange'}); }},
                {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeTheme({theme:'brown'}); }},
                {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeTheme({theme:'grey'}); }}
            ]
        },
        {
            label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'teal-badge',
            items: [
                {label: 'Sample Page', icon: 'desktop_mac', command:()=>{ window.location = "#/sample"}},
                {label: 'Forms', icon: 'input', command: () => { window.location = "#/forms"}},
                {label: 'Data', icon: 'grid_on', command:()=>{ window.location = "#/data"}},
                {label: 'Panels', icon: 'content_paste', command:()=>{ window.location = "#/panels"}},
                {label: 'Overlays', icon: 'content_copy', command:()=>{ window.location = "#/overlays"}},
                {label: 'Menus', icon: 'menu', command:()=>{ window.location = "#/menus"}},
                {label: 'Messages', icon: 'message', command:()=>{ window.location = "#/messages"}},
                {label: 'Charts', icon: 'insert_chart', command:()=>{ window.location = "#/charts"}},
                {label: 'Misc', icon: 'toys', command:()=>{ window.location = "#/misc"}}
            ]
        },
        {
            label: 'Template Pages', icon: 'get_app',
            items: [
                {label: 'Empty Page', icon: 'hourglass_empty', to: '/empty'},
                {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
                {label: 'Login Page', icon: 'verified_user', to: '/login'},
                {label: 'Error Page', icon: 'error', to: '/error'},
                {label: '404 Page', icon: 'error_outline', to: '/notfound'},
                {label: 'Access Denied Page', icon: 'security', to: '/access'}
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'menu',
            items: [
                {
                    label: 'Submenu 1', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.1.1', icon: 'subject'},
                                {label: 'Submenu 1.1.2', icon: 'subject'},
                                {label: 'Submenu 1.1.3', icon: 'subject'},
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.2.1', icon: 'subject'},
                                {label: 'Submenu 1.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.1.1', icon: 'subject'},
                                {label: 'Submenu 2.1.2', icon: 'subject'},
                                {label: 'Submenu 2.1.3', icon: 'subject'},
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.2.1', icon: 'subject'},
                                {label: 'Submenu 2.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                }
            ]
        },
        {label: 'Utils', icon: 'build',  command:()=>{ window.location = "#/utils"}},
        {label: 'Documentation', icon: 'find_in_page',  command:()=>{ window.location = "#/documentation"}},
        {label: 'Buy Now', icon: 'credit_card', command: () => { window.location = "https://www.primefaces.org/store" }}
    ];
}
    
`}
</CodeHighlight>
</div>
                        <h1>Theme and Layout SASS</h1>
                        <p>Serenity provides 18 PrimeReact themes out of the box, setup of a theme simple including the css of theme to your page that are located inside resources/theme folder.</p>

                        <ul>
                            <li>theme-amber</li>
                            <li>theme-blue</li>
                            <li>theme-bluegrey</li>
                            <li>theme-brown</li>
                            <li>theme-cyan</li>
                            <li>theme-deeporange</li>
                            <li>theme-deeppurple</li>
                            <li>theme-green</li>
                            <li>theme-grey</li>
                            <li>theme-indigo</li>
                            <li>theme-lightblue</li>
                            <li>theme-lightgreen</li>
                            <li>theme-lime</li>
                            <li>theme-orange</li>
                            <li>theme-pink</li>
                            <li>theme-purple</li>
                            <li>theme-teal</li>
                            <li>theme-yellow</li>
                        </ul>

                        <p>A custom theme can be developed by the following steps.</p>
                        <ul>
                            <li>Choose a custom theme name such as theme-myown.</li>
                            <li>Create a file named theme-myown.scss under <i>public/assets/theme folder</i>.</li>
                            <li>Define the variables listed below and import the <i>../sass/theme/_theme.scss</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Include the generated theme.css to your application.</li>
                        </ul>

                        <p>Here are the variables required to create a theme.</p>

<CodeHighlight lang="css">
{
`$primaryColor: #607D8B;
$primaryDarkColor: #37474F;
$primaryLightColor: #B0BEC5;
$accentColor: #8BC34A;
$accentDarkColor: #558B2F;
$accentLightColor: #C5E1A5;
$accentTextColor: #ffffff;

@import '../sass/theme/_theme';
`
}
</CodeHighlight>

                        <p> An example sass command to compile the css would be;</p>

<pre>
sass public/assets/theme/theme-myown.scss public/assets/theme/theme-myown.css
</pre>

                        <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                        so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<pre>
sass -w src/assets/ --sourcemap=none
</pre>

                        <p>Same can also be applied to layout itself;</p>
                        <ul>
                            <li>Choose a layout name such as layout-myown.</li>
                            <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
                            <li>Define the variables listed below and import the <i>../sass/layout/_layout.scss</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Serve the css by importing it using a link tag or a bundler.</li>
                        </ul>

                        <p>Here are the variables required to create a layout, you may need to change the last line according to the
                            relative path of the sass folder in your application.</p>

<CodeHighlight lang="css">
{
`/* Sidebar */
$sidebarLogoBgColor:#FFB300;
$sidebarBgColor:#ffffff;
$darkSidebarBgColor:#424242;

/* Primary */
$primaryColor:#FFB300;
$primaryDarkColor:#FF8F00;
$primaryLightColor:#FFD54F;
$primaryLightestColor:#FFF8E1;
$primaryTextColor:#ffffff;

/* Accent */
$accentColor:#E91E63;
$accentLightColor:#F06292;
$accentTextColor:#ffffff;

/* Topbar */
$topbarTextColor:#622b00;
$topbarIconColor:#622b00;

/* Submenu */
$submenuBgColor:#EEEEEE;
$darkSubmenuBgColor:#616161;

/* Default MenuItem */
$menuitemTextColor:#212121;
$menuitemIconTextColor:#616161;

/* Hover MenuItem */
$menuitemHoverBgColor:#E0E0E0;
$menuitemHoverTextColor:#212121;
$menuitemHoverIconTextColor:#212121;

/* Active MenuItem */
$menuitemActiveBgColor:#FFB300;
$menuitemActiveTextColor:#ffffff;
$menuitemActiveIconTextColor:#ffffff;
$subMenuitemActiveTextColor:#FFB300;
$subMenuitemActiveIconTextColor:#FFB300;

/* Dark Default MenuItem */
$darkMenuitemTextColor:#dee0e3;
$darkMenuitemIconTextColor:#dee0e3;

/* Dark Hover MenuItem */
$darkMenuitemHoverBgColor:#545454;
$darkMenuitemHoverTextColor:#FFD54F;
$darkMenuitemHoverIconTextColor:#ffffff;

/* Dark Active MenuItem */
$darkMenuitemActiveBgColor:#FFB300;
$darkMenuitemActiveTextColor:#622b00;
$darkMenuitemActiveIconTextColor:#622b00;
$darksubMenuitemActiveTextColor:#FFD54F;
$darksubMenuitemActiveIconTextColor:#FFD54F;

@import '../../sass/layout/_layout';

`
}
</CodeHighlight>

                        <p>In case you would like to customize the shared variables, the _variables.scss files are where the options are defined for layout and theme.</p>

                        <h3>sass/_variables.scss</h3>
<CodeHighlight lang="css">
{
`
$fontSize:14px;
$fontFamily:"Roboto","Helvetica Neue",sans-serif;
$textColor:#212121;
$textSecondaryColor:#757575;
$borderRadius:3px;
$dividerColor:#dbdbdb;
$dividerLightColor:#cacaca;
$transitionDuration:.3s;
$overlayMaskBgColor:#424242;
$errorColor:#e62a10;
$errorTextColor:#ffffff;

$hoverBgColor:#e8e8e8;
$hoverTextColor:#000000;

$iconFontSize:1.5em;
$iconWidth:1em;
$iconHeight:1em;

$blueGrey:#607D8B;
$cyan:#00BCD4;
$teal:#009688;
$red:#F44336;
$green:#4CAF50;
$deepOrange:#FF5722;
$purple:#673AB7;
$pink:#E91E63;
$amber:#FFC107;
$orange:#FF9800;
$brown:#795548;
$indigo:#3F51B5;

$blueGreyDark:#37474F;
$cyanDark:#00838F;
$tealDark:#009688;
$redDark:#C62828;
$greenDark:#2E7D32;
$deepOrangeDark:#D84315;
$purpleDark:#4527A0;
$pinkDark:#AD1457;
$amberDark:#FF8F00;
$orangeDark:#EF6C00;
$brownDark:#4E342E;
$indigoDark:#283593;
`
}
</CodeHighlight>
                        <h3>sass/layout/_variables.scss</h3>
<CodeHighlight lang="css">
{
`
@import '../_variables';

$bodyBgColor:#F5F5F5;
$topbarSubmenuHoverBgColor:#f1f2f7;
$topbarMobileMenuBgColor:#ffffff;
$mobileBreakpoint:1024px;
$menuScrollBarBgColor:#aaaaaa;
$topbarMenuBgColor:#ffffff;
$breadcrumbBgColor:#ffffff;
$footerBgColor:#ffffff;
`
}
</CodeHighlight>

                        <h3>sass/theme/_variables.scss</h3>
<CodeHighlight lang="css">
{
`
@import '../_variables';

$headerPadding:.625em 1em;

$contentPadding:.625em 1em;
$contentBgColor:#ffffff;
$contentBorderColor:#d8d8d8;
$contentLineHeight: 18px;

$inputBorderColor:#bdbdbd;
$inputPadding:2px 2px 1px 2px;
$inputHeaderPadding:.625em 1em;
$inputGroupAddonBgColor:#e6e6e6;
$textboxBgColor:#f7f7f7;
$inputBgColor:#ffffff;

$listItemPadding:.625em 1em;

$radioButtonBorderColor:#757575;
$checkboxBorderColor:#757575;

$dataTableBorderColor:#cacaca;
$dataTableFilterInputBgColor:#ffffff;
$dataTableEditableCellInputBorderColor:#ffffff;
$dataTableEditableCellInputColor:#ffffff;
$dataTableRowBgColorEven:#f4f4f4;
$dataTableEvenRowBgColor:#f4f4f4;

$stepsNumberBgColor:#757575;
$stepsNumberColor:#ffffff;

$infoMessageBgColor:#2196F3;
$infoMessageBorderColor:#2196F3;
$infoMessageTextColor:#ffffff;

$warnMessageBgColor:#ffc107;
$warnMessageBorderColor:#ffc107;
$warnMessageTextColor:#ffffff;

$errorMessageBgColor:#e62a10;
$errorMessageBorderColor:#e62a10;
$errorMessageTextColor:#ffffff;

$successMessageBgColor:#8BC34A;
$successMessageBorderColor:#8BC34A;
$successMessageTextColor:#ffffff;

$tooltipBgColor:#323232;
`
}
</CodeHighlight>
                        <p>In the demo app layout and theme css files are defined using link tags in index.html so the demo can switch them on
                            the fly by changing the path however if this is not a requirement, you may also import them in App.js so that webpack adds them to the bundle.</p>

                        <h1>Menu Modes</h1>
                        <p>Menu has 2 modes; static and overlay. Layout container element in App.js is used to define which mode to use by adding specific classes.
                            List below indicates the style classes for each mode.</p>

                        <ul>
                            <li>Static: "layout-wrapper layout-wrapper-static"</li>
                            <li>Overlay: "layout-wrapper"</li>
                        </ul>

                        <p>For example to create a horizontal menu, the div element should be in following form;</p>
<pre>
&lt;div className="layout-wrapper layout-wrapper-static"&gt;
</pre>

                        <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>

                        <h1>Dark Menu</h1>
                        <p>In addition to the layout options, menu also provides a dark alternative to the light mode. This mode is enabled by adding "layout-sidebar-dark" style class
                            to "layout-sidebar".</p>

                        <h1>Utilites</h1>
                        <p>Serenity provides various helper features such as material iconset compatible with PrimeReact components and helper classes. Visit utils page for details.</p>

                        <h1>PrimeFlex Grid System</h1>
                        <p>Serenity uses PrimeFlex Grid System throughout the samples, although any Grid library can be used we suggest using PrimeFlex as your grid system as it is well tested and supported by PrimeReact. PrimeFlex is
                        available at npm and defined at package.json of Serenity so that it gets installed by default.</p>

						<h1>Customizing Styles</h1>
						<p>It is suggested to add your customizations in the following sass files under the override folder instead of adding them to the
							scss files under sass folder to avoid maintenance issues after an update.</p>

						<ul>
							<li><b>_layout_variables</b>: Variables of the layout.</li>
							<li><b>_layout_styles</b>: Styles for the layout.</li>
							<li><b>_theme_variables</b>: Variables of the theme.</li>
							<li><b>_theme_styles</b>: Styles for the theme.</li>
						</ul>

                        <h1>Migration Guide</h1>
                        <b>4.0.0 to 4.0.1</b>
                        <ul>
                            <li>Update App.js</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>3.0.2 to 4.0.0</b>
                        <ul>
                            <li>Update index.jx</li>
                            <li>Update App.js</li>
                            <li>Update AppMenu.js</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

						<b>3.0.1 to 3.0.2</b>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<b>3.0.0 to 3.0.1</b>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<b>2.0.0-beta.3 to 3.0.0</b>
						<ul>
							<li>Update index.jx</li>
							<li>Update App.js</li>
							<li>Update AppBreadcrumb.js</li>
							<li>Update AppMenu.js</li>
							<li>Update AppTopbar.js</li>
							<li>Add AppWrapper.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

                        <b>2.0.0-beta.2 to 2.0.0-beta.3</b>
                        <ul>
                            <li>Update App.js</li>
                        </ul>

                        <b>2.0.0-beta.1 to 2.0.0-beta.2</b>
                        <ul>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.x to 2.0.0-beta.1</b>
                        <p>Brings support to PrimeReact 2.x</p>
                        <ul>
                            <li>Install PrimeFlex from npm.</li>
                            <li>Update src/ripple.js</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.6.0 to 1.6.1</b>
                        <p>Brings support for PrimeReact 1.6.x.</p>

                        <ul>
                            <li>Import primeicons.css in App.js.</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.5.2 to 1.6.0</b>
                        <ul>
                            <li>Update App.js</li>
                            <li>Update AppMenu.js</li>
                            <li>Update AppTopbar.js</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.5.1 to 1.5.2</b>
                        <ul>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.5.0 to 1.5.1</b>
                        <p>Aligns input focus animation with the Material specs.</p>
                        <ul>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.4.2 to 1.5.0</b>
                        <p>Serenity 1.5.0 brings Horizontal Menu mode.</p>
                        <ul>
                            <li>Update App.js</li>
                            <li>Update AppMenu.js</li>
                            <li>Update AppTopbar.js</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.4.1 to 1.4.2</b>
                        <ul>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.4.0 to 1.4.1</b>
                        <ul>
                            <li>Update theme css files</li>
                        </ul>

                        <b>1.0.0 to 1.4.0</b>
                        <ul>
                            <li>Update PrimeReact to 1.4.0</li>
                            <li>Update css files of theme and layout</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
