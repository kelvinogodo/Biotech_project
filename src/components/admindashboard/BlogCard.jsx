import React from 'react'
import {motion} from 'framer-motion'
import {AiTwotoneCalendar} from 'react-icons/ai'
import './admindashboard.css'
import Parser from 'html-react-parser'
const BlogCard = ({item}) => {
  const shortBody = (item.body).slice(0, 100)
  const splitBody = Parser(shortBody)
  return (
    <motion.div className="post-card gold-card" data-aos="fade-up">
        <div className="gold-card-text">
                  <small>{item.date}</small>
                  <h3>{item.title}</h3>
                  <p>{splitBody}...</p>
        <a href={`/posts/${item._id}`}>read more</a>
              </div>
    </motion.div>
  )
}
              

export default BlogCard