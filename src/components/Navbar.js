import React from 'react'
import PageLinks from '../constants/links'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'gatsby'

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <p className="logo">SAÚL CORONA</p>
                    </Link>
                    <button 
                        type="button" 
                        className="toggle-btn"
                        onClick={toggleSidebar}>
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}

export default Navbar