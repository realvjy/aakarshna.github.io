import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
        <nav className="navbar">
          <div className="container">
            <div className="name">
              <a href="/" className="logo"><img src="/aakarshna.svg" /></a>
              <a href="/about" className="menu">About</a>
            </div>
          </div>
        </nav>
        <div className="ak-photo">
          <div className="container">
            <div className="logomark">
              <img src="/logo.png" />
            </div>  
          </div>
        </div>
      </>
    )
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <div className="container">
          <div className="foot">
            <p>
              © {new Date().getFullYear()},
              {` `}
              <a href="/">Aakarshna</a>
            </p>
            <ul className="social-l">
              <li><a href="https://twitter.com/_aakarshna" target="__blank"><img src="/twitter.svg" /></a></li>
              <li><a href="https://instagram.com/aakarshna" target="__blank"><img src="/insta.svg" /></a></li>
            </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
