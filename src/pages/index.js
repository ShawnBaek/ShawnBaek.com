import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from "../layouts"
import Headline from '../components/headline'
import "../styles/main.scss"
import { redirectTo } from '@reach/router'
import { graphql } from 'gatsby'
import PrismJS from 'prismjs'
import 'prismjs/components/prism-swift'

class IndexPage extends Component {
  componentDidMount() {
    PrismJS.highlightAll()
  }
  render() {
    const data = this.props.data.wordpressPage
    var codeTest = `
      var _self = (typeof window !== 'undefined')
    ? window   // if in browser
    : (
      (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
      ? self // if in worker
      : {}   // if in node js
    );
    `
    var swift = `
      let test = "hellow"
      func test() -> Bool {
        return false
      }
    `
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
         
      <pre className="language-javascript">
          <code >
              {codeTest}
          </code>
      </pre>
      <pre className="language-swift">
          <code >
              {swift}
          </code>
      </pre>
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

