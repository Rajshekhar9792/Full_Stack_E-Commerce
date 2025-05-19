// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { FaRegCircleUser } from "react-icons/fa6";
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import ROLE from '../common/role';

// const AdminPanel = () => {
//     const user = useSelector(state => state?.user?.user)
//     const navigate = useNavigate()


//     useEffect(()=>{
//         if(user?.role !== ROLE.ADMIN){
//             navigate("/")
//         }
//     },[user])

//   return (
//     <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

//         <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
//                 <div className='h-32  flex justify-center items-center flex-col'>
//                     <div className='text-5xl cursor-pointer relative flex justify-center'>
//                         {
//                         user?.profilePic ? (
//                             <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
//                         ) : (
//                             <FaRegCircleUser/>
//                         )
//                         }
//                     </div>
//                     <p className='capitalize text-lg font-semibold'>{user?.name}</p>
//                     <p className='text-sm'>{user?.role}</p>
//                 </div>

//                  {/***navigation */}       
//                 <div>   
//                     <nav className='grid p-4'>
//                         <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
//                         <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All product</Link>
//                     </nav>
//                 </div>  
//         </aside>

//         <main className='w-full h-full p-2'>
//             <Outlet/>
//         </main>
//     </div>
//   )
// }

// export default AdminPanel







// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { FaRegCircleUser } from "react-icons/fa6";
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { FiMenu, FiX } from "react-icons/fi";
// import ROLE from '../common/role';

// const AdminPanel = () => {
//     const user = useSelector(state => state?.user?.user)
//     const navigate = useNavigate()
//     const [sidebarOpen, setSidebarOpen] = useState(false)

//     useEffect(() => {
//         if (user?.role !== ROLE.ADMIN) {
//             navigate("/")
//         }
//     }, [user])

//     return (
//         <div className='min-h-[calc(100vh-120px)] flex flex-col md:flex-row'>

//             {/* Mobile Navbar */}
//             <div className='md:hidden flex items-center justify-between p-4 bg-white customShadow'>
//                 <p className='text-lg font-bold'>Admin Panel</p>
//                 <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//                     {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//                 </button>
//             </div>

//             {/* Sidebar */}
//             <aside
//                 className={`
//                     bg-white w-full md:max-w-60 customShadow md:static absolute z-10 transition-transform
//                     ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//                 `}
//             >
//                 <div className='h-32 flex justify-center items-center flex-col'>
//                     <div className='text-5xl cursor-pointer flex justify-center'>
//                         {
//                             user?.profilePic ? (
//                                 <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
//                             ) : (
//                                 <FaRegCircleUser />
//                             )
//                         }
//                     </div>
//                     <p className='capitalize text-lg font-semibold'>{user?.name}</p>
//                     <p className='text-sm'>{user?.role}</p>
//                 </div>

//                 {/* Navigation */}
//                 <nav className='grid p-4 space-y-2'>
//                     <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100 rounded'>All Users</Link>
//                     <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100 rounded'>All Products</Link>
//                 </nav>
//             </aside>

//             {/* Main content */}
//             <main className='w-full h-full p-2'>
//                 <Outlet />
//             </main>
//         </div>
//     )
// }

// export default AdminPanel


import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"
import ROLE from '../common/role'

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user)
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/")
    }
  }, [user])

  return (
    <div className='min-h-[calc(100vh-120px)] flex flex-col md:flex-row relative'>

      {/* Mobile Top Navbar */}
      <div className='md:hidden flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
        <p className='text-lg font-bold'>Admin Panel</p>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          bg-white w-64 md:w-60 h-full customShadow md:static fixed z-40 top-16 left-0
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
      >
        <div className='h-32 flex justify-center items-center flex-col'>
          <div className='text-5xl cursor-pointer'>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className='w-20 h-20 rounded-full object-cover' alt={user?.name} />
              ) : (
                <FaRegCircleUser />
              )
            }
          </div>
          <p className='capitalize text-lg font-semibold mt-1'>{user?.name}</p>
          <p className='text-sm text-gray-500'>{user?.role}</p>
        </div>

        {/* Navigation */}
        <nav className='grid p-4 space-y-2'>
          <Link to={"all-users"} className='px-3 py-2 hover:bg-slate-100 rounded' onClick={() => setSidebarOpen(false)}>All Users</Link>
          <Link to={"all-products"} className='px-3 py-2 hover:bg-slate-100 rounded' onClick={() => setSidebarOpen(false)}>All Products</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className='w-full p-4 mt-16 md:mt-0 bg-gray-50'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPanel
