import React from 'react'
import Landpage from '../components/Landpage/Landpage'
import Service from '../components/service/Service'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Info from '../components/info/Info'
import { useEffect, useState } from 'react'
const Home = ({route}) => {
  const [loader,setLoader] = useState(true)
  const [posts, setPosts] = useState([])
  
    const fetchPosts = async ()=>{
    const postRequest = await (
     fetch(`${route}/api/fetchPosts`))
    const posts = await (
     postRequest.json()) 
      setPosts(posts)
      setLoader(false)
  }


  useEffect(() => { fetchPosts() },[])
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