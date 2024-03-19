import React from 'react'
import Landpage from '../components/Landpage/Landpage'
import Why from '../components/why/Why'
import Service from '../components/service/Service'
import Plan from '../components/plans/Plan'
import About from '../components/about/About'
import Feature from '../components/feature/Feature'
import Roadmap from '../components/roadmap/Roadmap'
import Faq from '../components/Faq/Faq'
import Review from '../components/review/Review'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Info from '../components/info/Info'
const Home = () => {
  return (
    <main className='home-img'>
        <Landpage />
        <Service />
        <About />
        <Info />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home