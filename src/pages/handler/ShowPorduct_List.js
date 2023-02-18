import React, {  useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAll_Product_List, getAllCategories, getSubCatList, Delete_ProductById } from '../../redux/reducers/gallerySlice';



const ShowPorduct_List = () => {
    const { categories, sub_categories, products } = useSelector((state) => state.gallery);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCategories());
      dispatch(getAll_Product_List());
    });

    const Delete_Product = (id) => {
        dispatch(Delete_ProductById(id));
      }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Images</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && 
              products.map((item) => {
              return (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{item._id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.company_name}</TableCell>
              <TableCell align="right">
                <img style={{widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image}`} alt='product'/>
                <img style={{widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image2}`} alt='product'/>
                <img style={{widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image3}`} alt='product'/>
                <img style={{widht: '50px', height: '50px'}} src={`http://localhost:8000/${item.image4}`} alt='product'/>
              </TableCell>
              <TableCell align="right">Rs. {item.ajayam_price}</TableCell>
              <TableCell align="right">{item.discount}%</TableCell>
              <TableCell align='right'  style={{color:'blue'}}>
                <Link to={`/handler/update_product/${item._id}`}>
                    <UpdateIcon />
                </Link>
              </TableCell>
              <TableCell align='right'  style={{color:'red'}}><DeleteIcon onClick={()=>Delete_Product(item._id)} /></TableCell>
            </TableRow>
           )
        })
    }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ShowPorduct_List;