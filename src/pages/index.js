import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Welcome to Aakarshna" />
        <div className="illlustrations">
          <div className="container">
            <div className="illus-list">

              <div className="illus-wrap">
                <div className="illus">
                  <div className="img">
                    <img src="share.jpg" />
                  </div>
                  <h2>Share</h2>
                </div>
              </div>

              {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="illus-wrap">
                  <article key={node.fields.slug} className="illus">
                    <div className="img">
                      <img src={node.frontmatter.png.childImageSharp.fluid.src} />
                    </div>
                    <h2>{node.frontmatter.title}</h2>
                  </article>
                </div>
                )
              })}
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
