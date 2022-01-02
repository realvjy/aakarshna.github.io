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
        <>
        <div className="info">
          <div className="container">
            <div className="ak-info">
              <div className="container">

                <div className="bio">

                  <p>Hello! <br/>
                  I’m Aakarshna.<br/>
                  I like the idea of
                  having my own
                  domain,<br/>
                  so here you are.</p>
                </div>
                <div className="social-info">
                  <ul className="social-l">
                    <li><a href="https://twitter.com/aakarshnaanand" target="__blank">Twitter</a></li>
                    <li><a href="https://linkedin.com/in/aakarshna" target="__blank">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        </>
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
