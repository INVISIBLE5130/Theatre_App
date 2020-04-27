import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/RolesTable";

class RolesPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Roles</h1>
                <Table />
            </div>
        );
    }
}

export default RolesPage;
