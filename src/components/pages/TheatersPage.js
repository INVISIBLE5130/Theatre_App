import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/TheatersTable";

class TheatersPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Theaters</h1>
                <Table />
            </div>
        );
    }
}

export default TheatersPage;
