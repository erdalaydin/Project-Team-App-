import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class SignedLinks extends Component {



    render() {
        return (
            <ul className="right">
                <li><NavLink to="/createproject">New Project</NavLink></li>
                <li><NavLink to="/signout">Sign Out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">EA</NavLink></li>
            </ul>
        )
    }
}
