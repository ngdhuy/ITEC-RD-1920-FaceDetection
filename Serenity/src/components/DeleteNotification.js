import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export class DeleteNotification extends Component {

    constructor(props) {
        super(props);
        this.state={
            id: '',
            visible: false
        }
    }

    delete = (id) =>{
        this.setState({
            id: id,
            visible: true
        })
    } 

    actionDelete = () => {
        this.props.accessDelete(this.state.id);
        this.cancelDelete();
    }

    cancelDelete = () =>{
        this.setState({
            id: '',
            visible: false
        })
    }

    render(){
        const footer = (
            <div>
                <Button label="Confirm" icon="pi pi-check" onClick={this.actionDelete} />
                <Button label="Cancel" icon="pi-md-close" className="p-button-secondary" onClick={this.cancelDelete} />
            </div>
        );
        return (
            <Dialog header={this.props.header ? this.props.header : ""} footer={footer} visible={this.state.visible} baseZIndex={1000000} contentStyle={styles.dialogContent} responsive={true} modal={true} dismissableMask={true} showHeader={false} onHide={this.cancelDelete}>
                {this.props.message ? this.props.message : 'Do you really want to delete?'}
            </Dialog>            
        );
    }
}

const styles = {
    dialogContent: {
        maxHeight: '50px',
        minHeight: '50px',
        overflow: 'hidden',
    }
}