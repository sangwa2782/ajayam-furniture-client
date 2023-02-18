import React from 'react';
import Button from '@mui/material/Button';
import {Link,Outlet } from 'react-router-dom';

const Handler_index = () => {
  return (
    <div>
        <div class="mui-container"  style={{marginTop:'75px',}}>
            <Link to='add-category'><Button variant="contained">Add Category</Button></Link>   
            <Link to='add-subcategory'><Button variant="contained">Add Sub-Category</Button></Link>   
            <Link to='add-image'><Button variant="contained">Add Products</Button></Link>  
            <Link to='show_product_list'><Button variant="contained">Show Product List</Button></Link> 
            <Link to='new_order_list'><Button variant="contained">New Order List</Button></Link>

            
            <Outlet />
        </div>
        
    </div>
  )
}

export default Handler_index;