
import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)

    if (value) {
      navigate(`/search?q=${value}`)
    } else {
      navigate("/search")
    }
  }

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        {/* Logo */}
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        {/* Search (desktop only) */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 mx-4'>
          <input
            type='text'
            placeholder='search product here...'
            className='w-full outline-none'
            onChange={handleSearch}
            value={search}
          />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-4 lg:gap-8 xl:gap-12 relative'>

          {/* Profile icon */}
          {
            user?._id && (
              <div
                className='text-3xl cursor-pointer relative flex justify-center'
                onClick={() => setMenuDisplay(prev => !prev)}
              >
                {
                  user?.profilePic ? (
                    <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                  ) : (
                    <FaRegCircleUser />
                  )
                }

                {/* Dropdown menu */}
                {menuDisplay && (
                  <div className='absolute top-12 right-0 bg-white shadow-md rounded w-40 z-50 text-sm'>
                    <nav className='flex flex-col'>
                      {user?.role === ROLE.ADMIN && (
                        <Link
                          to="/admin-panel/all-products"
                          className='hover:bg-slate-100 px-4 py-2'
                          onClick={() => setMenuDisplay(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        to='/order'
                        className='hover:bg-slate-100 px-4 py-2'
                        onClick={() => setMenuDisplay(false)}
                      >
                        Orders
                      </Link>
                    </nav>
                  </div>
                )}
              </div>
            )
          }

          {/* Cart icon */}
          {
            user?._id && (
              <Link to="/cart" className='text-2xl relative'>
                <span><FaShoppingCart /></span>
                <div className='bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center absolute -top-2 -right-3'>
                  {context?.cartProductCount}
                </div>
              </Link>
            )
          }

          {/* Login/Logout */}
          <div>
            {
              user?._id ? (
                <button
                  onClick={handleLogout}
                  className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 text-sm'
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 text-sm'
                >
                  Login
                </Link>
              )
            }
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
