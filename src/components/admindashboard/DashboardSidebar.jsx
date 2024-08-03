import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineCreateNewFolder } from 'react-icons/md'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from "react-icons/md";
const DashboardSidebar = ({toggleEdit,toggleCreate,toggleOverview,closeEdit,closeCreate,closeOverview,openIndex,closeIndex,closeCreateProperty,closePropetyEdit,openDeleteIndex,closeDeleteIndex}) => {
  return (
    <aside className='dashboard-aside'>
       <div className="tab" onClick={()=>{
        toggleOverview()
        closeEdit()
        closeCreate()
        closeCreateProperty()
        closePropetyEdit()
        closeIndex()
        closeDeleteIndex()
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
          closeIndex()
          closeDeleteIndex()
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
            closeIndex()
            closeDeleteIndex()
              }}>edit post</p>
       </div>
       <div className="tab">
          <IoCloudUploadOutline />
            <p
            onClick={()=>{
              openIndex()
              closeOverview()
              closeCreate()
              closePropetyEdit()
              closeCreateProperty()
            closeEdit()
            closeDeleteIndex()
              }}>upload index</p>
       </div>
       <div className="tab">
          <MdOutlineDeleteOutline />
            <p
          onClick={() => {
              openDeleteIndex()
              closeIndex()
              closeOverview()
              closeCreate()
              closePropetyEdit()
              closeCreateProperty()
              closeEdit()
              }}>delete index</p>
       </div>
    </aside>
  )
}

export default DashboardSidebar