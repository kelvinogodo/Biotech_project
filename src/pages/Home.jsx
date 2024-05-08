import React from 'react'
import Landpage from '../components/Landpage/Landpage'
import Service from '../components/service/Service'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Info from '../components/info/Info'
const Home = ({posts,loader}) => {
  return (
    <main className='home-img'>
        <Landpage />
        <Service posts={posts} loader={loader} />
        <About />
        <Info />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home