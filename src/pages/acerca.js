import React from 'react'
import {graphql} from 'gatsby'
import Title from '../components/Title'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'



 const acerca = ({
     data:{
         about:{nodes},
        }
    }) => {
    const {title,stack,image} = nodes[0]; 
    return (
        <Layout>
          <SEO title="Acerca de Saúl"/>
            <section className="about-page">
                <section className="section-center about-center">
                    <Image 
                        fluid={image.childImageSharp.fluid}
                        className="about-img"/>
                    <article className="about-text">
                        <Title title={title}/>
                        <p>Soy un Desarrollador web, con experiencia en empresas de tecnología de alto crecimiento. </p>
                        
                        <p>He trabajando en la parte de programación, diseño y experiencia de usuario. </p>
                        
                        <p>Consultor en temas de construcción de marca personal , marketing online e implementación de herramientas tecnológicas en las empresas.</p>
                        
                        <p>Tambíen doy platicas y conferencias para instituciones, empresas o cumunidades, <a href="https://youtu.be/vNWB_mEgRAo" target="_blank" rel="noreferrer">aquí un ejemplo.</a>
                        </p>
                        
                        <div className="about-stack">
                        {stack.map( (item)=> {
                            return (
                            <span key={item.id}>{item.title}</span>
                            )
                        })}
                        </div>
                    </article>
                </section>
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default acerca