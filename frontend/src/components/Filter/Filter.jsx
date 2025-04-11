import React from 'react'

const Filter = ({data, setFilter, Filter, filterFunction}) => {



  
  return (
    <div className='bg-white p-6 rounded-md shadow-md'>
      <h3 className='text-xl font-semibold mb-4'>Filter </h3>

      <div className='mb-3'>
      <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name:</label>
      <input onChange={(event)=>setFilter(event.target.value)}  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />
      </div>
      
      <div className='mb-4'>
      <label htmlFor="category" className='block text-gray-700 text-sm font-bold mb-2'>Category:</label>
      <input onChange={(event)=>setFilter(event.target.value)}  type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
      </div>
      

      <div className='flex space-x-2'>
      <button onClick={()=>filterFunction()} className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Apply Filter</button>
      <button  className='bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Clear Filter</button>
      </div>
     
    

    </div>
  )
}

export default Filter
