import React from 'react'
import {graphql} from 'gatsby'
import Title from '../components/Title'
import Image from 'gatsby-image'
import Layout from '../components/Layout'



 const acerca = ({
     data:{
         about:{nodes},
        }
    }) => {
    const {title,info,stack,image} = nodes[0]; 
    return (
        <Layout>
            <section className="about-page">
                <section className="section-center about-center">
                    <Image 
                        fluid={image.childImageSharp.fluid}
                        className="about-img"/>
                    <article className="about-text">
                        <Title title={title}/>
                        <p>{info}</p>
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