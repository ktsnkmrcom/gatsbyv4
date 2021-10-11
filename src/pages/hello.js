import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Hello = ({ data: { microcmsPost } }) => (
  <Layout>
    <Seo title="Hello, microCMS!!" />
    <h1>{microcmsPost.author}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Hello

export const query = graphql`
  query {
    microcmsPost {
      author
    }
  }
`
