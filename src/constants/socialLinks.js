import React from 'react'

import {
    FaWhatsapp,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
} from 'react-icons/fa'

const data = [
    {
        id:1,
        icon: <FaWhatsapp className="social-icon"></FaWhatsapp>,
        url: "http://bit.ly/whatsapppaginaweb",
    },
    {
        id: 2,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "http://bit.ly/facebookpaginaweb",
    },
    {
        id: 3,
        icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
        url: "http://bit.ly/instagrampaginaweb2",
    },
    {
        id: 4,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "http://bit.ly/linkedinpaginaweb",
    },
    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "http://bit.ly/twitter-ytscs",
    },
]

const links = data.map( link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link" target="blank" >
                {link.icon}
            </a>
        </li>
    )
})

export default  ({styleClass}) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}
