import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Headline from '../components/headline'
import "../styles/main.scss"
import { redirectTo } from '@reach/router'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
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
      <h3>Hellow!!</h3>
      {/* <div>
          <h1>{data.title}</h1>
          <h3 style={{color:'rgb(76, 76, 76)'}}>{data.title}</h3>
          <div style={{color:'rgb(76, 76, 76)'}} dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div> */}
      </div>
    </Layout>
  )
}
export default IndexPage

export const blogQuery = graphql`
  query {
    wordpressPage(slug: { eq: "about" }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`