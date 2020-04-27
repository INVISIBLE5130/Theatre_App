import React, { Component } from "react";
import '../../styles/Table.css';
import axios from "axios";
import MaterialTable from 'material-table';

export default class SchedulesTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name_show' },
                { title: 'Type', field: 'number_show' },
                { title: 'Date', field: 'data_show' },
                { title: 'Duration', field: 'duration_show' }
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/schedules`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Schedules Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Schedules"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/schedules/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/schedules/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/schedules/${oldData.id}`)
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
