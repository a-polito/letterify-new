import React, {useState, useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date },
        filter: { frontmatter: { content_type: { eq: "brick" }}}
        ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              author
              title
              hero_image {
                childImageSharp {
                  fluid( maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  const allBlogPages = data.allMarkdownRemark.edges
  
  // State for the list
  const [list, setList] = useState([...allBlogPages.slice(0, 10)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allBlogPages.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allBlogPages.length
      const nextResults = isMore
        ? allBlogPages.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allBlogPages.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return {
    allBlogPages,
    pagedBlogPages: list,
    hasMore,
    handleLoadMore
  }
}