import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/WorkersTable";

class WorkersPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Workers</h1>
                <Table />
            </div>
        );
    }
}

export default WorkersPage;
