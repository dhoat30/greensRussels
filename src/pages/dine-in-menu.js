import * as React from "react"
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import DineMenu from "../Components/DineMenu/DineMenu"
// markup
const IndexPage = () => {
    return (
        <Layout>
            <Seo title="this is a home page" description="Indian restaurant in Paihia" />
            <DineMenu />

        </Layout>
    )
}

export default IndexPage
