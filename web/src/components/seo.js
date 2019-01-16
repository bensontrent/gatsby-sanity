import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
  query SEOQuery {
<<<<<<< HEAD
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
=======
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
>>>>>>> first commit
      title
      description
      keywords
      author
    }
  }
`

<<<<<<< HEAD
function SEO({ description, lang, meta, keywords = [], title }) {
=======
function SEO ({ description, lang, meta, keywords = [], title }) {
>>>>>>> first commit
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription = description || data.site.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={title === data.site.title ? '%s' : `%s | ${data.site.title}`}
<<<<<<< HEAD
            link={[
              {
                href: 'https://fonts.googleapis.com/css?family=Open+Sans:400|Montserrat:100',
                rel: 'stylesheet'
              }
            ]}
=======
>>>>>>> first commit
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: data.site.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
<<<<<<< HEAD
                      name: 'keywords',
                      content: keywords.join(', ')
                    }
=======
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
>>>>>>> first commit
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
