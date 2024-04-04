import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
        console.log(post)
    return (
    <>
        {
            loader && <Loader />
        }
        <main>
            <p>posts fetching...</p>
        </main>
    </>    
  )
}

export default VerifyEmail