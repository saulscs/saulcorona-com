import React from 'react'
import Title from './Title'
import SigleReference from '../constants/references'

 const References = () => {
    return (
        <section className="section reference">
            <Title title="referencias"/>
            <div className="section-center services-center">
                {SigleReference.map((reference) => {
                    const {id,img,title,designation,description} = reference
                    return(
                        <article key={id} className="service">
                            <a href="https://bit.ly/referenciasFacebook" target="blank">
                            <img src={img} alt={title}/>
                            </a>
                            <h4>{title}</h4>
                            <p className="designation">{designation}</p>
                            <div className="underline"></div>
                            <p>{description}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default References