
import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md"
import ChangeUserRole from '../components/ChangeUserRole'

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([])
  const [openUpdateRole, setOpenUpdateRole] = useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: ""
  })

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: 'include'
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      setAllUsers(dataResponse.data)
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div className='bg-white pb-4'>
      <h2 className="text-lg font-bold p-4">All Users</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto px-4">
        <table className='min-w-[600px] w-full border border-gray-200 rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-black text-white text-left'>
              <th className='py-2 px-3'>Sr.</th>
              <th className='py-2 px-3'>Name</th>
              <th className='py-2 px-3'>Email</th>
              <th className='py-2 px-3'>Role</th>
              <th className='py-2 px-3'>Created Date</th>
              <th className='py-2 px-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allUser.map((el, index) => (
                <tr
                  key={el._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className='py-2 px-3'>{index + 1}</td>
                  <td className='py-2 px-3'>{el?.name}</td>
                  <td className='py-2 px-3 break-words'>{el?.email}</td>
                  <td className='py-2 px-3 capitalize'>{el?.role}</td>
                  <td className='py-2 px-3'>{moment(el?.createdAt).format('LL')}</td>
                  <td className='py-2 px-3'>
                    <button
                      className='bg-green-100 p-2 rounded-full hover:bg-green-500 hover:text-white transition'
                      onClick={() => {
                        setUpdateUserDetails(el)
                        setOpenUpdateRole(true)
                      }}
                      aria-label="Edit User"
                    >
                      <MdModeEdit />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Update User Modal */}
      {
        openUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFunc={fetchAllUsers}
          />
        )
      }
    </div>
  )
}

export default AllUsers
