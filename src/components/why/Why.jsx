import React from 'react'
import './why.css'
const Why = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>upcoming events</h2>
            </div>
            <h1 data-aos="fade-up">expect amazing events</h1>
            <p data-aos="fade-up">Electrifying events organised by  Nigerian Institute for Biomedical Engineering</p>
        </div>
        <div className="why-choose-us-card-container">
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">01</span>
                <h2>Ultra Fast & Secure</h2>
                <p>we employ the use of latest reliable and sophisticated technology, to ensure strongly secured, fast and reliable transactions.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">02</span>
                <h2>Highly Scalable</h2>
                <p>your investments are very much upgradeable at any point you want to. we provide our clients the ability to scale up their investments.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">03</span>
                <h2>Reliable & Low Cost</h2>
                <p>We use our advanced experience in arbitrage trading to minimize our clients cost of trade and unnecessary transaction expenses.</p>
            </div>
        </div>
    </div>
  )
}

export default Why