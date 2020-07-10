import React from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'


const portafolio = ({
    data:{allStrapiProjects:{nodes:projects}},
}) => {
    return (
        <Layout>
          <SEO title="Saúl Portafolio"/>
            <section className="projects-page">
                <Projects projects={projects} title="Mi portafolio"/>
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: strapiId, order: DESC}) {
      nodes {
        id
        title
        url
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`


export default portafolio