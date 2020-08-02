/**
 * Working list
 *
 * See: https://vijayverma.co/work
 *
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Tweets = () => {
    return (
      <section className="tweets">
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">What brands need to do if they want to break up with Facebook <a href="https://t.co/MCojSY3n0c">https://t.co/MCojSY3n0c</a></p>&mdash; TechCrunch (@TechCrunch) <a href="https://twitter.com/TechCrunch/status/1289580755195236352?ref_src=twsrc%5Etfw">August 1, 2020</a></blockquote>
      </section>
    )
}

export default Tweets
