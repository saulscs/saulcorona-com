import React from 'react'
import {Link} from 'gatsby'
import SocialLinks from '../constants/socialLinks'

const Hero = () => {
    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div>
                        <div className="underline"></div>
                        <h1>Soy Saúl Corona</h1>
                        <h4>Programador freelance</h4>
                        <Link to ="/contacto" className="btn">
                            Contáctame
                        </Link>
                        <SocialLinks/>
                    </div>
                </article>
            </div>
        </header>
    )
}

export default Hero