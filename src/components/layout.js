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
      </>
    )
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <div className="container">
            © {new Date().getFullYear()},
            {` `}
            <a href="https://twitter.com/_aakarshna">Aakarshna</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
