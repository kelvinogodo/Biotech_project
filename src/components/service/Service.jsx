import React from 'react'
import './service.css'
import {Link } from 'react-router-dom'
const Service = () => {
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
              <div className="gold-card" data-aos="fade-up">
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>Hybrid 2024 Career Development Course</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloribus vel perspiciatis cupiditate provident earum autem veniam beatae sed, inventore quibusdam quis accusamus consectetur rerum. Labore magni ipsa repudiandae sit.</p>
                  <a href="/goldstock">read more</a>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <div className="gold-card-text">
                  <small>01/09/16</small>
                  <h3>NABET holds her AGM in Owerri, Nigeria, April 03, 2024.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloribus vel perspiciatis cupiditate provident earum autem veniam beatae sed, inventore quibusdam quis accusamus consectetur rerum. Labore magni ipsa repudiandae sit.</p>
                  <Link to="/realestate">read more</Link>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <div className="gold-card-text">
                  <small>03/03/17</small>
                  <h3>Hybrid 2024 Career Development Course</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloribus vel perspiciatis cupiditate provident earum autem veniam beatae sed, inventore quibusdam quis accusamus consectetur rerum. Labore magni ipsa repudiandae sit.</p>
                      <Link to="/agrotech">read more</Link>
              </div>
              </div>
          </div>
    </section>
  )
}

export default Service