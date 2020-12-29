// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO title="Belajar" />

    <div>

      <div className="section section-header dark:bg-gray-800 bg-custom">
        <div className="container mx-auto px-8 pt-20 pb-40 sm:px-16">
          <h2 className="lg:text-3xl font-semibold text-center text-gray-50">
            Belajar Jamstack untuk Pemula
            </h2>
          <p className="text-center text-lg text-gray-50">
            Lakukan sekarang apa yang telah kamu pelajari.
          </p>
        </div>
      </div>

      <div className="section section-content text-gray-800 dark:text-gray-50 pb-36">
        <div className="container dark:bg-custom bg-gray-50 mx-auto sm:w-4/5 w-full p-12 -mt-24 sm:rounded-lg pb-16 border dark:border-gray-900 border-gray-300">

          <div className="overflow-x-hidden">

            <div className="">
              <div className="flex justify-between container mx-auto">
                <div className="w-full lg:w-8/12">
                  <div className="flex items-center justify-between mb-5">
                    <h1 className="text-xl font-bold md:text-2xl">Modul Belajar Jamstack</h1>

                    {/* <div>
                      <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option>Latest</option>
                        <option>Last Week</option>
                      </select>
                    </div> */}
                  </div>






                  {/* 
                  <ul className="py-6 list-disc">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      <Link to={node.fields.slug} className="text-gray-50 dark:text-gray-800">
                        <li className="font-bold pb-2 text-xl">
                          {node.frontmatter.title}
                        </li>
                      </Link>
                    ))}
                  </ul> */}










                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link to={node.fields.slug} className="text-gray-800 dark:text-gray-50">
                      <div className="flex flex-row md:flex-row overflow-hidden">

                        <div className="w-full pr-2 py-4 text-gray-800 dark:text-gray-50 justify-between">

                          <h1 className="text-xl leading-normal truncate myhover text-myorange">

                            {node.frontmatter.title}

                          </h1>

                          <p className="">
                            {node.excerpt}
                          </p>




                        </div>

                        <div className="h-40 w-auto md:w-1/2 py-5 ">

                          {node.frontmatter.thumbnailImage &&
                            <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="inset-0 h-full w-full object-cover object-center" />
                          }

                        </div>


                      </div>
                    </Link>
                  ))}









                  {/* <div className="mt-8">
                    <div className="flex">
                      <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed">
                        previous
                        </a>

                      <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                        1
                        </a>

                      <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                        2
                        </a>

                      <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                        3
                        </a>

                      <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                        Next
                        </a>
                    </div>
                  </div> */}
                </div>
                {/* <div className="-mx-8 w-4/12 hidden lg:block">
                  <div className="mt-10 px-8">
                    <div className="flex flex-col bg-white dark:bg-gray-800 px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                      <h2 className="mb-4 text-xl font-bold text-gray-700">Kategori</h2>

                      <ul>
                        <li className="flex items-center mt-2">
                          <a href="#"
                            className="text-gray-50 font-bold mx-1 hover:text-gray-600 hover:underline">
                            - javascript
                            
                                </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>













        </div>
      </div>

    </div>

  </Layout >
)


export const query = graphql`
 {
    allMarkdownRemark (filter: {frontmatter: {key: {eq: "belajar"}}}, sort: {fields: frontmatter___date, order: ASC}){
      edges {
        node {
          fields{
            slug
            
          }
          frontmatter {
            date
            title 
            category
            thumbnailImage {
            id
            childImageSharp {
                     fluid {
      ...GatsbyImageSharpFluid_withWebp
    }
                  }
          }
          }
          excerpt
        }
      }
    }
  }
  `;

