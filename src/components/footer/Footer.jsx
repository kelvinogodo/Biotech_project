import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="quicklinks-container">
            <div className="quicklink-card-container">
                <div className="quicklink-card quick-link-logo-container" data-aos="fade-up">
                    <img src="/nibelogo_-removebg-preview.png" alt="" className='logo' />
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                    <Link to='/'>home</Link>
                      <Link to="/about">about</Link>
                      <Link to="/news">post</Link>
                      <Link to="/news">events</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/cbet">College of Biomedical Engineering & Technology</Link>
                      <a href="https://www.nabet.org.ng/">Association of Biomedical Engineers & Technologists of Nigeria</a>
                    <Link to="/membership">memebership</Link>
                </div>
                  <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/categories">categories of individual membership of the College</Link>
                      <Link to="/fnibe">epoch-making procession of the first set of Fellows of the College of Biomedical Engineering and Technology.</Link>
                </div>
            </div>
            <div className="copyright-container">
                <div className="copyright-txt">
                    <p> copyright &copy; 2017 </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer