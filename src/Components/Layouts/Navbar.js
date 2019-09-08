import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedLinks from './SignedLinks'
import SignOut from './SignOut'


export default class Navbar extends Component {



    render() {
        return (
            <nav className="nav-wrapper orange darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo center">Erdal Aydin</Link>
                    <SignedLinks />
                    <SignOut />
                </div>
            </nav>
        )
    }
}
