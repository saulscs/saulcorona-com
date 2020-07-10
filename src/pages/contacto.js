import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title' 
import {FaWhatsapp, FaMailBulk} from 'react-icons/fa' 
import SEO from '../components/SEO'

const contacto = () => {
    return (
        <Layout>
            <SEO title="Saúl Contacto"/>
            <section className="contact-page">
                <section className="section-center contact">
                    <Title title="Estamos en contacto"/>
                    <p className="contact-text">Puedes mandarme un mensaje por estos medios, 
                    platiquemos para que pueda ofrecerte la mejor solución.
                    </p>
                    <article className="contact-form">
                        <div className="contact-container">
                            <article>
                                <a href="http://bit.ly/whatsapppaginaweb" 
                                target="blank"
                                className="contact-link">
                                <FaWhatsapp/>
                                </a>
                                <a href="http://bit.ly/whatsapppaginaweb" 
                                target="blank"
                                className="contact-link">
                                <p>+ 52 5551858906</p>
                                </a>
                            </article>
                            <article>
                                <a href="/contacto" 
                                className="contact-link">
                                <FaMailBulk/>
                                </a>
                                <p>saulcoronascs@gmail.com</p>
                            </article>
                        </div>
                    </article>
                </section>
            </section>
        </Layout>
    )
}

export default contacto