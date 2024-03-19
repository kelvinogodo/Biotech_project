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
                      <Link to="/faq">post</Link>
                      <Link to="/faq">events</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/faq">College of Biomedical Engineering & Technology</Link>
                      <Link to="/about">Association of Biomedical Engineers & Technologists of Nigeria</Link>
                    <Link to="/buybitcoin">memebership</Link>
                </div>
                  <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/faq">categories of individual membership of the College</Link>
                      <Link to="/about">epoch-making procession of the first set of Fellows of the College of Biomedical Engineering and Technology.</Link>
                      <Link to="/buybitcoin">news@nibe</Link>
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