import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {FiEdit3} from 'react-icons/fi'
const DashboardSidebar = ({toggleEdit,toggleCreate,toggleOverview,closeEdit,closeCreate,closeOverview,toggleCreateProperty,togglePropetyEdit,closeCreateProperty,closePropetyEdit}) => {
  return (
    <aside className='dashboard-aside'>
       <div className="tab" onClick={()=>{
        toggleOverview()
        closeEdit()
        closeCreate()
        closeCreateProperty()
        closePropetyEdit()
        }}>
          <AiOutlineHome className='tab-icon'/>
          <p>overview</p>
       </div>
       <div className="tab" >
          <MdOutlineCreateNewFolder />
            <p onClick={()=>{
              toggleCreate()
              closeEdit()
              closeOverview()
              closeCreateProperty()
              closePropetyEdit()
              }}>create post</p>
       </div>
       <div className="tab">
          <FiEdit3 />
            <p
            onClick={()=>{
              toggleEdit()
              closeOverview()
              closeCreate()
              closePropetyEdit()
              closeCreateProperty()
              }}>edit post</p>
       </div>
    </aside>
  )
}

export default DashboardSidebar