import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8000/api/v1';

const initialValues = {
    images: [],
    categories: [],
    category: [],
    sub_categories:[],
    users:[],
    products: [],
    products_byid: [],
    related_product: [],
    order_list:[],
   
};

export const getAllImages = createAsyncThunk(
    'images/fetchAllImages',
    async () => {
        const res = await axios.get(`${URL}/get/images`);
        return res.data;
    }
);

export const getAllCategories = createAsyncThunk(
    'images/fetchAllcategories',
    async () => {
        const res = await axios.get(`${URL}/get/categories`);
        return res.data;
    }
);

export const DeleteCategories = createAsyncThunk(
    'images/deleteCategories',
    async (_id) => {
        const res = await axios.delete(`${URL}/delete/category/${_id}`);
        return res.data;
    }
);

export const postNewCategory = createAsyncThunk(
    'images/postnewcategory',
    async (payload) => {
        const res = await axios.post(`${URL}/add/category`, payload);
        return res.data;
    }
);

export const getCategoryByID = createAsyncThunk(
    'images/getcategorybyid',
    async (payload) => {
        const res = await axios.get(`${URL}/get/categoryby_id?_id=${payload}`);
        return res.data;
    }
);

export const postNew_SubCategory = createAsyncThunk(
    'images/postnew_subcategory',
    async (payload) => {
        console.log(payload);
        const res = await axios.post(`${URL}/add/sub_category`, payload);
        return res.data;
    }
);

export const getAll_subCategories = createAsyncThunk(
    'images/fetchAll_subcategories',
    async () => {
        const res = await axios.get(`${URL}/get/sub_categories`);
        return res.data;
    }
);

export const getSubCategory_ById = createAsyncThunk(
    'images/fetch_subcategory_ById',
    async (id) => {
        const res = await axios.get(`${URL}/get/sub_categoryById/${id}`);
        return res.data;
    }
);

export const getSubCatList = createAsyncThunk(
    'images/fetch_subcatlist',
    async (id) => {
        const res = await axios.get(`${URL}/get/sub_catList/${id}`);
        return res.data;
    }
);

export const Delete_subCategories = createAsyncThunk(
    'images/deletesubCategories',
    async (_id) => {
        const res = await axios.delete(`${URL}/delete/sub_category/${_id}`);
        return res.data;
    }
);

export const postNewImage = createAsyncThunk( 
    'images/postnewimage',
    async (payload) => {
        console.log(payload);
        const res = await axios.post(`${URL}/upload/image`, payload);
        return res.data;
    }
);

export const getSingleImage = createAsyncThunk(
    'images/getsingleImage',
    async (id) => {
        const res = await axios.get(`${URL}/get/singleimage?category=${id}`);
        return res.data;
    }
);

export const Show_users = createAsyncThunk(
    'images/show_users',
    async () => {
        const res = await axios.get(`${URL}/get/show_users`);
        return res.data;
    }
);

export const viewImageById = createAsyncThunk(
    'images/view_images_byId',
    async (payload) => {
        const res = await axios.get(`${URL}/view_image?_id=${payload}`);
        return res.data;
    }
);

export const getAll_Product_List = createAsyncThunk(
    'images/fetchAll_products',
    async () => {
        const res = await axios.get(`${URL}/get/product`);
        return res.data;
    }
);

export const get_Product_List_ById = createAsyncThunk(
    'images/fetch_productlist_ById',
    async (payload) => {
        const res = await axios.get(`${URL}/get/product_list_ById?_id=${payload}`);
        return res.data;
    }
);

export const view_Related_product = createAsyncThunk(
    'images/fetch_productlist_ById',
    async (payload) => {
        const res = await axios.get(`${URL}/get/product_list_By_Category?category=${payload}`);
        return res.data;
    }
);

export const Delete_ProductById = createAsyncThunk(
    'images/deleteproductbyid',
    async (_id) => {
        console.log(_id);
        const res = await axios.delete(`${URL}/delete/product_byid/${_id}`);
        return res.data;
    }
);

export const postNewOrder = createAsyncThunk(
    'images/postneworder',
    async (payload) => {
        console.log(payload);
        const res = await axios.post(`${URL}/add/order`, payload);
        return res.data;
    }
);


export const get_Order_List = createAsyncThunk(
    'images/getOrderList',
    async () => {
        const res = await axios.get(`${URL}/get/order_list`);
        return res.data;
    }
);



const gallerySlice = createSlice({
    name:'gallerySlice',
    initialState: initialValues,
    reducers: {},
    extraReducers: {
        [getAllImages.fulfilled]: (state, action) => {
            state.images = action.payload;
        },
        [getAllCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
        },
        [getSingleImage.fulfilled]: (state, action) => {
            state.images = action.payload;
        },
        [Show_users.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [viewImageById.fulfilled]: (state, action) => {
            state.images = action.payload;
        },
        [getCategoryByID.fulfilled]: (state, action) => {
            state.category = action.payload;
        },
        [getAll_subCategories.fulfilled]: (state, action) => {
            state.sub_categories = action.payload;
        },
        [getSubCatList.fulfilled]: (state, action) => {
            state.sub_categories = action.payload;
        },
        [getSubCategory_ById.fulfilled]: (state, action) => {
            state.sub_categories = action.payload;
        },
        [getAll_Product_List.fulfilled]: (state, action) => {
            state.products = action.payload;
        },
        [get_Product_List_ById.fulfilled]: (state, action) => {
            state.products_byid = action.payload;
        },
        [view_Related_product.fulfilled]: (state, action) => {
            state.related_product = action.payload; 
        },
        [get_Order_List.fulfilled]: (state, action) => {
            state.order_list = action.payload; 
        },
    },
});

export default gallerySlice.reducer;

