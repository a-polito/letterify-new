import React from "react"
import Layout from "../components/Layout"
import { Listing } from "../components/Listing"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <Listing />
      </section>
    </Layout>
  )
}