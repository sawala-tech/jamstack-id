const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    actions.createNodeField({
      node,
      name: 'slug',
      value: fileNode.name.toLowerCase()
    });
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const collections = graphql(`
   query {
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "blog"}}}){
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: '/blog/' + node.fields.slug,
        component: path.resolve('./src/template/detail_blog.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  })

  const posts = graphql(`
    query {
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "belajar"}}}){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title 
              key
              category
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: '/belajar/' + node.fields.slug,
        component: path.resolve('./src/template/detail_belajar.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  })

  return Promise.all([collections, posts])
};

