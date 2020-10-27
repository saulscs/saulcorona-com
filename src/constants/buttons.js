import React from 'react'
import {Link} from 'gatsby'




export const MoreBtn = ({title,link,styleClass}) =>{
    return(
        <Link 
            className={`btn ${styleClass ? styleClass: "center-btn"}`}
            href={link}
        >{title}</Link>
    )
}

