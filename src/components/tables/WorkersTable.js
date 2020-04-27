import React, { Component } from "react";
import '../../styles/Table.css';
import axios from "axios";
import MaterialTable from 'material-table';

export default class WorkersTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Address', field: 'address' },
                { title: 'Age', field: 'age' },
                { title: 'Duties', field: 'duties' },
                { title: 'Marital status', field: 'marital_status' },
                { title: 'Amount of children', field: 'quantity_children' },
                { title: 'Position', field: 'position' },
                { title: 'Phone number', field: 'phone' }
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/workers`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Workers Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Workers"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/workers/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/workers/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/workers/${oldData.id}`)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }}
            />
        );
    }
}
