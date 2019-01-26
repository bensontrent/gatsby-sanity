import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
<<<<<<< HEAD
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
=======
import { mapEdgesToNodes } from '../lib/helpers'
>>>>>>> first commit

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query ProjectsPageQuery {
<<<<<<< HEAD
    projects: allSanityProject(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
=======
    projects: allSanityProject(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
>>>>>>> first commit
      edges {
        node {
          id
          mainImage {
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

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
<<<<<<< HEAD
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Projects" />
=======
  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects)
  return (
    <Layout>
      <SEO title='Projects' />
>>>>>>> first commit
      <Container>
        <h1 className={responsiveTitle1}>Projects</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
