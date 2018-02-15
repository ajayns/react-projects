const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// onCreateNode is called for every node created
// markdown nodes are filtered and createNodeField adds a field slug which holds value of the filePath

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};


// createPages creates a page for each markdown node
// createPage uses path from slug queried, blog-post.js as template to create page
// Everything in context is passed into individual pages
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
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
                result.data.allMarkdownRemark.edges.forEach(({node}) => {
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/blog-post.js`),
                        context: {
                            slug: node.fields.slug,
                        },
                    })
                })
                resolve()
        })
    })
};