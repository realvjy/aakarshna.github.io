import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tweets from "../components/tweets"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aakarshna Portfolio" />
        <div className="info">
          <div className="container">
            <div className="ak-info">
              <div className="container">
                <div className="logomark">
                  <img src="aakarshna.png" />
                </div>
                <div className="bio">
                  <h1>Aakarshna</h1>
                  <p>Hello! I'm Aakarshna. I am a full stack product and UX enthusiast from India. I design app experiences at Zomato to help you to discover your favourite food and restaurants.</p>
                </div>
                <div className="social-info">
                  <ul className="social-l">
                    <li><a href="https://twitter.com/_aakarshna" target="__blank">Twitter </a></li>
                    <li><a href="https://instagram.com/aakarshna" target="__blank">Instagram</a></li>
                    <li><a href="https://medium.com/@aakarshna" target="__blank">Medium</a></li>
                  </ul>
                </div>
                <Tweets/>
              </div>
            </div>
          </div>

        </div>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(format: HTML)
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            png{
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
