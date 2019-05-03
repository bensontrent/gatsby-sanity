import React from 'react'
import { graphql } from 'gatsby'
<<<<<<< HEAD
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
=======
import { mapEdgesToNodes } from '../lib/helpers'
>>>>>>> first commit
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
<<<<<<< HEAD
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
=======
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
>>>>>>> first commit
      title
      description
      keywords
    }

<<<<<<< HEAD
    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
=======
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } } }
    ) {
>>>>>>> first commit
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

<<<<<<< HEAD
    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
=======
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } } }
    ) {
>>>>>>> first commit
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

<<<<<<< HEAD
  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
=======
  const site = data && data.site
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
>>>>>>> first commit
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
<<<<<<< HEAD
        {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/projects/"
          />
        )}
        {postNodes && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/blog/"
=======
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/projects/'
          />
        )}
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
>>>>>>> first commit
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
