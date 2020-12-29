import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogList = ({ blogs }) => (
    <ul>
        {blogs && blogs.map((item, i) => {
            let blog = item.node.frontmatter
            return (
                <li>
                    {blog.thumbnailImage &&
                        <Img fixed={blog.thumbnailImage.childImageSharp.fixed} />
                    }
                    <Link to={blog.path}>{blog.title}</Link>
                </li>
            )
        })}
    </ul>
)

export default BlogList