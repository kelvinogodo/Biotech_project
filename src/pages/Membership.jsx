import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import '..'
import Contact from '../components/contact/Contact'
const Policy = () => {
  return (
    <main className='gold-page'>
    <Header />
      <div className="policy-container">
        <div className="policy-text-container">
          <h2>membership</h2>
          <p>
             Entry into NIBE individual membership now entails enrolling into the College of Biomedical Engineering and Technology (CBET) as Associate II (for new entrants) and as Students (for undergraduates). From this level the individual is expected to undertake the mandatory career development courses of the College to earn his/her transfer to subsequent categories of College membership.
              For the categories of individual membership of the College, click <a href="#membershipcategory"></a> .

              However, companies and corporate organisations desirous of affiliating with NIBE will do so through the Association of Biomedical Engineers and Technologists of Nigeria (NABET).
              For the categories of affiliate membership of the Association, click <a href="https://www.nabet.org.ng/">here</a> .

            </p>
            </div>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}

export default Policy