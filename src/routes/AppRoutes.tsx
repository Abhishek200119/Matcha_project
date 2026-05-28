import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import ScrollToTop from '../components/ScrollToTop'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Benefits from '../pages/Benefits'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import OrderSuccess from '../pages/OrderSuccess'

function AppRoutes() {

  return (

    <BrowserRouter>

      {/* SCROLL TO TOP */}
      <ScrollToTop />

      <Routes>

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={<Shop />}
          />

          {/* BENEFITS */}
          <Route
            path="/benefits"
            element={<Benefits />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* CHECKOUT */}
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          {/* ORDER SUCCESS */}
          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes