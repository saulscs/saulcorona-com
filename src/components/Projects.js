import React from 'react'
import Title from './Title'
import Project from './Project'
import {MoreBtn} from '../constants/buttons'


 const Projects = ({projects,title, showLink}) => {
    
    return (
        <section className="section projects">
            <Title title={title} />
            <div className="section-center projects-center">
                {projects.map((project, index)=> {
                    return (
                        <Project 
                            key={project.id} 
                            index={index}
                            {...project}
                        />
                    )
                })}
            </div>
            {showLink && (
                    <MoreBtn  title="Ver más" link="/portafolio"/>
                )}
        </section>
    )
}

export default Projects