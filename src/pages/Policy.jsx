import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import '../'
import Contact from '../components/contact/Contact'
const Policy = () => {
  return (
    <main className='gold-page'>
    <Header />
      <div className="policy-container">
        <div className="policy-text-container">
          <h2>Our Policy</h2>
          <p>
              Our company understands the importance of personal information of every participant. Cooperating with our company, you can be sure in privacy of your personal information and in its protection by our employees. Our employees protect the collected by them information from unauthorized access. We use a variety of technologies to reduce the risk of theft of accounts and receiving personal information of our investors.
            </p>
            </div>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}

export default Policy