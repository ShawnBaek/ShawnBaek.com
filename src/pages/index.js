import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from "../layouts"
import Headline from '../components/headline'
import "../styles/main.scss"
import { redirectTo } from '@reach/router'
import { graphql } from 'gatsby'

class IndexPage extends Component {
  render() {
    const data = this.props.data.wordpressPage
    return (
      <div>
        {data.title}

        {data.content}

        <h1>H....</h1>
      </div>
    )
  }
}
// const IndexPage = ({ data }) => {
//   return (
//     <Layout>
//       <Headline title={"I'm Shawn Baek"} subTitle={"iOS Developer"}/>
//       <div
//          style={{
//            margin: '0 auto',
//            maxWidth: 800,
//            padding: '0px 1.0875rem 1.45rem',
//            paddingTop: '1.45rem',
//          }}
//       >
//       <h3>Hellow!! {data.site.siteMetadata.title}</h3>
//       <div>
//           <h1>{data.title}</h1>
//           <h3 style={{color:'rgb(76, 76, 76)'}}>{data.title}</h3>
//           <div style={{color:'rgb(76, 76, 76)'}} dangerouslySetInnerHTML={{ __html: data.content }}></div>
//       </div>
//       </div>
//     </Layout>
//   )
// }



export const blogQuery = graphql`
  query HomePageQuery {
    wordpressPage(slug: { eq: "about" }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

// export const query = graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export default IndexPage

