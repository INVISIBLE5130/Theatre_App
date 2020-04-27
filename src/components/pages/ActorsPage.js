import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/ActorsTable";

class ActorsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Actors</h1>
                <Table />
            </div>
        );
    }
}

export default ActorsPage;
