import React from 'react';
import { Link } from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import { useSelector } from "react-redux";

 
const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
            <Link class='navbar-brand' to='/'>
                My Gallery
            </Link>
            <button
                class="navbar-toggler"
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span class='navbar-toggler-icon'></span>
            </button>

            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav mx-auto'>  </ul>
                    <Link to='/get/show_users'>
                        <button className='btn btn-info my-3 mx-4'>Show Users Data</button>
                    </Link>
                    
                    <Link to='/cart'>
                        <button className='btn btn-info mx-4 my-3'>
                            <FiShoppingBag />
                            <p>{cartItems.length}</p>
                        </button>
                    </Link>
            </div>
        </nav>    
    </>
  )
}

export default Header;