import React from 'react'
import Title from './Title'
import SingleService from '../constants/services'


 const Services = () => {
    return (
        <section className="section bg-grey">
            <Title title="servicios"/>
            <div className="section-center services-center">
                {SingleService.map( (service) => {
                    const {id, icon, title, text} = service
                    return (
                        <article key={id} className="service">
                            {icon}
                            <h4>{title}</h4>
                            <div className="underline"></div>
                            <p>{text}</p>
                        </article>
                    )
                } )}
            </div>
        </section>
    )
}

export default Services