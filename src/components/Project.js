import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'



 const Project = ({description, title,url,image,stack}) => {
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

Project.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project


