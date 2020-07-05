import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { FaPython } from 'react-icons/fa'


 const Project = ({description, title,url,image,stack,index}) => {
     console.log(title)
    return (
        <article className="project">
            <Image fluid={image.childImageSharp.fluid} className="project-img"/>
            <div className="project-info">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
            <div className="project-stack">
                {stack.map( (item) => {
                    return (
                    <span key={item.id}>{item.title}</span>
                    )
                })}
            </div>
            <span className="project-links">
                <a href={url} target="blank">
                    VISITAR
                </a>
            </span>
            </div>
        </article>
    )
}

Project.propTypes = {}

export default Project


