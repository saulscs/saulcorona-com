import React from 'react'
import SocialLinks from '../constants/socialLinks'
import {Link} from 'gatsby'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <SocialLinks styleClass="footer-links"></SocialLinks>
                <h4>
                    Copyright&copy;{new Date().getFullYear()}
                    <span>SAÚL CORONA</span> Todos los derechos reservados
                </h4>
            </div>
            <Link 
                target="_blank" 
                href="http://bit.ly/whatsapppaginaweb"
                className="whatsapp-button"
                rel="noreferrer">
                <FaWhatsapp className="social-icon"></FaWhatsapp></Link>
        </footer>
    )
}

export default Footer