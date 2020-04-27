import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/SchedulesTable";

class SchedulesPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Schedules</h1>
                <Table />
            </div>
        );
    }
}

export default SchedulesPage;
