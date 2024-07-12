
import { useState } from 'react'
import './Dashboard.css'
//import Sidebar from './Component/Dashboard/Sidebar'
// import Layout from './Component/Dashboard/Layout'
import Sidebar from './Sidebar';
import Layout from './Layout';




function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
      <Layout /> 
    </div>
  )
}

export default Dashboard;