import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Benefits from '../pages/Benefits'

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Layout Wrapper */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/benefits" element={<Benefits />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes