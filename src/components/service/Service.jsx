import React from 'react'
import './service.css'
import { Link } from 'react-router-dom'
import BlogCard from '../admindashboard/BlogCard'
const Service = ({posts}) => {
  return (
      <section className='service-section'>
          <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>Latest News</h2>
            </div>
            <h1 data-aos="fade-up">stay in the loop with the lastest news</h1>
        </div>
          <div className="service-card-container">
              {Array.isArray(posts) && posts.reverse().slice(posts.length - 3, posts.length).map(
          item => <BlogCard key={item._id} item={item}/>
        )}
          </div>
    </section>
  )
}

export default Service