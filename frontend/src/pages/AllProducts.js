// import React, { useEffect, useState } from 'react'
// import UploadProduct from '../components/UploadProduct'
// import SummaryApi from '../common'
// import AdminProductCard from '../components/AdminProductCard'

// const AllProducts = () => {
//   const [openUploadProduct,setOpenUploadProduct] = useState(false)
//   const [allProduct,setAllProduct] = useState([])

//   const fetchAllProduct = async() =>{
//     const response = await fetch(SummaryApi.allProduct.url)
//     const dataResponse = await response.json()

//     // console.log("product data",dataResponse)

//     setAllProduct(dataResponse?.data || [])
//   }

//   useEffect(()=>{
//     fetchAllProduct()
//   },[])
  
//   return (
//     <div>
//         <div className='bg-white py-2 px-4 flex justify-between items-center'>
//             <h2 className='font-bold text-lg'>All Product</h2>
//             <button  className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
//         </div>

//         {/* all product */}
//         <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
//           {
//             allProduct.map((product,index)=>{
//               return(
//                 <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
//               )
//             })
//           }
//         </div>





//         {/**upload prouct component */}
//         {
//           openUploadProduct && (
//             <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
//           )
//         }
      

//     </div>
//   )
// }

// export default AllProducts




import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()
    setAllProduct(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div className='p-2 sm:p-4'>

      {/* Header with button */}
      <div className='bg-white py-2 px-3 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'>
        <h2 className='font-bold text-lg text-center sm:text-left'>All Products</h2>
        <button
          className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-4 rounded-full text-sm'
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* All Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 max-h-[calc(100vh-190px)] overflow-y-auto'>
        {
          allProduct.map((product, index) => (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          ))
        }
      </div>

      {/* Upload Product Modal */}
      {
        openUploadProduct && (
          <UploadProduct
            onClose={() => setOpenUploadProduct(false)}
            fetchData={fetchAllProduct}
          />
        )
      }
    </div>
  )
}

export default AllProducts
