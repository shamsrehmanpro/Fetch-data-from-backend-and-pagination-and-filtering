import React, { useEffect, useState } from 'react'

const Filter = ({ data, totalData, setData }) => {
  const [filter, setFilter] = useState({})




  const filterFunction = () => {
    if (!filter) {
      setData(data)
      return
    }
    const filterResult = totalData.filter(item => {
      const nameFilter = filter.name ? filter.name.toLowerCase() : ''
      const categoryFilter = filter.category ? filter.category.toLowerCase() : ''

      const nameMatch = !nameFilter || (item.name && item.name.toLowerCase().includes(nameFilter))
      const categoryMatch = !categoryFilter || (item.category && item.category.toLowerCase().includes(categoryFilter))

      if (nameFilter && categoryFilter) {
        return nameMatch && categoryMatch
      }
      else if (nameFilter) {
        return nameMatch
      }
      else if (categoryFilter) {
        return categoryMatch
      }
      else {
        return true
      }
    })

    setData(filterResult)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilter((prev) => ({ ...prev, [name]: value }))
  };

  

  return (
    <div className='bg-white p-6 rounded-md shadow-md'>
      <h3 className='text-xl font-semibold mb-4'>Filter </h3>

      <div className='mb-3'>
        <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name:</label>
        <input onChange={handleChange} name='name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />
      </div>

      <div className='mb-4'>
        <label htmlFor="category" className='block text-gray-700 text-sm font-bold mb-2'>Category:</label>
        <input onChange={handleChange} name='category' type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
      </div>


      <div className='flex space-x-2'>
        <button onClick={filterFunction} className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Apply Filter</button>
        <button className='bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Clear Filter</button>
      </div>



    </div>
  )
}

export default Filter
