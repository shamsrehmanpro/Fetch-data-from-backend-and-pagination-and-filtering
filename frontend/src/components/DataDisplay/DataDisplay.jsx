import React from 'react'

const DataDisplay = ({ data, filter, filterData }) => {
  return (
    <div className='mt-4 space-y-2'>
      <ul>
        {data.map(item => (
          <li key={item.id} className='bg-white rounded-md shadow-sm p-3 flex items-center space-x-4'>
            <strong className='text-gray-700 font-semibold'>ID:</strong>
             <span className='text-gray-600'>{item.id},</span>
              <strong className='text-gray-700 font-semibold'>Name:</strong>
              <span className='text-gray-600'>{item.name},</span> 
               <strong className='text-gray-700 font-semibold'>Category:</strong>
               <span className='text-gray-600'>{item.category}</span> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataDisplay
