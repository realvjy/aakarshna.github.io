import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aakarshna - about" />
        <div className="about">
          <div className="container">
            <div className="about-wrap">

              <p>Aakarshna (1994) is an illustrator living and working in New Delhi. Her illustrations include happy bright colours and simple geometrical shapes. Her inspiration comes from growing up in the city's hustle-bustle whilst thinking about what life would be elsewhere. When not illustrating, she is working on improving product user experiences.</p>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
