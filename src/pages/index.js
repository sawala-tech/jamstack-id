import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Quotes from "../components/Quotes"
import Card from '../components/Card';
import Button from '../components/Button';
import SplitSection from '../components/SplitSection';
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"


const IndexPage = () => {


  const data = useStaticQuery(graphql`
  query {
    whyImg: file(relativePath: { eq: "why.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title="Home" />


      <section id="hero" className="py-36">
        <div className="container mx-auto">
          <div className="text-center justify-center mx-auto w-2/3">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none font-body bg-clip-text  text-transparent bg-gradient-to-tl from-myorange to-mypink inline">
              Belajar membangun situs dengan kinerja modern.
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light block font-title dark:text-gray-50 text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore dolorum accusantium commodi, molestias rerum numquam cumque quo eos soluta?
          </p>

            <Link to={`/belajar`}>
              <Button size="default" className="mt-14 mybutton" to={`/belajar`}>Mulai Sekarang</Button>
            </Link>



          </div>
        </div>
      </section >




      <SplitSection
        reverseOrder
        className="dark:text-gray-50 text-gray-800"
        primarySlot={

          <div className="lg:pl-6 xl:pl-10">
            <h3 className="text-3xl font-semibold leading-tight">
              Masalah Web Tradisional
          </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
          </p>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus ut esse impedit, corrupti tenetur vitae quidem. Excepturi praesentium sint earum nulla nihil? Tenetur impedit dolor vitae nulla illo, voluptates tempore libero esse? Quia odit nihil culpa cupiditate eos beatae delectus iure autem ab aut, porro itaque libero omnis quam?
          </p>
          </div>
        }
        secondarySlot={
          // <img src={`../../why.png`} alt="" srcset="" className="mx-auto w-10/12" />
          <Img fluid={data.whyImg.childImageSharp.fluid} alt="Why JAMStack" />
        }
      />




      <section id="why" className="py-40 dark:text-gray-50 text-gray-800">
        <div className="w-9/12 mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Bagaimana dengan <span className="bg-clip-text bg-gradient-to-r text-transparent from-mypink to-myorange">JAMStack</span></h2>


          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../2_Faster_Websites.png`} alt="" srcset="" className="mx-auto sm:w-3/12 w-6/12" />
                <p className="font-semibold text-xl">Service One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../2_More_Secure_Infrastructure.png`} alt="" srcset="" className="mx-auto sm:w-3/12 w-6/12" />
                <p className="font-semibold text-xl">Service Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-1">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../2_High_Scale_Without_High_Complexity.png`} alt="" srcset="" className="mx-auto sm:w-3/12 w-6/12" />
                <p className="font-semibold text-xl">Service One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../2_Improved_Developer_Experience.png`} alt="" srcset="" className="mx-auto sm:w-3/12 w-6/12" />
                <p className="font-semibold text-xl">Service Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* 

    <section className="section-konsep py-36 bg-gray-50 dark:bg-black">
      <div className="container mx-auto">

        <div className="m-4">
          <h2 className="text-3xl lg:text-5xl font-semibold">Konsep JAMStack</h2>
          <hr className="border-4 mb-6 bg-yellow-500 w-1/6" />
          <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic eveniet sit. At, soluta tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi non earum numquam provident recusandae voluptas atque maxime vel ex blanditiis? Repellendus aspernatur voluptatibus fugiat! Deserunt sequi ipsam expedita accusantium blanditiis saepe, tempore aperiam ratione quam autem nisi eum fugiat. Fuga nobis ducimus laborum animi dolore quidem, maxime quae numquam, deserunt ratione neque ea ipsa repellendus quasi quo suscipit modi iure dolores? Placeat earum, fugit eaque sed molestiae accusantium illum corporis possimus molestias iusto itaque. Quo, vel minus quas voluptatibus totam nam? Modi nihil quae dignissimos, maxime non, fuga alias laboriosam cum labore hic natus molestias ullam ratione aliquid corporis magnam.</span>
        </div>
      </div>
    </section> */}







      <section id="konsep" className="py-36 dark:text-gray-50 text-gray-800">
        <div className="container mx-auto y-20 bg-gradient-to-b from-light-blue-600 to-transparent rounded-lg text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Konsep <span className="bg-clip-text bg-gradient-to-r text-transparent from-mypink to-myorange">JAMStack</span></h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../j_logo.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">JavaScript</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../a_logo.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">API</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <img src={`../../m_logo.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">Markup</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
              </Card>
            </div>
          </div>
          <p className="text-md w-3/4 text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo, ea corrupti corporis quo tempore molestias rem ab deserunt quae numquam similique veniam possimus distinctio doloribus quidem dolore repellendus inventore a voluptatem, assumenda saepe mollitia dolores. Quod debitis exercitationem ad totam eveniet officia laborum cupiditate in natus? Enim veritatis, ullam laborum quibusdam blanditiis odit rerum? Molestias voluptates nesciunt odio eum, unde culpa, natus corrupti voluptatibus repudiandae, labore dolorem vel dignissimos quis ducimus voluptatem ipsum impedit quasi. Quisquam corporis rerum magni soluta et labore quae alias? Vel, aperiam dolores aliquam voluptatum veritatis consectetur libero, porro optio numquam, dolorum deserunt? Perferendis, nihil!
        </p>
        </div>
      </section>







      {/* 
      <section id="start" className="py-36">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Mulai Memahami</h2>

          <div class="md:flex content-center flex-wrap -mx-2 p-3 mt-12">
            <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
              <div class="md:flex-1 px-4 py-16 rounded shadow-lg">

                <img src={`../../icon_2.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">Mulai</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>

              </div>
            </div>

            <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
              <div class="md:flex-1 px-4 py-16 rounded shadow-lg">

                <img src={`../../icon_3.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">Pelajari</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>

              </div>
            </div>
            <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2 ">
              <div class="md:flex-1 px-4 py-16 rounded shadow-lg bg-gradient-to-r from-yellow-600 to-yellow-300">

                <img src={`../../icon_1.png`} alt="" srcset="" className="mx-auto" />
                <p className="font-semibold text-xl">Implementasi</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
              </p>
                <p className="mt-8">
                  <Button size="default">Belajar Sekarang</Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}











      <section id="blog" className="section-blog px-16 py-32 dark:text-gray-50 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-8">Artikel terbaru</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="card bg-gray-50 dark:bg-gray-800">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-28 sm:h-48 object-cover" />        <div className="m-4">
                <span className="font-bold text-lg">Lorem ipsum dolor sit amet.</span>
                <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic eveniet sit. At, soluta tempora.</span>
              </div>
            </div>
            <div className="card bg-gray-50 dark:bg-gray-800">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-28 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold text-lg">Lorem ipsum dolor sit amet.</span>
                <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic eveniet sit. At, soluta tt. At, soluta tt. At, soluta tt. At, soluta tt. At, soluta tempora.</span>
              </div>
            </div>
            <div className="card bg-gray-50 dark:bg-gray-800">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-28 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold text-lg">Lorem ipsum dolor sit amet.</span>
                <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic eveniet sit. At, soluta tempora.</span>
              </div>
            </div>
            <div className="card bg-gray-50 dark:bg-gray-800">
              <img src={'../../photo6170486373958658705.jpg'} alt="" className="w-full h-28 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold text-lg">Lorem ipsum dolor sit amet.</span>
                <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic eveniet sit. At, soluta tempora.</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mt-8">
              <Button size="default">Lihat Semua</Button>
            </p>
          </div>
        </div>
      </section>




    </Layout >
  )
}

export default IndexPage
