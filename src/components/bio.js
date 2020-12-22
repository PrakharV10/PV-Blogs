/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {FaTwitter , FaGithub, FaLinkedin} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profilepic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br/>
          <a href={`https://twitter.com/${social?.twitter || ``}`} style={{padding:"2px 4px"}}>
          <FaTwitter style={{fontSize:"25"}} />  
          </a>
          <a href={`https://github.com/PrakharV10`} style={{padding:"2px 4px", fontSize:"40"}}>
          <FaGithub style={{fontSize:"25"}}/>
          </a>
          <a href={`https://www.linkedin.com/in/prakhar-varshney-6b3a92181/`} style={{padding:"4px 4px", fontSize:"40"}}>
          <FaLinkedin style={{fontSize:"25"}}/>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
