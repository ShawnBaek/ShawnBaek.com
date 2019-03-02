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
      <Layout>
      <Headline title={"I'm Shawn Baek"} subTitle={"iOS Developer"}/>
      <div
         style={{
           margin: '0 auto',
           maxWidth: 800,
           padding: '0px 1.0875rem 1.45rem',
           paddingTop: '1.45rem',
         }}
      >
      <div>
          <h1 style={{color:'rgb(76, 76, 76)'}}>{data.title}</h1>
          <div style={{color:'rgb(76, 76, 76)'}} dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
      </div>
    </Layout>
    )
  }
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    wordpressPage(slug: { eq: "about" }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
export default IndexPage

