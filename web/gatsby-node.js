const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

<<<<<<< HEAD
async function createBlogPostPages (graphql, actions, reporter) {
=======
async function createBlogPostPages (graphql, actions) {
>>>>>>> first commit
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/blog/${dateSegment}/${slug.current}/`

<<<<<<< HEAD
    reporter.info(`Creating blog post page: ${path}`)
=======
    console.log(`Create blog post page: ${path}`)
>>>>>>> first commit

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    })

    createPageDependency({ path, nodeId: id })
  })
}

<<<<<<< HEAD
async function createProjectPages (graphql, actions, reporter) {
=======
async function createProjectPages (graphql, actions) {
>>>>>>> first commit
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

<<<<<<< HEAD
  projectEdges.forEach(edge => {
=======
  projectEdges.forEach((edge, index) => {
>>>>>>> first commit
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/project/${slug}/`

<<<<<<< HEAD
    reporter.info(`Creating project page: ${path}`)
=======
    console.log(`Create project page: ${path}`)
>>>>>>> first commit

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id }
    })

    createPageDependency({ path, nodeId: id })
  })
}

<<<<<<< HEAD
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)
=======
exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
  await createProjectPages(graphql, actions)
>>>>>>> first commit
}
