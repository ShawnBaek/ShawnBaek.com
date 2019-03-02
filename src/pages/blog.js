import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts'
import PostCard from '../components/postCard'
import Headline from '../components/headline'
// import PostIcons from "../components/postIcons"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
// const BlogPage = ({ data }) => (
//   <Layout>
//     <h1>Hi from the Blog page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )


export default ({ data }) => {
  console.log(data)
  const imagesResolutions = data.allWordpressPost.edges.map(({ node }) =>
      node.featured_media && node.featured_media.localFile.childImageSharp.resolutions
  )
  return (
    <Layout>
      <Headline title={"SWIFT"} subTitle={"My post will be updated biweekly"} />
      <div
         style={{
           margin: '0 auto',
           maxWidth: 800,
           padding: '0px 1.0875rem 1.45rem',
           paddingTop: '1.45rem',
         }}
      >
      {data.allWordpressPost.edges.map(({ node }) => (
        <Link to={node.slug} style={{ textDecoration: `none` }}>
          <PostCard node={node} key={node.slug}/>
        </Link>
      ))}
      </div>
    </Layout>
  )
}
// export default BlogPage

// export const blogQuery = graphql`
//   query {
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//           categories {
//             id
//             name
//           }
//           tags {
//             id
//             name
//           }
//           author {
//             id
//             url
//             name
//             description
//             avatar_urls {
//               wordpress_24
//               wordpress_48
//               wordpress_96
//             }
//           }
//           featured_media {
//             localFile {
//               childImageSharp {
//                 # edit the maxWidth value to generate resized images
//                 resolutions(width: 500, height: 500) {
//                   src
//                   width
//                   height
//                   srcSet
//                   aspectRatio
//                 }
//               }
//             }
//             id
//             media_details {
//               width
//               height
//               file
//               filesize
//             }
//             source_url
//           }
//           jetpack_related_posts {
//             wordpress_id
//             url
//             title
//             date
//             format
//             excerpt
//             rel
//             context
//           }
//           ...PostIcons
//         }
//       }
//     }
//   }
// `