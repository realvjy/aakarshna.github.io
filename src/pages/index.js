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
        <div className="announce-wrapper designletter">
          <div className="container">
            <div className="an-details">
              <p><a href="https://designletter.co/?ref=aakarshna" target="_blank">Subscribe to <img src="/designletter-logo.png" /><span>: A weekly newsletter with design resources and inspiration for everyone</span></a></p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="container">
            <div className="ak-info">
              <div className="container">
                <div className="logomark">
                  <img src="aakarshna.png" />
                </div>
                <div className="bio">
                  <h1>Aakarshna</h1>
                  <p>Hello! I am a full stack product, design and UX enthusiast from India. I design app experiences at Zomato to help you to discover your favourite food and restaurants.</p>
                </div>
                <div className="social-info">
                  <ul className="social-l">
                    <li><a href="mailto:aakarshna@hotmail.com?Subject=Hey!" target="__blank">Email </a></li>
                    <li><a href="https://twitter.com/_aakarshna" target="__blank">Twitter</a></li>
                    <li><a href="https://medium.com/@aakarshna" target="__blank">Medium</a></li>
                    <li><a href="https://designletter.co" target="__blank">Designletter</a></li>
                    <li><a href="https://linkedin.com/in/aakarshna" target="__blank">LinkedIn</a></li>
                    <li><a href="https://instagram.com/aakarshna" target="__blank">Instagram </a></li>
                  </ul>
                </div>
                <div className="noted">
                  <div className="noted-wrap">
                    <a href="/noted"><img src="noted-by-ak.gif" className="img-gif" /><p><span>Noted</span>:  Level up your note taking on Figma</p></a>
                  </div>
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
