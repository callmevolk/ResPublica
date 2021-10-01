import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import HeaderSlider from '../components/HeaderSlider'
import BlogPosts from '../components/BlogPosts'
import SEO from '../components/SEO'

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(filter: {featured: {eq: true}}) {
        nodes {
          id
          datum
          naslov
          naslovnaSlika {
            gatsbyImageData(
              height: 220
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.nodes
  return (
    <Layout>
      <SEO title="Početna" />
      <main>
        <HeaderSlider />
        <section className="home">
          <h2>O nama</h2>
          <p>Građanski demokratski centar Res Publica je nevladina organizacija ili tačnije registrovano udruženje građana čiji su programski ciljevi sledeći:  <button className="btn"><Link to="/misija">Saznaj više</Link></button></p>
        </section>
        <section className="featured-blogs home">
          <h5>Izdvojena blog objava</h5>
          <BlogPosts posts={posts} />
        </section>
      </main>
    </Layout>
  )
}
