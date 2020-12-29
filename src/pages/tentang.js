// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tentang = () => (
  <Layout>
    <SEO title="Tentang" />

    <div>
      <section id="hero" className="mt-4 py-10 bg-gray-50 dark:bg-custom min-h-screen  dark:text-gray-50 text-gray-800" >
        <div className="container mx-auto px-8 sm:px-16">
          <h2 className="lg:text-2xl font-semibold">Tentang JAMSTACK.id</h2>
          <hr className=" mb-5 " />
          <p>Welcome to page tentang Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ullam soluta id vitae nisi itaque tempora, quam quia velit omnis temporibus cumque? Quod, alias harum. Alias aliquam quas vel voluptatibus veniam aperiam nihil nostrum consectetur possimus explicabo, labore cupiditate, vero placeat qui error ullam quam soluta omnis corrupti? Tempora id, molestiae nostrum non molestias, nisi, quis doloremque enim commodi placeat soluta accusantium minus tempore magni cumque. Aut nulla, recusandae rerum voluptate veniam in sit soluta. Consequuntur necessitatibus voluptate perferendis nulla quas, soluta tenetur dolorum hic sint doloribus eveniet beatae ex aliquid quos deleniti distinctio debitis consectetur harum voluptates magni dolores?</p>


          <h2 className="lg:text-2xl font-semibold mt-5">Tim Kami</h2>
          <hr className=" mb-5 " />


        </div>
      </section>
    </div>

  </Layout >
)

export default Tentang
