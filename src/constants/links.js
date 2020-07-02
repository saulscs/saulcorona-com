import React from 'react'
import {Link} from 'gatsby'

const data = [
    {
        id:1,
        text: "inicio",
        url: "/",
    },
    {
        id: 2,
        text: "acerca",
        url: "/acerca/"
    },
    {
        id:3,
        text: "portafolio",
        url: "/portafolio/",
    },
    {
        id:4,
        text: "contacto",
        url: "/contacto/",
    }
]

const tempLinks = data.map( link => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass: ""}`}>
            {tempLinks}
        </ul>
    )
}

