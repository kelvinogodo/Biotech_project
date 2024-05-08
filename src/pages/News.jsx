import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'
import BlogCard from '../components/admindashboard/BlogCard'
const News = ({ posts, loader }) => {
  return (
    <main className='news-page'>
      <Header />
      <section className="post-section">
        <section className='service-section'>
          <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>Latest News</h2>
            </div>
            <h1 data-aos="fade-up">stay in the loop with the lastest news</h1>
        </div>
      <div className="service-card-container">
        {
        loader ? <>
          <div class="post-loader"></div>
          <div class="post-loader"></div>
          <div class="post-loader"></div>

        </> : Array.isArray(posts) && posts.map(
          item => <BlogCard key={item._id} item={item}/>
        )}
          </div>
        </section>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

export default News