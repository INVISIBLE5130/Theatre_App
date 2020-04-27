import React, { Component } from "react";
import '../../styles/Table.css';
import axios from "axios";
import MaterialTable from 'material-table';

export default class ShowsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'Genre', field: 'genre' },
                { title: 'Plot', field: 'plot' },
                { title: 'Budget', field: 'budget' },
                { title: 'Painter', field: 'painter' },
                { title: 'Name', field: 'name' },
                { title: 'Director', field: 'director' }
            ],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/shows`)
            .then((response) => this.setState({
                data: response.data
            }))
            .catch( (err) => console.log('[Shows Table get data]: ' + err) );
    }

    render() {
        console.log(this.state);
        return (
            <MaterialTable
                title="Shows"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: async (newData) => {
                        axios.post('http://localhost:5000/api/v1/shows/', newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowUpdate: (newData) => {
                        axios.put(`http://localhost:5000/api/v1/shows/${newData.id}`, newData)
                            .then(function (response) {
                                document.location.reload(true);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    },
                    onRowDelete: (oldData) =>{
                        axios.delete(`http://localhost:5000/api/v1/shows/${oldData.id}`)
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
