import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core'
import logo from '../images/logo.png'
import '../styles/Menu.css';

class Menu extends Component{

    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="/">
                        <img src={logo} alt={"logo"} className={'logo'}/>
                    </Link>
                    <Link href="/actors" className="link">
                        Actors
                    </Link>
                    <Link href="/roles" className="link">
                        Roles
                    </Link>
                    <Link href="/schedules" className="link">
                        Schedules
                    </Link>
                    <Link href="/shows" className="link">
                        Shows
                    </Link>
                    <Link href="/theaters" className="link">
                        Theaters
                    </Link>
                    <Link href="/tickets" className="link">
                        Tickets
                    </Link>
                    <Link href="/visitors" className="link">
                        Visitors
                    </Link>
                    <Link href="/workers" className="link">
                        Workers
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
