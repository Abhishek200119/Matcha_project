import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Benefits from '../pages/Benefits'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Shop */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          {/* Benefits */}
          <Route
            path="/benefits"
            element={<Benefits />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Product Details */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes