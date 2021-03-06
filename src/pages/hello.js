import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Hello = ({ data: { microcmsSong } }) => (
  <Layout>
    <Seo title="Hello, microCMS!!" />
    <h1>γγ­γΌγ{microcmsSong.author}</h1>
    <h2>{microcmsSong.song}</h2>
    <h3>{microcmsSong.song_kana}</h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Hello

export const query = graphql`
  query {
    microcmsSong {
      author
      song
      song_kana
    }
  }
`
