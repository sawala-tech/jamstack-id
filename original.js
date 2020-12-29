const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')


// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const parent = getNode(node.parent);
//     let collection = parent.sourceInstanceName;
//     createNodeField({
//       node,
//       name: 'collection',
//       value: collection,
//     });
//   }
// };


// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {

//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: "blog",
//     })

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }



// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   // Ensures we are processing only markdown files
//   if (node.internal.type === "MarkdownRemark") {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     // const relativeFilePath = createFilePath({
//     //   node,
//     //   getNode,
//     //   basePath: "data/faqs/",
//     // })
//     const longSlug = createFilePath({ node, getNode, basePath: 'pages' });
//     const slug = longSlug.split('/');
//   // const slug = createFilePath({ node, getNode, basePath: `pages` })
//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//      value: `/${slug[slug.length - 2]}/`,
//     })
//   }
// }

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const collections = graphql(`
//    query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve('./src/template/detail_blog.js'),
//         context: {
//           slug: node.fields.slug,
//         },
//       });
//     });
//   })

//   const posts = graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve('./src/template/detail_tutorial.js'),
//         context: {
//           slug: node.fields.slug,
//         },
//       });
//     });
//   })

//   return Promise.all([collections, posts])
// };



// exports.createPages =({ graphql, actions }) => {
//     const {createPage} = actions;
//     const templateFile = path.resolve('src/template/detail_blog.js')

//     return graphql(`
//     {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(({ data }) => {
//         data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.fields.slug,
//                 component: templateFile,
//                 context: {
//                     slug: node.fields.slug
//                 }
//             })
//         })
//     } )
// }





































// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   // Ensures we are processing only markdown files
//   if (node.internal.type === "MarkdownRemark") {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     // const relativeFilePath = createFilePath({
//     //   node,
//     //   getNode,
//     //   basePath: "data/faqs/",
//     // })
//     const longSlug = createFilePath({ node, getNode, basePath: 'pages' });
//     const slug = longSlug.split('/');
//   // const slug = createFilePath({ node, getNode, basePath: `pages` })
//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//      value: `/${slug[slug.length - 2]}/`,
//     })
//   }
// }




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



// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions
//   // Use the graphql group command to get a list of each tag and category
//   // fieldValue is the tag/category name
//   const { data, errors } = await graphql(`

//   query {
//     categories: allMarkdownRemark {
//       group(field: frontmatter___tags) {
//         tag: fieldValue
//         totalCount
//       }
//     }
//   }


//   `)
//   if (errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }
//   // Loop over every category and create a page for each one
//   const categories = data.categories.group
//   categories.forEach(({ fieldValue }) =>
//     createPage({
//       path: `topik/${fieldValue}`.toLowerCase(),
//       component: path.resolve("./src/template/detail_category.js"),
//       context: {
//         tag: fieldValue,
//       },
//     })
//   )

// }



// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   // const blogPostTemplate = path.resolve("src/templates/blog.js")
//   const tagTemplate = path.resolve("./src/template/detail_category.js")

//   const result = await graphql(`
//     {
//       postsRemark: allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 2000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//             }
//           }
//         }
//       }
//       tagsGroup: allMarkdownRemark(limit: 2000) {
//         group(field: frontmatter___tags) {
//           fieldValue
//         }
//       }
//     }
//   `)

//   // handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // const posts = result.data.postsRemark.edges

//   // // Create post detail pages
//   // posts.forEach(({ node }) => {
//   //   createPage({
//   //     path: node.fields.slug,
//   //     component: blogPostTemplate,
//   //   })
//   // })

//   // Extract tag data from query
//   const tags = result.data.tagsGroup.group

//   // Make tag pages
//   tags.forEach(tag => {
//     createPage({
//       path: `/topik/${_.kebabCase(tag.fieldValue)}/`,
//       component: tagTemplate,
//       context: {
//         tag: tag.fieldValue,
//       },
//     })
//   })
// }
