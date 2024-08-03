import { useState, useEffect } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardSidebar from './DashboardSidebar'
import Overview from './Overview'
import {FaUserCircle} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import {GoCreditCard} from 'react-icons/go'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {ImUserPlus} from 'react-icons/im'
import {IoIosSwitch} from 'react-icons/io'
import {RiEdit2Fill} from 'react-icons/ri'
const Admindashboard = ({route}) => {
  
  const [showOverview, setShowOverview] = useState(true)
  const [showCreatePostSection, setShowPostCreateSection] = useState(false)
  const [showCreatePropertySection, setShowPropertyCreateSection] = useState(false)
  const [showEditPostSection, setShowEditPostSection] = useState(false)
  const [showEditPropertySection, setShowEditPropertySection] = useState(false)
  const [showUpdateIndex, setShowUpdateIndex] = useState(false)
  const [deleteIndex,setDeleteIndex] = useState(false)

  const toggleOverview = () => {
    setShowOverview(true)
  }
  const toggleCreate = () => {
    setShowPostCreateSection(true)
  }
  const toggleCreateProperty = () => {
    setShowPropertyCreateSection(true)
  }
  const toggleEdit = () => {
    setShowEditPostSection(true)
  }
  const togglePropetyEdit = () => {
    setShowEditPropertySection(true)
  }
  const closeCreateProperty = () => {
    setShowPropertyCreateSection(false)
  }
  const closePropetyEdit = () => {
    setShowEditPropertySection(false)
  }
  const closeOverview = () => {
    setShowOverview(false)
  }
  const closeCreate = () => {
    setShowPostCreateSection(false)
  }
  const closeEdit = () => {
    setShowEditPostSection(false)
  }
  const toggleUpdateIndex = () => {
    setShowUpdateIndex(true)
  }
  const closeUpdateIndex = () => {
    setShowUpdateIndex(false)
  }
  const openDeleteIndex = () => {
    setDeleteIndex(true)
  }
  const closeDeleteIndex = () => {
    setDeleteIndex(false)
  }
  const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '/admin'
  }
  return (
    <>
      <div className='mobile-tabs'>
        <span className='user-icon-container'>
          <FaUserCircle className='svg' />
          <span className="tooltip">
            <span onClick={() => logout }>
              <IoIosSwitch />
              <p>logout</p>
            </span>
            <span>
              <ImUserPlus />
              <p>account info</p>
            </span>
          </span>
        </span>
        <span className='user-icon-container'>
          <AiOutlineHome className='svg' onClick={() => {
            toggleOverview()
            closeCreate()
            closeCreateProperty()
            closeEdit()
            closePropetyEdit()
            closeUpdateIndex()
          }} />
        </span>
        <span className='user-icon-container'>
          <FiEdit className='svg' />
          <span className="tooltip">
            <span onClick={() => {
              closeOverview()
              closeCreate()
              closeCreateProperty()
              toggleEdit()
              closePropetyEdit()
              closeUpdateIndex()
            }}>
              <RiEdit2Fill />
              <p>edit post</p>
            </span>
            <span onClick={() => {
              closeOverview()
              closeCreate()
              closeCreateProperty()
              closeEdit()
              togglePropetyEdit()
              closeUpdateIndex()
            }}>
              <RiEdit2Fill />
              <p>edit property</p>
            </span>
          </span>
        </span>
        <span className='user-icon-container'>
          <GoCreditCard className='svg ' />
          <span className="tooltip">
            <span onClick={() => {
              closeOverview()
              toggleCreate()
              closeCreateProperty()
              closeEdit()
              closePropetyEdit()
              closeUpdateIndex()
            }}>
              <MdOutlineCreateNewFolder />
              <p>create post</p>
            </span>
            <span onClick={() => {
              closeOverview()
              closeCreate()
              toggleCreateProperty()
              closeEdit()
              closePropetyEdit()
              closeUpdateIndex()
            }}>
              <MdOutlineCreateNewFolder />
              <p>create property</p>
            </span>
          </span>
        </span>
      </div>
      <DashboardHeader />
      <div className="dashboard-body">
        <DashboardSidebar toggleEdit={toggleEdit} toggleCreate={toggleCreate} toggleOverview={toggleOverview} closeOverview={closeOverview} closeCreate={closeCreate} closeEdit={closeEdit} toggleCreateProperty={toggleCreateProperty} togglePropetyEdit={togglePropetyEdit} closeCreateProperty={closeCreateProperty} closePropetyEdit={closePropetyEdit} openIndex={toggleUpdateIndex} closeIndex={ closeUpdateIndex} openDeleteIndex={openDeleteIndex} closeDeleteIndex={closeDeleteIndex}/>
        <Overview showOverview={showOverview} showCreateSection={showCreatePostSection} showEditSection={showEditPostSection} showCreatePropertySection={showCreatePropertySection} showEditPropertySection={showEditPropertySection} route={route} showUpdateIndex={showUpdateIndex} deleteIndex={deleteIndex} />
      </div>
    </>
  )
}

export default Admindashboard

