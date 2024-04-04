import React from 'react'
import { Link } from 'react-router-dom'
import './admindashboard.css'
import Parser from 'html-react-parser'
const BlogCard = ({item}) => {
  const shortBody = (item.body).slice(0, 100)
  const splitBody = Parser(shortBody)
  return (
    <div className="post-card gold-card" data-aos="fade-up">
        <div className="gold-card-text">
                  <small>{item.date}</small>
                  <h3>{item.title}</h3>
                  <p>{splitBody}...</p>
        <Link to={`/posts/${item._id}`}>read more</Link>
              </div>
    </div>
  )
}
              

export default BlogCard