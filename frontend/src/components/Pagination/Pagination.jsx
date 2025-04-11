import React from 'react'

const Pagination = ({page, totalPages, onPageChange, setPage}) => {

    const handlePreviousClick = ()=>{
        if (page > 1) {
            onPageChange(page-1)
        }
    }

    const handleNextClick = ()=>{
        if (page < totalPages) {
            onPageChange(page+1)
        }
    }
  return (
    <div className='flex item-center justify-center space-x-2 py-4'>
      <button 
      disabled={page === 1}
      className={`px-3 py-1 rounded-md ${page === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      onClick={handlePreviousClick}
      >
        Previous
        </button>
        <span className='text-gray-700'>Page {page} of {totalPages} </span>
        <button 
        disabled={page === totalPages || totalPages === 0}
        className={`px-3 py-1 rounded-md ${page === totalPages || totalPages === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 '}`}
        onClick={handleNextClick}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination
