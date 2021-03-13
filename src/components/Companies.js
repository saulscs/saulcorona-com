import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


 const Companies = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["krovh","IpesaPinturas","googoojob","CNU"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
     return(
         <div className="companies-section">
             <article className="companies__images section-center">
             {data.allFile.edges.map((image, key) => (
            <Img
                key={key}
                className="companies__images--img"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
            />
            ))}
                </article>
         </div>
     )
 }

 export default Companies