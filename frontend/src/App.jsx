import React, { useEffect, useState } from 'react'
import Filter from './components/Filter/Filter'
import DataDisplay from './components/DataDisplay/DataDisplay'
import axios from 'axios'
import Pagination from './components/Pagination/Pagination'

const App = () => {

  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState([])
  const [filter, setFilter] = useState('')
  const [filterData, setFilterData] = useState([])

  const filterFunction = ()=>{
    if (!filter) {
      setData(data)
      return
    }
    const filterResult = totalData.filter((item)=>
    item.name.toLowerCase().includes(filter.toLowerCase()) || 
    item.category.toLowerCase().includes(filter.toLowerCase())
    )
    setData(filterResult)
  }

  
  const fetchData = async()=>{
    const response = await axios.get(`http://localhost:4000/api/data/display?page=${page}`)
    setData(response.data.data)
    setTotal(response.data.totalPages)
    setPage(response.data.currentPage)
    setTotalData(response.data.totalItem)
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  

  useEffect(()=>{
    fetchData()
  },[page])
  {console.log(filterData)}
  
  return (
    <div className='bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8'>
      <div className='bg-white rounded-lg shadow-md p-6'>
      <h1 className='text-2xl font-semibold mb-4 text-gray-800'>Data from Backend </h1>
      <Filter 
          setFilter={setFilter}
          Filter={filter}
          filterFunction = {filterFunction}
      />
      <DataDisplay
       data={data}
       filterData={filterData}
       />

      {total > 0 && (
        <Pagination
        page={page}
        setPage={setPage}
        totalPages={total}
        onPageChange={handlePageChange}
        />
      )}  



      </div>
    </div>
  )
}

export default App
