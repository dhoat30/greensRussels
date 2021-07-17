import * as React from "react"
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import Gallery from "../Components/GalleryPage/GalleryPage"
// markup
const GalleryPage = () => {
    return (
        <Layout>
            <Seo title="this is a home page" description="Indian restaurant in Paihia" />
            <Gallery />
        </Layout>
    )
}

export default GalleryPage
