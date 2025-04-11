import express from 'express'
const DisplayRouter = express.Router();

const items = [
  { id: 1, name: 'Item A', category: 'Electronics' },
  { id: 2, name: 'Item B', category: 'Clothing' },
  { id: 3, name: 'Item C', category: 'Electronics' },
  { id: 4, name: 'Item D', category: 'Books' },
  { id: 5, name: 'Item E', category: 'Clothing' },
  { id: 6, name: 'Item F', category: 'Electronics' },
  { id: 7, name: 'Item G', category: 'Books' },
  { id: 8, name: 'Item H', category: 'Clothing' },
  { id: 9, name: 'Item I', category: 'Electronics' },
  { id: 10, name: 'Item J', category: 'Books' },
  { id: 11, name: 'Item K', category: 'Electronics' },
  { id: 12, name: 'Item L', category: 'Clothing' },
  { id: 13, name: 'Item M', category: 'Electronics' },
  { id: 14, name: 'Item N', category: 'Books' },
  { id: 15, name: 'Item O', category: 'Clothing' },
  { id: 16, name: 'Item P', category: 'Electronics' },
  { id: 17, name: 'Item Q', category: 'Books' },
  { id: 18, name: 'Item R', category: 'Clothing' },
  { id: 19, name: 'Item S', category: 'Electronics' },
  { id: 20, name: 'Item T', category: 'Books' },
];

  const itemsPerPage = 5;

  //get api data
  DisplayRouter.get('/display', (req, res)=>{
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page-1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentPageItems = items.slice(startIndex, endIndex)
    const totalItems = items.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    res.json({
      totalItem: items,
      data:currentPageItems,
      totalItems:totalItems,
      totalPages:totalPages,
      currentPage: page,
    })

  })

  

  export default DisplayRouter