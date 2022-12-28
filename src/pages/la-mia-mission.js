import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../styles/pages/author-bio.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import useAuthorMission from "../static_queries/useAuthorMission"

export default function TheMission() {
  const { infoData } = useSiteMetaData()
  const { frontmatter, html } = useAuthorMission()
  
  return (
    <Layout page="themission" bgColor={infoData.background_color}>
      <section className={styles.info_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: frontmatter.title}}></div>
        </h2>
        
        {frontmatter.hero_image && <Img fluid={frontmatter.hero_image.childImageSharp.fluid} alt={frontmatter.title} style={{
          float: 'left',
          width: '400px',
          marginRight: '12px'}}
        />}

        <article dangerouslySetInnerHTML={{__html: html}} />
      </section>
    </Layout>
  )
}