import * as React from "react"
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import Home from "../Components/Home/Home"
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="this is a home page" description="Indian restaurant in Paihia" />
      <Home />
    </Layout>
  )
}

export default IndexPage
