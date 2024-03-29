import React from "react"
import { Link } from "gatsby"
import Masonry from "react-masonry-css"
import Img from "gatsby-image"

import useBlogData from "../../static_queries/useBlogData"
import * as classes from "./masonry.module.scss"

export function Listing() {
  const {pagedBlogPages: blogData, hasMore, handleLoadMore} = useBlogData()
  
  return (
    <>
    <Masonry
      breakpointCols={{default: 3, 768:1, 1100: 2}}
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
                tags={blog.node.frontmatter.tags}
              />
            </Link>
          )
        })}
    </Masonry>
    {hasMore && (<footer className={classes.blogListingFooter}>
      <button className={classes.hasMoreButton} onClick={handleLoadMore}>Load more</button>
      </footer>)}
    </>
  )
}

function Card({ title, imageData, description, tags = [] }) {
  return (
    <article className={classes.card}>
      {tags?.length > 0 && (<div className={classes.cardTags}>
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>)}
      <h2 className={classes.cardTitle}>{title}</h2>
      <Img fluid={imageData} alt={title} />
      <p className={classes.cardDescription}>{description}</p>
    </article>
  )
}
