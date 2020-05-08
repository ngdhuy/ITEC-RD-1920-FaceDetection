import React, {Component} from 'react';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import {EventService} from '../service/EventService';
import {OrganizationChart} from 'primereact/organizationchart';
import {DataTable} from 'primereact/datatable';
import {Tree} from 'primereact/tree';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column'
import {PickList} from 'primereact/picklist';
import {OrderList} from 'primereact/orderlist';
import {FullCalendar} from 'primereact/fullcalendar';
import {Panel} from 'primereact/panel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Carousel} from 'primereact/carousel';

export class DataDemo extends Component {

    constructor() {
        super();
        this.state = {
            dataTableValue:[],
            datatableBrand: null,
            datatableColors: null,
            dataViewValue:[],
            picklistSourceCars:[],
            picklistTargetCars:[],
            orderlistCars:[],
            treeData1:[],
            treeData2:[],
            selectedFile:null,
            selectedFiles:null,
            documents:[],
            documentsSelection:[],
            carouselCars:[],
            fullcalendarEvents:[],
            fullcalendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2016-01-12',
                header: {
                    left: 'prev,next, today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            },
            layout: 'list',
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ],
            organizationChartValue: [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }]
        };

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        this.carService = new CarService();
        this.nodeService = new NodeService();
        this.eventService = new EventService();

        this.dataViewItemTemplate = this.dataViewItemTemplate.bind(this);
        this.pickListTemplate = this.pickListTemplate.bind(this);
        this.orderListTemplate = this.orderListTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
        this.carouselItemTemplate = this.carouselItemTemplate.bind(this);
    }

    componentDidMount() {
        this.carService.getCarsMedium().then(data => this.setState({dataTableValue: data}));
        this.nodeService.getTreeNodes(this).then(nodes => this.setState({treeData1: nodes}));
        this.nodeService.getTreeNodes(this).then(nodes => this.setState({treeData2: nodes}));
        this.carService.getCarsLarge().then(data => this.setState({dataViewValue: data}));
        this.nodeService.getTreeTableNodes(this).then(files => this.setState({documents: files}));
        this.carService.getCarsMedium().then(data => this.setState({picklistSourceCars: data}));
        this.carService.getCarsSmall().then(data => this.setState({orderlistCars: data}));
        this.eventService.getEvents().then(events => this.setState({fullcalendarEvents: events}));
        this.carService.getCarsSmall().then(data => this.setState({carouselCars: data}));
    }

    pickListTemplate(car){
        if (!car) {
            return;
        }

        return <div className="p-clearfix">
            <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block', margin:'2px 0 2px 2px', width: '50px'}}/>
            <div style={{fontSize:'16px', float:'right', margin:'15px 5px 0 0'}}>{car.brand}</div>
        </div>
    }

    orderListTemplate(car){
        if (!car) {
            return;
        }

        return (
            <div className="p-clearfix">
                <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block',margin:'2px 0 2px 2px', width: '50px'}}/>
                <div style={{fontSize:14,float:'right',margin:'15px 5px 0 0'}}>{car.year} - {car.color}</div>
            </div>
        );
    }

    dataViewItemTemplate(car,layout) {
        if (!car) {
            return;
        }

        let src = "assets/demo/images/car/" + car.brand + ".png";

        if (layout === 'list') {
            return (
                <div className="p-col-12">
                    <div className="car-details">
                        <div>
                            <img src={src} alt={car.brand}/>
                            <div className="p-grid">
                                <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                                <div className="p-col-12">Year: <b>{car.year}</b></div>
                                <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                                <div className="p-col-12">Color: <b>{car.color}</b></div>
                            </div>
                        </div>
                        <Button icon="pi-md-search"></Button>
                    </div>
                </div>
            );
        }

        if (layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
                    <Panel header={car.vin} style={{ textAlign: 'center' }}>
                        <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} />
                        <div className="car-detail">{car.year} - {car.color}</div>
                        <Button icon="pi-md-search"></Button>
                    </Panel>
                </div>
            );
        }
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0)
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        else
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'brand', 'equals');
        this.setState({datatableBrand: event.value});
    }

    onColorChange(event) {
        this.dt.filter(event.value, 'color', 'in');
        this.setState({datatableColors: event.value});
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-search" className="p-button-success" style={{marginRight: '.5em'}}/>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"/>
        </div>;
    }

    carouselItemTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter separator">
                    <div className="p-col-12">
                        <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi-md-search" className="p-button-secondary" />
                            <Button icon="pi-md-star" className="p-button-secondary" />
                            <Button icon="pi-md-settings" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const dataviewHeader = (
            <div className="p-grid">
                <div className="p-col-12 p-md-4" style={{textAlign:'left'}}>
                    <Dropdown options={this.state.sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} />
                </div>
                <div className="p-col-6 p-md-4">
                    <InputText placeholder="Search by brand" onKeyUp={event => this.dv.filter(event.target.value)} />
                </div>
                <div className="p-col-6 p-md-4" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={event => this.setState({layout: event.value})} />
                </div>
            </div>
        );

        let datatableBrands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        let brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={this.state.datatableBrand} options={datatableBrands} onChange={this.onBrandChange}/>

        let datatableColors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        let colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select a Color" value={this.state.datatableColors} options={datatableColors} onChange={this.onColorChange}/>

        let actionHeader = <Button type="button" icon="pi-md-settings"/>;

        let treetableFooter = <div style={{textAlign:'left'}}><Button icon="pi-md-refresh" className="p-button-success" tooltip="Reload"/></div>;

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title datatable-demo">
                        <h1>DataTable</h1>
                        <DataTable ref={(el) => this.dt = el} value={this.state.dataTableValue} selectionMode="single" header="List of Cars" paginator={true} rows={10}
                                   responsive={true} selection={this.state.dataTableSelection1} onSelectionChange={event => this.setState({dataTableSelection1: event.value})}>
                            <Column field="vin" header="Vin" sortable={true} filter={true} filterPlaceholder="Starts with"/>
                            <Column field="year" header="Year" sortable={true} filter={true} filterPlaceholder="Contains"/>
                            <Column field="brand" header="Brand" sortable={true} filter={true} filterElement={brandFilter}/>
                            <Column field="color" header="Color" sortable={true} filter={true} filterElement={colorFilter}/>
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title dataview-demo">
                        <h1>DataView</h1>
                        <DataView ref={el => this.dv = el} value={this.state.dataViewValue} filterBy="brand" itemTemplate={this.dataViewItemTemplate} layout={this.state.layout}
                                  paginatorPosition={'both'} paginator={true} rows={10} header={dataviewHeader} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>
                    </div>
                </div>

                <div className="p-col-12 p-md-8">
                    <div className="card card-w-title">
                        <h1>PickList</h1>
                        <PickList source={this.state.picklistSourceCars} target={this.state.picklistTargetCars} sourceHeader="Available" targetHeader="Selected"
                                  responsive={true} itemTemplate={this.pickListTemplate} sourceStyle={{height:250}} targetStyle={{height:250}}
                                  onChange={event => this.setState({picklistSourceCars: event.source, picklistTargetCars: event.target})} />
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <div className="card card-w-title">
                        <h1>OrderList</h1>
                        <OrderList value={this.state.orderlistCars} responsive={true} header="OrderList" listStyle={{height:250}}
                                   itemTemplate={this.orderListTemplate} onChange={event => this.setState({orderlistCars: event.value})}/>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <h1>Tree</h1>
                                <Tree value={this.state.treeData1} selectionMode="single" selectionKeys={this.state.selectedFile}
                                      onSelectionChange={event => this.setState({selectedFile: event.value})}/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <h1>Checkbox Tree</h1>
                                <Tree value={this.state.treeData2} selectionMode="checkbox" selectionKeys={this.state.selectedFiles}
                                      onSelectionChange={event => this.setState({selectedFiles: event.value})}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>TreeTable</h1>
                        <TreeTable value={this.state.documents} header="Documents" selectionMode="checkbox" footer={treetableFooter}
                                   selectionKeys={this.state.documentsSelection} onSelectionChange={event => this.setState({documentsSelection: event.value})}>
                            <Column field="name" header="Name" expander/>
                            <Column field="size" header="Size" sortable/>
                            <Column field="type" header="Type"/>
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </TreeTable>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title" style={{overflow: 'auto'}}>
                        <h1>Organization Chart</h1>
                        <OrganizationChart value={this.state.organizationChartValue} />
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title carousel-demo">
                        <h1>Carousel</h1>
                        <Carousel value={this.state.carouselCars} itemTemplate={this.carouselItemTemplate} numVisible={4} numScroll={3} responsiveOptions={this.responsiveOptions}></Carousel>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Schedule</h1>
                        <FullCalendar events={this.state.fullcalendarEvents} options={this.state.fullcalendarOptions}/>
                    </div>
                </div>
            </div>
        );
    }
}
