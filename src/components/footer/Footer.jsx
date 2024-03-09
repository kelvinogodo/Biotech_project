import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="quicklinks-container">
            <div className="quicklink-card-container">
                <div className="quicklink-card quick-link-logo-container" data-aos="fade-up">
                    <img src="/whitelogo (1).png" alt="" className='logo' />
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                    <Link to='/'>home</Link>
                      <Link to="/about">about</Link>
                      <Link to="/faq">roadmap</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/faq">faqs</Link>
                      <Link to="/about">why choose us</Link>
                    <Link to="/buybitcoin">buy bitcoin</Link>
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