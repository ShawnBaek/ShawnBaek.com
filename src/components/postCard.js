import React from 'react'
// import PostIcons from "./postIcons"
import { Link } from 'gatsby'
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"

const PostCard = ({ node }) => {
  return(
    <div
      style={{
        background: 'white',
        marginBottom: '1.45rem',
        padding: '1.45rem',
        borderRadius: '10px',
        boxShadow: `1px 3px 1px rgba(0,0,0,0.1)`,
      }}
    >
      <div>
          <h3 style={{color:'rgb(76, 76, 76)'}}>{node.title}</h3>
          <div style={{color:'rgb(76, 76, 76)'}} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          {/* <PostIcons node={node} css={{ marginBottom: rhythm(1 / 2) }}/> */}
          {
            node.featured_media && 
            <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} key={node.featured_media.source_url} />
          }
      </div>

      <div>
        <div style={{}}>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default PostCard