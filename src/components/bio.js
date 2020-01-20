
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <p>
        Desgined by <strong>{author}</strong>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow her on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
