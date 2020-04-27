import React, { Component } from "react";
import '../../styles/Table.css';
import axios from "axios";
import MaterialTable from 'material-table';

export default class RolesTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Nickname', field: 'psevdonym' },
                { title: 'Data show', field: 'data_show' },
                { title: 'Type', field: 'type' },
                { title: 'Sex', field: 'sex_actor' }
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/roles`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Roles Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Roles"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/roles/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/roles/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/roles/${oldData.id}`)
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
