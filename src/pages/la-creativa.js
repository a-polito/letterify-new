import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../styles/pages/author-bio.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import useAuthorMetadata from "../static_queries/useAuthorMetadata"

export default function TheCreative() {
  const { infoData } = useSiteMetaData()
  const { frontmatter, html } = useAuthorMetadata()
  
  return (
    <Layout page="thecreative" bgColor={infoData.background_color}>
      <section className={styles.info_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: frontmatter.title}}></div>
        </h2>
        
        <Img fluid={frontmatter.hero_image.childImageSharp.fluid} alt={frontmatter.title} style={{
          float: 'left',
          width: '400px',
          marginRight: '12px'}}
        />

        <article dangerouslySetInnerHTML={{__html: html}} />
      </section>
    </Layout>
  )
}