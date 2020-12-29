// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
    const post = data.markdownRemark;
    const htmlContent = { __html: post.html };
    return (
        <Layout>
            <SEO title="Blog" />
            <div>



                <div id="app" className="flex mt-0  dark:text-gray-50 text-gray-800">
                    <aside className="w-3/5 h-screen sticky top-20 border-r border-gray-200 hidden sm:flex sm:flex-col justify-between p-8 md:flex md:w-72 lg:w-96 bg-yellow overflow-y-scroll ">
                        {/* <aside className="w-3/5 h-screen sticky top-20 border-r border-gray-200 flex flex-col justify-between p-8 md:flex md:w-72 lg:w-96 bg-yellow overflow-y-scroll "> */}
                        <div>
                            <h6 className="tracking-tight leading-10 font-extrabold active text-primary">Konten</h6>
                            <nav className="mt-8">
                                <div className="mb-2">
                                    <ul className="live">
                                        {data.markdownRemark.headings
                                            .filter(heading => heading.depth === 1)
                                            .map(heading => (
                                                <li key={heading.value}>
                                                    <Link to={'#' + heading.id} className="dark:text-gray-200 text-gray-700">{heading.value}</Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </aside>


                    <div className="w-full">
                        <div className="container w-full md:max-w-3xl mx-auto py-10">
                            {/* <div className="container w-full md:max-w-3xl mx-auto py-10 bg-red-700"> */}
                            <div className="w-full px-4 md:px-6 text-xl text-gray-800 ">
                                <div className="font-sans">
                                    {/* <h1>PAGE TUTORIAL</h1> */}
                                    <p className="text-base md:text-sm text-green-500 font-bold">
                                        <Link to={`/blog`}>Kembali</Link>
                                    </p>
                                    <h1 className="font-bold font-sans break-normal dark:text-gray-50 text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                                        {post.frontmatter.title} | {post.frontmatter.category.join()}
                                    </h1>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Published  {post.frontmatter.date}
                                    </p>
                                </div>

                                <div className="dark:text-gray-200 text-gray-800 text-md mt-8">
                                    <div className="markdown" dangerouslySetInnerHTML={htmlContent} />
                                </div>

                            </div>
                        </div>



                        {/* <main className="w-full">
                            <div className="p-4 md:p-8 lg:max-w-xl lg:mx-auto">
                                <h1 className="mb-4 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 ">Fixed sied sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contented sidebar - scrollable contentdebar - scrollable content</h1>

                            </div>
                        </main> */}



                    </div>
                </div>





























            </div>
        </Layout >
    );
};


export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
            category
        }
        headings {
            id
            depth
            value
          }
    }
}
`;
