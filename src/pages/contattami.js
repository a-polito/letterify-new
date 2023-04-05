import React from "react"
import { ContactForm } from "../components/ContactForm"

import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Contattami() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="contact" bgColor={infoData.background_color}>
      <ContactForm></ContactForm>
    </Layout>
  )
}
