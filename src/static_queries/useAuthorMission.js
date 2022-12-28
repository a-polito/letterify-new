import { graphql, useStaticQuery } from "gatsby"

export default function useAuthorMission() {
    const data = useStaticQuery(graphql`
      query getAuthorMission {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date },
          filter: {
            frontmatter: { content_type: { eq: "author-bio" }}
            fields: { slug: { eq: "mission" }}
          }
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
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    
    const [edge] = data.allMarkdownRemark.edges
    return edge.node
  }