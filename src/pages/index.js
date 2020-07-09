import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import References from '../components/References'



export default ({data}) => {
    const {
        allStrapiProjects:{nodes:projects},
    } = data
    return (
        <Layout>
            <Hero/>
            <Services/>
            <Jobs/>
            <Projects projects={projects} title="portafolio" showLink/>
            <References/>
        </Layout>
    )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: strapiId, order: DESC}, limit: 3) {
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