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
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "blog"}}}, sort: {fields: frontmatter___title, order: ASC}){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {

    // const posts = res.data.allMarkdownRemark.edges;
    const blog = result.data.allMarkdownRemark.edges;

    blog.forEach(({ node }, index) => {

      const prev = index === 0 ? null : blog[index - 1].node;
      const next = index === blog.length - 1 ? null : blog[index + 1].node


      createPage({
        path: '/blog/' + node.fields.slug,
        component: path.resolve('./src/template/detail_blog.js'),
        context: {
          slug: node.fields.slug,
          prev,
          next
        },
      });
    });
  })

  const posts = graphql(`
    query {
      allMarkdownRemark (filter: {frontmatter: {key: {eq: "belajar"}}}, sort: {fields: frontmatter___title, order: ASC}){
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

    const artikel = result.data.allMarkdownRemark.edges;


    artikel.forEach(({ node }, index) => {

      const prev = index === 0 ? null : artikel[index - 1].node;
      const next = index === artikel.length - 1 ? null : artikel[index + 1].node


      createPage({
        path: '/belajar/' + node.fields.slug,
        component: path.resolve('./src/template/detail_belajar.js'),
        context: {
          slug: node.fields.slug,
          prev,
          next
        },
      });


      // Create blog post list pages
      const postsPerPage = 2;
      const numPages = Math.ceil(posts.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: path.resolve('./src/template/detail_belajar.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1
          },
        });
      });



    });
  })

  return Promise.all([collections, posts])
};

