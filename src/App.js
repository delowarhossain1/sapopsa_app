import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop';
import Home from './components/pages/Home/Home';

const App = () => {
  const [refetchAddToCardProducts, setRefetchAddToCardProducts] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({});


  return (
    <div className=''>
      <div className=' w-[98%] mx-auto px-5'>

        {/* Navbar added */}
        <Navbar refetch={refetchAddToCardProducts} />

        {/* Page scroll from the begging when route will be change */}
        <ScrollToTop />

        {/* App routes */}
        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/product-for/:id' element={<ProductFor />} />
          <Route path='/category/:cty' element={<CategoriesProducts />} />
          <Route path='/search/:text' element={<Search />} />

          <Route path='/checkout' element={
            <RequiredAuth>
              <Checkout setCheckoutInfo={setCheckoutInfo} />
            </RequiredAuth>
          } />

          <Route path='/payment' element={
            <RequiredAuth>
              <Payment checkoutInfo={checkoutInfo} />
            </RequiredAuth>
          } />

          <Route path='/add-to-card' element={
            <AddToCard
              refetch={setRefetchAddToCardProducts}
              reFetchValue={refetchAddToCardProducts}
            />} />

          <Route path='/product-details/:id' element={
            <SingleProductDetails
              refetch={setRefetchAddToCardProducts}
              reFetchValue={refetchAddToCardProducts}
            />} /> */}


          {/*********** Login required (required auth) ****************/}
          {/* <Route path='/place-order' element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          } /> */}

          {/*********** User dashboard ****************/}

          {/* <Route path='/my-dashboard' element={
            <RequiredAuth>
              <MyDashboard />
            </RequiredAuth>
          }>
            <Route index element={<MyOrders />} />
            <Route path='order-details/:id' element={<MyOrderDetails />} />
          </Route> */}


          {/********* Admin dashboard route ************/}

          {/* <Route path='/dashboard' element={
            <RequiredAuth>
              <RequireAdmin>
                < Dashboard />
              </RequireAdmin>
            </RequiredAuth>
          }> */}
            {/* Index route*/}

            {/* <Route index element={<Report />} />
            <Route path='manage-orders' element={<ManageOrders />} />
            <Route path='manage-orders/order-details/:id' element={<OrderDetails />} />
            <Route path='manage-products' element={<ManageProducts />} />
            <Route path='manage-products/details/:id' element={<ProductsDetails />} />
            <Route path='manage-products/add-new-product' element={<AddNewProduct />} />
            <Route path='manage-categories' element={<ManageCategories />} />
            <Route path='manage-slider' element={<ManageSlider />} />
            <Route path='manage-heading' element={<ManageHeading />} />
            <Route path='customers' element={<Customers />} />
            <Route path='admins' element={<Admins />} />
            <Route path='admins/add-new-admin' element={<AddNewAdmin />} />
            <Route path='manage-categories/add-new-category' element={<AddNewCategori />} />
            <Route path='manage-slider/add-new-slider' element={<AddNewSlider />} />
            <Route path='settings' element={<Settings />} />

          </Route> */}

          {/* <Route path='*' element={<NotFound />} /> */}

        </Routes>
      </div>
    </div>
  );
};

export default App;