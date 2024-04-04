import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
const VerifyEmail = ({route}) => {
    const [loader, setLoader] = useState(true)
    const [post,setPost] = useState()
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
                    setLoader(true)
                    const fetchPost = async()=>{
                    try {
                        const url = `${route}/api/posts/${params.id}`
                        const req = await fetch(url,{
                            headers:{
                                'Content-Type':'application/json'
                            }
                        })
                        const res = await req.json()
                        setLoader(false)
                        if (res.status === 404) {
                            navigate('/')
                        }
                        else {
                            setPost(res.post)
                       }
                    } catch (error) {
                    console.log(error)
                    setLoader(false)
                }
        }

        fetchPost()
    }, [params])
    return (
    <>
        {
            loader && <Loader />
        }
        <main className='page-container'>
      <section className="blog-header">
        <Link to='/news'>news</Link>
        <span>/</span>
        <Link to='/'> home</Link>
      </section>
      <section className="post-container">
        <div className="post-text-container">
          <span className="post-date-container">
            <p> {post ? post.date : ''}</p>
          </span>
          <p>Author : {post ? post.author : ''}</p>
          <h1>{post ? post.title : ''}</h1>
          <div className="ProseMirror my-post-body">
            {parse(post ? post.body : '')}
          </div>
        </div>
      </section>
    </main>
    </>    
  )
}

export default VerifyEmail