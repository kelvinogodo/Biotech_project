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
import Swal from 'sweetalert2'
import Loader from '../Loader'


const Overview = ({showOverview,showCreateSection,showEditSection,route}) => {
  const [isLoading, setIsLoading] = useState(false)
  
  // posts state managers 
  const [posts,setPosts]= useState() 
  
  const fetchData = async ()=>{
    const [postRequest] = await (
     fetch(`${route}/api/fetchPosts`))
    const posts = await (
     postRequest.json()) 
    setPosts(posts)
  }

  // useEffect(()=>{ 
  //   const admin = localStorage.getItem('user')
  //   if(admin !== null){
  //       console.log('welcome admin')
  //   }
  //   else{
  //       window.location.href= '/admin'
  //   }
  // fetchData()
  // },[])
  
  const [postTitle,setPostTitle] = useState()
  const [postBody, setPostBody] = useState()
  const [postAuthor,setPostAuthor] = useState('ogodo dominic')
  const [postDate,setPostDate] = useState()

  // const [uploadImage,setUploadImage] = useState()

  // const uploadFile = async ()=>{
  //   setIsLoading(true)
  //   const formData = new FormData()
  //   formData.append('file',uploadImage)
  //   formData.append('upload_preset','upload');
  //   const req = await fetch('https://api.cloudinary.com/v1_1/duesyx3zu/image/upload',
  //     {
  //     method:'POST',
  //     body:formData,
  //   }
  //   )
  //   const res = await req.json()
  //   res && setIsLoading(false)
  //   console.log(`${res.secure_url} .... upload ran first`)
  //   await createPost(res.secure_url)
  // }

  const createPost = async () => {
    
    const d = new Date().toLocaleDateString()
    const date = d
    setPostDate(date)
    const newPost = {
      title:`${postTitle}`,
      body:`${postBody}`,
      author:`${postAuthor}`,
      date:`${date}`,
    }

    const req = await fetch(`${route}/api/createPost`, {
      method:'POST',
      headers: {
        'content-Type':'application/json'
      },
      body: JSON.stringify(newPost)
    })

    const res = await req.json()
    if (res.status == 'ok') {
      console.log('post successfully created')
    }
    fetchData()
  }  

// delete post function 
  const deletePost = async (id)=>{
    const deleteRequest = await fetch(`${route}/api/deletePost`,
    {
      method:'POST',
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
    fetchData()
  }
  
  // post form state controlers 
  const [postEditForm,setPostEditForm] = useState(false)

  // edit post value state managers 
  const newPostTitle = useRef(null)
  const [newPostBody,setNewPostBody] = useState()
  const [activePostId, setActivePostId] = useState()
  const [activePost,setActivePost] = useState()

  const editPost = async ()=>{
    const editedPost={
      title: newPostTitle.current.innerText,
      body: newPostBody,
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
        body:editedPost.body,
      }) 
    }
    )
    const postResponse = await editRequest.json() 
    switch (postResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'post successfully updated ',
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
    fetchData()
  }
  const uploadNewPostImage = async ()=>{
    setIsLoading(true)
    const formData = new FormData()
    formData.append('file')
    formData.append('upload_preset','upload');
    const req = await fetch('https://api.cloudinary.com/v1_1/duesyx3zu/image/upload',
      {
      method:'POST',
      body:formData,
    }
    )
    const res = await req.json()
    res && setIsLoading(false)
    console.log(`${res.secure_url} .... upload ran first`)
    await editPost(res.secure_url)
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
          }}>
        <div contentEditable='true' ref={newPostTitle} className='edit-input'>{activePost ? activePost.title : 'edit title'}</div>
          <div className="tiptap-container">
            <TipTap setPostBody={setNewPostBody} body={activePost ? activePost.body : 'edit body'}/>
          </div>
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
              <h1>{posts ? posts.length : 35}</h1>
              <p>posts created</p>
            </div>
            <div className="overview-card">
              <MdPostAdd  className='overview-icon second'/>
              <h1>{30}</h1>
              <p>properties available</p>
            </div>
            <div className="overview-card ">
              <GiHouseKeys className='overview-icon third'/>
              <h1>20</h1>
              <p>properties</p>
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
              }} required
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
              posts ?
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
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>{deletePost(post._id)}}/>
                  </div>
                  <BlogCard item={post} />
                </div>
                )) : <p> fetching posts... </p>
            }
          </section>
          }
    </main>
  )
}

export default Overview