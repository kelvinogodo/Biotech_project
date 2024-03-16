import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="quicklinks-container">
            <div className="quicklink-card-container">
                <div className="quicklink-card quick-link-logo-container" data-aos="fade-up">
                    <img src="/ifmbelogo.png" alt="" className='logo' />
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
                </div>
            </div>
            <div className="copyright-container">
                <div className="copyright-txt">
                    <p> copyright &copy; 2017 </p>
                </div>
                <div className="policy-txt">
                    <Link to="/policy">privacy policy</Link>
                    <Link to="/policy">terms and condition</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer