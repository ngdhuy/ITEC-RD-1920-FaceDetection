import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {Menu} from 'primereact/components/menu/Menu';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {InputText} from 'primereact/components/inputtext/InputText';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {FullCalendar} from 'primereact/components/fullcalendar/FullCalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Chart} from 'primereact/components/chart/Chart';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            chartData : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#4bc0c0'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#565656'
                    }
                ]
            },
			events: [
				{
					"id": 1,
					"title": "All Day Event",
					"start": "2017-02-01"
				},
				{
					"id": 2,
					"title": "Long Event",
					"start": "2017-02-07",
					"end": "2017-02-10"
				},
				{
					"id": 3,
					"title": "Repeating Event",
					"start": "2017-02-09T16:00:00"
				},
				{
					"id": 4,
					"title": "Repeating Event",
					"start": "2017-02-16T16:00:00"
				},
				{
					"id": 5,
					"title": "Conference",
					"start": "2017-02-11",
					"end": "2017-02-13"
				},
				{
					"id": 6,
					"title": "Meeting",
					"start": "2017-02-12T10:30:00",
					"end": "2017-02-12T12:30:00"
				},
				{
					"id": 7,
					"title": "Lunch",
					"start": "2017-02-12T12:00:00"
				},
				{
					"id": 8,
					"title": "Meeting",
					"start": "2017-02-12T14:30:00"
				},
				{
					"id": 9,
					"title": "Happy Hour",
					"start": "2017-02-12T17:30:00"
				},
				{
					"id": 10,
					"title": "Dinner",
					"start": "2017-02-12T20:00:00"
				},
				{
					"id": 11,
					"title": "Birthday Party",
					"start": "2017-02-13T07:00:00"
				},
				{
					"id": 12,
					"title": "Click for Google",
					"url": "http://google.com/",
					"start": "2017-02-28"
				}
			],
			fullcalendarOptions: {
				plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultView: 'dayGridMonth',
				defaultDate: '2017-02-01',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
			}
        };
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {

        let items = [
            {label: 'Save', icon: 'pi-md-check'},
            {label: 'Update', icon: 'pi-md-refresh'},
            {label: 'Delete', icon: 'pi-md-delete'}
        ];

        let cities = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        let panelHeader =
           <span>Global Sales by Region <span className="header-helper">Last Update: 21m</span></span>;

        return <div className="p-grid dashboard">
            <div className="p-col-12 p-lg-4">
                <div className="task-box task-box-1">
                    <div className="task-box-header">
                        <i className="material-icons">refresh</i>
                    </div>
                    <div className="task-box-content">
                        <h3>Client Meeting</h3>
                        <p>Waiting brief from the client</p>
                    </div>
                    <div className="task-box-footer">
                        <span className="task-status">WAITING</span>
                        <img src="assets/layout/images/avatar1.png" alt="avatar1"/>
                        <img src="assets/layout/images/avatar2.png" alt="avatar2"/>
                        <img src="assets/layout/images/avatar3.png" alt="avatar3"/>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="task-box task-box-2">
                    <div className="task-box-header">
                        <i className="material-icons">refresh</i>
                    </div>
                    <div className="task-box-content">
                        <h3>Sale Reports</h3>
                        <p>Annual reports per branch</p>
                    </div>
                    <div className="task-box-footer">
                        <span className="task-status">IN PROGRESS</span>
                        <img src="assets/layout/images/avatar2.png" alt="avatar2"/>
                        <img src="assets/layout/images/avatar3.png" alt="avatar3"/>
                        <img src="assets/layout/images/avatar4.png" alt="avatar4"/>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="task-box task-box-3">
                    <div className="task-box-header">
                        <i className="material-icons">refresh</i>
                    </div>
                    <div className="task-box-content">
                        <h3>Marketing Meeting</h3>
                        <p>Marketing meeting to review sales.</p>
                    </div>
                    <div className="task-box-footer">
                        <span className="task-status">ON HOLD</span>
                        <img src="assets/layout/images/avatar1.png" alt="avatar1"/>
                        <img src="assets/layout/images/avatar2.png" alt="avatar2"/>
                        <img src="assets/layout/images/avatar3.png" alt="avatar3"/>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-1">
                    <div className="overview-box-header"></div>
                    <div className="overview-box-content">
                        <div className="overview-box-icon"><i className="material-icons">inbox</i></div>
                        <div className="overview-box-title">Messages</div>
                        <div className="overview-box-count">152</div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-2">
                    <div className="overview-box-header"></div>
                    <div className="overview-box-content">
                        <div className="overview-box-icon"><i className="material-icons">person_pin_circle</i></div>
                        <div className="overview-box-title">Check-Ins</div>
                        <div className="overview-box-count">532</div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-3">
                    <div className="overview-box-header"></div>
                    <div className="overview-box-content">
                        <div className="overview-box-icon"><i className="material-icons">insert_drive_file</i></div>
                        <div className="overview-box-title">Files Sycned</div>
                        <div className="overview-box-count">28</div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-4">
                    <div className="overview-box-header"></div>
                    <div className="overview-box-content">
                        <div className="overview-box-icon"><i className="material-icons">supervisor_account</i></div>
                        <div className="overview-box-title">Users Online</div>
                        <div className="overview-box-count">256</div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-lg-4 task-list">
                <Panel header="Tasks">
                    <Button icon="pi-md-menu" className="secondary-btn"  onClick={(event) => this.menu.toggle(event)}/>
                    <Menu ref={el=>this.menu=el} popup={true} model={items}></Menu>
                    <ul className="task-list-container">
                        <li>
                            <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                            <span className="task-name">Sales Reports</span>
                            <i className="material-icons">&#xE8C9;</i>
                        </li>
                        <li>
                            <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                            <span className="task-name">Pay Invoices</span>
                            <i className="material-icons">&#xE8A1;</i>
                        </li>
                        <li>
                            <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3')>-1?true:false}></Checkbox>
                            <span className="task-name">Dinner with Tony</span>
                            <i className="material-icons">&#xE561;</i>
                        </li>
                        <li>
                            <Checkbox value="task4" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task4')>-1?true:false}></Checkbox>
                            <span className="task-name">Client Meeting</span>
                            <i className="material-icons">&#xE7FB;</i>
                        </li>
                        <li>
                            <Checkbox value="task5" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task5')>-1?true:false}></Checkbox>
                            <span className="task-name">New Theme</span>
                            <i className="material-icons">&#xE3AE;</i>
                        </li>
                        <li>
                            <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task6')>-1?true:false}></Checkbox>
                            <span className="task-name">Flight Ticket</span>
                            <i className="material-icons">&#xE01B;</i>
                        </li>
                    </ul>
                </Panel>
            </div>
            <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                <Panel header="Contact Us">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <Dropdown value={this.state.city} options={cities} placeholder="Select a City" onChange={this.onCityChange} autoWidth={false} />
                        </div>
                        <div className="p-col-12">
                                    <span className="md-inputfield">
                                        <InputText id="name" type="text" />
                                        <label htmlFor="name">Name</label>
                                    </span>
                        </div>
                        <div className="p-col-12">
                                    <span className="md-inputfield">
                                        <InputText id="age" type="text" />
                                        <label htmlFor="age">Age</label>
                                    </span>
                        </div>
                        <div className="p-col-12">
                                    <span className="md-inputfield">
                                        <InputText id="messages" type="text" />
                                        <label htmlFor="message">Message</label>
                                    </span>
                        </div>
                    </div>
                    <Button type="button" label="Send" icon="pi-md-send"></Button>
                </Panel>
            </div>
            <div className="p-col-12 p-lg-4 messages">
                <Panel header="Messages">
                    <ul>
                        <li>
                            <div>
                                <img src="assets/layout/images/avatar1.png" width="45" alt="avatar1"/>
                                    <div>
                                        <span className="name">Joshua Williams</span>
                                        <span className="message">Sales reports attached.</span>
                                    </div>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="assets/layout/images/avatar2.png" width="45" alt="avatar2"/>
                                    <div>
                                        <span className="name">Emily Watson</span>
                                        <span className="message">Meeting at 2pm tomorrow.</span>
                                    </div>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="assets/layout/images/avatar3.png" width="45" alt="avatar3"/>
                                    <div>
                                        <span className="name">James White</span>
                                        <span className="message">Status update required.</span>
                                    </div>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="assets/layout/images/avatar4.png" width="45" alt="avatar4"/>
                                    <div>
                                        <span className="name">David Hughes</span>
                                        <span className="message">Exchange rates estimates.</span>
                                    </div>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                            </div>
                        </li>
                    </ul>
                </Panel>
            </div>
            <div className="p-col-12 p-lg-6 p-grid-nopad">
                <div className="p-col-12 chat">
                    <Panel header="Chat">
                        <TabView>
                            <TabPanel header="Sales Team">
                                <ul className="chat-messages">
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar2.png" alt="serenity-layout" />
                                        <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
                                    </li>
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar2.png" alt="serenity-layout" />
                                        <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
                                    </li>
                                    <li className="message-own">
                                        <span>Sed ut perspiciatis unde omnis iste natus.</span>
                                    </li>
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar2.png" alt="serenity-layout" />
                                        <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>At vero eos et accusamus.</span>
                                    </li>
                                </ul>
                            </TabPanel>
                            <TabPanel header="Design Team">
                                <ul className="chat-messages">
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar3.png" alt="serenity-layout" />
                                        <span>Cliche flannel fam mixtape.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>Tofu glossier bicycle rights banh mi direct trade austin salvia slow-carb occupy.</span>
                                    </li>
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar3.png" alt="serenity-layout" />
                                        <span>Crucifix tote bag pork belly distillery church-key jianbing jean shorts taxidermy.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>Deep v hexagon street art migas butcher, keytar biodiesel bicycle rights typewriter cornhole actually next.</span>
                                    </li>
                                    <li className="message-own">
                                        <span>Oh. You need a little dummy text for your mockup? How quaint.</span>
                                    </li>
                                    <li className="message-from">
                                        <img src="assets/layout/images/avatar3.png" alt="serenity-layout" />
                                        <span>Salvia woke bushwick leggings mumblecore poke tumblr master cleanse.</span>
                                    </li>
                                    <li className="message-own">
                                        <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                                        <span>Skateboard ethical adaptogen, quinoa wolf poutine echo park.</span>
                                    </li>
                                </ul>
                            </TabPanel>
                        </TabView>

                        <div className="new-message">
                            <div className="message-attachment">
                                <i className="material-icons">&#xE226;</i>
                            </div>
                            <div className="message-input">
                                <input type="text" placeholder="Write a message" />
                            </div>
                        </div>
                    </Panel>
                </div>
                <div className="p-col-12 status-bars">
                    <div className="card">
                        <ul>
                            <li>
                                <div className="status-bar status-bar-1">
                                    <div className="status-bar-value" style={{width:'22%'}}>22%</div>
                                </div>
                                <span>Users</span>
                                <i className="material-icons">&#xE853;</i>
                            </li>
                            <li>
                                <div className="status-bar status-bar-2">
                                    <div className="status-bar-value" style={{width:'78%'}}>78%</div>
                                </div>
                                <span>Confirmed</span>
                                <i className="material-icons">&#xE86C;</i>
                            </li>
                            <li>
                                <div className="status-bar status-bar-3">
                                    <div className="status-bar-value" style={{width:'51%'}}>51%</div>
                                </div>
                                <span>Defects</span>
                                <i className="material-icons">&#xE868;</i>
                            </li>
                            <li>
                                <div className="status-bar status-bar-4">
                                    <div className="status-bar-value" style={{width:'68%'}}>68%</div>
                                </div>
                                <span>Issues</span>
                                <i className="material-icons">&#xE8B2;</i>
                            </li>
                            <li>
                                <div className="status-bar status-bar-5">
                                    <div className="status-bar-value" style={{width:'80%'}}>80%</div>
                                </div>
                                <span>Searches</span>
                                <i className="material-icons">&#xE8B6;</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-6 p-grid-nopad">
                <div className="p-col-12 global-sales">
                    <Panel header={panelHeader}>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total Sales</th>
                                <th>Change</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="assets/layout/images/dashboard/flag-brazil.png" alt="serenity-layout" width="45"/></td>
                                <td>BRAZIL</td>
                                <td>4234</td>
                                <td>35%</td>
                                <td><i className="material-icons up-arrow">&#xE5D8;</i></td>
                                <td>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src="assets/layout/images/dashboard/flag-china.png" alt="serenity-layout" width="45"/></td>
                                <td>CHINA</td>
                                <td>3214</td>
                                <td>25%</td>
                                <td><i className="material-icons up-arrow">&#xE5D8;</i></td>
                                <td>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><img src="assets/layout/images/dashboard/flag-belgium.png" alt="serenity-layout" width="45"/></td>
                                <td>BELGIUM</td>
                                <td>2842</td>
                                <td>28%</td>
                                <td><i className="material-icons down-arrow">&#xE5DB;</i></td>
                                <td>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><img src="assets/layout/images/dashboard/flag-france.png" alt="serenity-layout" width="45"/></td>
                                <td>FRANCE</td>
                                <td>1942</td>
                                <td>15%</td>
                                <td><i className="material-icons down-arrow">&#xE5DB;</i></td>
                                <td>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><img src="assets/layout/images/dashboard/flag-uk.png" alt="serenity-layout" width="45"/></td>
                                <td>UK</td>
                                <td>1956</td>
                                <td>25%</td>
                                <td><i className="material-icons up-arrow">&#xE5DB;</i></td>
                                <td>
                                    <Button icon="pi-md-close" title="Reply" className="remove-btn"></Button>
                                    <Button icon="pi-md-message" title="Reply" className="message-btn secondary-btn"></Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Panel>
                </div>
                <div className="p-col-12 image-box">
                    <div className="card">
                        <img src="assets/layout/images/dashboard/gradient-waters.png" alt="serenity-layout" />

                        <div className="image-box-content">
                            <h3>Gradient Waters</h3>
                            <span className="image-box-tag">article</span>
                            <p>
                                Derive inexpedient reason law virtues superiority victorious. Overcome pious horror suicide revaluation. Holiest ocean society disgust passion value love.
                                Faithful mountains morality hope disgust merciful moral will revaluation society fearful love.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
                                culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                            <p>
                                In et blandit turpis, ut congue nibh. Nam vitae tincidunt nunc, sed accumsan lacus. Sed efficitur malesuada augue ut varius. Pellentesque ultricies leo massa, eu posuere diam sodales quis.
                            </p>
                            <div className="image-box-footer">
                                <Button icon="pi-md-close" title="Close" label="Close" className="remove-btn orange-btn" style={{marginRight:'4px'}}></Button>
                                <Button icon="pi-md-add" title="New" label="New" className="message-btn secondary-btn"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-8">
                <div className="card">
                    <DataTable value={this.state.cars} selectionMode="single" header="Recent Sales" style={{marginBottom: '20px'}}
                               selection={this.state.dataTableSelectValue} onSelectionChange={(e) => this.setState({dataTableSelectValue: e.value})}>
                        <Column field="vin" header="Vin" sortable={true}/>
                        <Column field="year" header="Year" sortable={true}/>
                        <Column field="brand" header="Brand" sortable={true}/>
                        <Column field="color" header="Color" sortable={true}/>
                    </DataTable>

                    <Panel header="Sales Graph">
                        <Chart type="line" data={this.state.chartData} />
                    </Panel>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="p-col-12">
                    <div className="user-card card">
                        <div className="user-card-header">
                            <img src="assets/layout/images/dashboard/usercard.png" alt="serenity-layout" width="100"/>
                        </div>
                        <div className="user-card-content">
                            <img src="assets/layout/images/avatar.png" alt="serenity-layout" />
                            <Button icon="pi-md-settings" className="secondary-btn"></Button>

                            <div className="user-card-name">
                                <span>Wendy Lorina</span>
                            </div>

                            <div className="user-detail">
                                <ul>
                                    <li className="clearfix">
                                        <i className="material-icons">assignment</i>
                                        <span className="project-title">Tasks</span>
                                        <span className="project-detail">3 open</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{width: '50%'}}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="material-icons">attach_money</i>
                                        <span className="project-title">Revenue</span>
                                        <span className="project-detail">+20%</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{width: '20%'}}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="material-icons">payment</i>
                                        <span className="project-title">Payments</span>
                                        <span className="project-detail">24 new</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{width: '65%'}}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="material-icons">business_center</i>
                                        <span className="project-title">Clients</span>
                                        <span className="project-detail">+80%</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{width: '80%'}}></div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <i className="material-icons">pie_chart</i>
                                        <span className="project-title">Turnover</span>
                                        <span className="project-detail">+40%</span>
                                        <div className="project-progressbar">
                                            <div className="project-progressbar-value" style={{width: '40%'}}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 map">
                    <Panel header="Map">
                        <img src="assets/layout/images/dashboard/map.png" alt="serenity-layout" />
                    </Panel>
                </div>
            </div>
            <div className="p-col-12 schedule">
                <Panel header="Calendar" style={{height: '100%'}}>
					<FullCalendar  events={this.state.events} options={this.state.fullcalendarOptions} />
                </Panel>
            </div>
        </div>;
    }
}