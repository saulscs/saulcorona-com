import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc:description
        author
        twitterUsername
        siteUrl
        img
      }
    }
  }
`

const SEO = ({title, description}) => {
    const  {site} = useStaticQuery(query)
    const {
        siteTitle,
        siteDesc,
        author,
        siteUrl,
        img,
        twitterUsername} = site.siteMetadata
    return (
        <Helmet 
            htmlAttributes={{lang:"es"}} 
            title={`${title} | ${siteTitle}`}>
            <meta 
                name="description" 
                content={description || siteDesc}></meta>
            <meta name="image" content={img}></meta>
            {/*twitter cards */}
            <meta name="twitter:card" content="sumary_large_image"/>
            <meta name="twitter:creator" content={twitterUsername}/>
            <meta name="twitter:title" content={siteTitle}/>
            <meta name="twitter:description" content={siteDesc}/>
            <meta name="twitter:image" content={`${siteUrl} ${img}`}/>
        </Helmet>
    )
}

export default SEO