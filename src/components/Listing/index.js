import React from "react"
import { Link } from "gatsby"
import Masonry from "react-masonry-css"
import Img from "gatsby-image"

import useBlogData from "../../static_queries/useBlogData"
import * as classes from "./masonry.module.scss"

export function Listing() {
  const blogData = useBlogData()

  return (
    <Masonry
      breakpointCols={3}
      className={classes.blogListingGrid}
      columnClassName={classes.blogListingGrid_column}
    >
      {blogData
        .filter(blog => blog.node.frontmatter.title !== "")
        .map(blog => {
          return (
            <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
              <Card
                title={blog.node.frontmatter.title}
                imageData={
                  blog.node.frontmatter.hero_image.childImageSharp.fluid
                }
                description={blog.node.excerpt}
              />
            </Link>
          )
        })}
    </Masonry>
  )
}

function Card({ title, imageData, description, tags = ['tag1', 'tag2'] }) {
  return (
    <article className={classes.card}>
      {tags.length && <div className={classes.cardTags}>
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>}
      <h2 className={classes.cardTitle}>{title}</h2>
      <Img className={classes.cardImg} fluid={imageData} alt={title} />
      <p className={classes.cardDescription}>{description}</p>
    </article>
  )
}
