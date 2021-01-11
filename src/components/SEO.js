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
    const  {site} = useStaticQuery(query);
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
            {/*twitter cards */}
           
            <link 
            rel="canonical" 
            href="https://saulcorona.com/favicon.ico"
            />
            <link 
            rel="favicon" 
            href="https://saulcorona.com/favicon.ico"
            />
            <link 
            rel="apple-touch-icon"
            href="https://saulcorona.com"
            />
            <meta 
            name="theme-color" 
            content="#d9006"/>
            <meta 
            name="twitter:card" 
            content="summary"/>
            <meta 
            property="og:type" 
            content="website"/>
            <meta 
            property="og:title" 
            name="twitter:title" 
            content="Saúl Corona "
            />
            <meta 
            property="og:description" 
            name="twitter:description"
            content="Programador freelance"
            />
            <meta 
            property="og:image" 
            name="twitter:image"
            content="https://saulcorona.com/Twitter-img.png"/>
            <meta 
            property="og:url" 
            name="twitter:url"
            content="https://saulcorona.com"
            />
        </Helmet>
    )
}

export default SEO