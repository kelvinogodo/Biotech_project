import React from 'react'
import {motion} from 'framer-motion'
import {AiTwotoneCalendar} from 'react-icons/ai'
import Parser from 'html-react-parser'
const BlogCard = ({item}) => {
  const shortBody = (item.body).slice(0,80)
  const splitBody = Parser(shortBody)
  return (
    <motion.div layout className="card blog-card" data-aos={'fade-up'}>
      <div className='card-img-container'>
      </div>
        <div className="card-body ProseMirror blog-card-body">
            <h1>{item.title}</h1>
            <div className='blog-body proseMirrow'>{splitBody}...</div>
            <div className="date-container">
              <AiTwotoneCalendar className='calender-icon'/>
              <p>{item.date}</p>
            </div>
        </div> 
    </motion.div>
  )
}

export default BlogCard