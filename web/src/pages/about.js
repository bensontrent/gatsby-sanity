import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
<<<<<<< HEAD
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
=======
import { mapEdgesToNodes } from '../lib/helpers'
>>>>>>> first commit

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery {
<<<<<<< HEAD
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      _id
=======
    page: sanityPage(_id: { eq: "about" }) {
>>>>>>> first commit
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
<<<<<<< HEAD
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
=======
  const personNodes = data && data.people && mapEdgesToNodes(data.people)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data'
>>>>>>> first commit
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
<<<<<<< HEAD
        {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title="People" />}
=======
        {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title='People' />}
>>>>>>> first commit
      </Container>
    </Layout>
  )
}

export default AboutPage
