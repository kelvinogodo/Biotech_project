import {useState,useEffect,useRef} from 'react'
import {FaWindowClose} from 'react-icons/fa'
import {IoIosCreate} from 'react-icons/io'
import {MdPostAdd} from 'react-icons/md'
import {GiHouseKeys} from 'react-icons/gi'
import BlogCard from './BlogCard'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {RiFileEditLine} from 'react-icons/ri'
import TipTap from './TipTap'
import parser from 'html-react-parser'
import {BsUpload} from 'react-icons/bs'
import Swal from 'sweetalert2'
import './admindashboard.css'
import Loader from '../Loader'
import { FaFileUpload } from "react-icons/fa";


const Overview = ({showOverview,showCreateSection,showEditSection,route,showUpdateIndex,deleteIndex}) => {
  const [isLoading, setIsLoading] = useState(false)
  
  // posts state managers 
  const [posts, setPosts] = useState() 
  const [pdfs,setPdf] = useState()
  
  const fetchPosts = async ()=>{
    const postRequest = await (
     fetch(`${route}/api/fetchPosts`))
    const posts = await (
     postRequest.json()) 
    setPosts(posts)
  }

  const fetchPdfs = async ()=>{
    const postRequest = await (
     fetch(`${route}/api/fetchPdfs`))
    const pdfs = await (
     postRequest.json()) 
    setPdf(pdfs)
  }

  // useEffect(()=>{ 
  //   const admin = localStorage.getItem('user')
  //   if(admin !== null){
  //       console.log('welcome admin')
  //   }
  //   else{
  //       window.location.href= '/admin'
  //   }
  // fetchPosts()
  // },[])

  useEffect(() => { fetchPosts() },[])
  // useEffect(() => { fetchPdfs() },[])
  
  const [postTitle,setPostTitle] = useState()
  const [postBody, setPostBody] = useState()
  const [postAuthor,setPostAuthor] = useState('Auditor')
  const [postDate,setPostDate] = useState()
  const [postUrl,setPosturl] = useState()

  const createPost = async () => {
    
    const d = new Date().toLocaleDateString()
    const date = d
    setPostDate(date)
    const newPost = {
      title:`${postTitle}`,
      body:`${postBody}`,
      author:`${postAuthor}`,
      date: `${date}`,
      url:`${postUrl}`
    }

    const req = await fetch(`${route}/api/createPost`, {
      method:'POST',
      headers: {
        'content-Type':'application/json'
      },
      body: JSON.stringify(newPost)
    })

    const res = await req.json()
    setPosts(res.posts)
    if (res.status === 'ok') {
      console.log('post successfully created')
    }
    fetchPosts()
  }  

// delete post function 
  const deletePost = async (id)=>{
    const deleteRequest = await fetch(`${route}/api/deletePost`,
    {
      method:'DELETE',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    }
    )
    const deleteResponse = await deleteRequest.json()
    switch (deleteResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'post successfully deleted ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchPosts()
  }
// delete pdf function 
  const deletePdf = async (id)=>{
    const deleteRequest = await fetch(`${route}/api/deletePdf`,
    {
      method:'DELETE',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    }
    )
    const deleteResponse = await deleteRequest.json()
    switch (deleteResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'post successfully deleted ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchPdfs()
  }
  
  // post form state controlers 
  const [postEditForm,setPostEditForm] = useState(false)

  // edit post value state managers 
  const newPostTitle = useRef(null)
  const [newPostBody,setNewPostBody] = useState()
  const [activePostId, setActivePostId] = useState()
  const [activePost,setActivePost] = useState()
  const newUrl= useRef(null)

  const editPost = async ()=>{
    const editedPost={
      title: newPostTitle.current.innerText,
      body: newPostBody,
      url: newUrl
    }

    const editRequest = await fetch(`${route}/api/editPost`,
    {
      method:'PATCH',
      headers:{
        'content-Type': 'application/json'
      },
      body:JSON.stringify({
        id:activePostId,
        title: editedPost.title,
        body: editedPost.body,
        url:editedPost.url
      }) 
    }
    )
    const postResponse = await editRequest.json() 
    if (postResponse) {
        Swal.fire(
        'congrats',
        `post successfully updated`,
        'success'
      )
    }
    fetchPosts()
  }

    // const [active,setActive] = useState(active)
    const [showImage,setShowImage] = useState()
    const [modal,setModal] = useState(false)
  const [loader, setLoader] = useState(false)
  
  const uploadProof = async (file)=>{
        setModal(true)
        console.log(file)
        const formData = new FormData()
        formData.append('file',file)
        formData.append('upload_preset','upload');
        const req = await fetch('https://api.cloudinary.com/v1_1/duesyx3zu/image/upload',
          {
          method:'POST',
          body:formData,
        }
        )
        const res = await req.json()
        if(res){
            setShowImage(res.secure_url)
            setModal(false)
        }
  }

  const createIndex= async() => {
    const req = await fetch(`${route}/api/createIndex`, {
      method: 'POST',
         headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        file_url: showImage
      }
      )
    })
    const response = await req.json()
    setPdf = response.pdfs
    if (response.status = 'ok') {
      Swal.fire(
        'congrats',
        `post successfully updated`,
        'success'
      )
      setShowImage=''
    } else {
      Swal.fire(
        'error',
        `${response.error}`,
        'error'
      )
    }
  }
  
  return (
    <main className='overview-section'>
      {
        isLoading && <Loader />
      }

      {
        postEditForm &&
        <section className='post-view-section'>
        <div className="form-view">
        <span className='sortlist-close-btn'onClick={()=>{
            setPostEditForm(false)
        }}>
            <FaWindowClose />
        </span>
        <form className="create-post-form" onSubmit={async function(e){
                e.preventDefault()
                editPost()
          }}>
        <div contentEditable='true' ref={newPostTitle} className='edit-input'>{activePost ? activePost.title : 'edit title'}</div>
          <div className="tiptap-container">
            <TipTap setPostBody={setNewPostBody} body={activePost ? activePost.body : 'edit body'}/>
          </div>
          <div contentEditable='true' ref={newUrl} className='edit-input'>{activePost && activePost.url}</div>
          <input type="submit" value="publish" className='create-btn'/>
        </form>
        </div>
        <div className="overview ProseMirror">
        </div>
      </section>
      }

      {showOverview && 
        <section className='overview-page'>
          <div className="overview-card-container">
            <div className="overview-card">
              <IoIosCreate className='overview-icon'/>
              <h2>{posts ? posts.length : 0}</h2>
              <p>posts created</p>
            </div>
            <div className="overview-card">
              <MdPostAdd  className='overview-icon second'/>
              <h2>0</h2>
              <p>active members</p>
            </div>
            <div className="overview-card ">
              <GiHouseKeys className='overview-icon third'/>
              <h2>0</h2>
              <p>active associates</p>
            </div>
          </div>
        </section>}
      {showCreateSection &&
        <section className='post-view-section'>
          <div className="form-view">
          <form className="create-post-form" onSubmit={(e)=>{
              e.preventDefault()
              createPost()
            }}>
            <input type="text" required placeholder='post title'className='input' 
            onChange={(e)=>{
              const title = e.target.value.toString()
              setPostTitle(title)
            }}
            />
            <div className="tiptap-container">
              <TipTap setPostBody={setPostBody} body={''}/>
            </div>
            <input type="text" placeholder=' published by' className='input'
              onChange={(e)=>{
                const author = e.target.value.toString()
                setPostAuthor(author)
              }}
              />
              <input type="text" placeholder='external url'className='input' 
            onChange={(e)=>{
              const url = e.target.value.toString()
              setPosturl(url)
            }}
            />
            <input type="submit" value="create post" className='create-btn'/>
          </form>
          </div>

          <div className="overview ProseMirror">
            {postTitle && <h1>{postTitle}</h1>}
            {postBody && <div className="post-body">
              {parser(postBody)}
            </div>}
          </div>
        </section>}
      
        {showEditSection && 
          <section className='overview-page dashboard-property-list'>
            {
              posts  ?
              posts.map(post =>(
                <div className='edit-card' key={post._id}>
                  <div className="edit-icon-containers">
                    <RiFileEditLine className='edit-icon edit' onClick={()=>{
                      setActivePost({
                        title:post.title,
                        body:post.body,
                      })
                      setPostEditForm(true)
                      setActivePostId(post._id)
                    }}/>
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>deletePost(post._id)}/>
                  </div>
                  <BlogCard item={post} />
                </div>
                )) : <p> fetching posts... </p>
            }
          </section>
          }
        {showUpdateIndex && 
          <>
            {
            <div className="proof-container">
                    <form action="" className='proof-form' onSubmit={(e)=>{
                        e.preventDefault()
                        createIndex()
                    }}>
                        <h2>upload file</h2>
                          <div className="proof-img-container">
                              {
                                  modal && <div className="ping-container"><div class="ping"></div></div> 
                              }
                            {
                                showImage === undefined &&  !modal ? <FaFileUpload /> : <img src={`${showImage}`} alt="" className='proof-image'/> 
                            }
                        </div>
                        <label htmlFor="proof-img" className='proof-label'>
                            <BsUpload />
                            <input type="file" accept='.jpg, .png, .svg, .webp, .jpeg, .pdf,.txt, .doc' name="images" id="proof-img" className='proof-input' required onChange={(e)=>{
                                 const image = e.target.files[0]
                                 uploadProof(image)
                            }} />
                        </label>
                        <input type="submit" value="upload" className='proof-submit-btn' />
                    </form>
                </div>
            }
          </>
          }
        {deleteIndex && 
          <section className='overview-page dashboard-property-list'>
            {
              pdfs ?
              pdfs.map(pdf =>(
                <div className='edit-card' key={pdf.file_url}>
                  <div className="edit-icon-containers">
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>deletePdf(pdf.file_url)}/>
                  </div>
                  <img src={`${pdf.file_url}`} alt="" />
                </div>
                )) : <p> fetching pdf... </p>
            }
          </section>
          }
    </main>
  )
}

export default Overview