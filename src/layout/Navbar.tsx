import { useState } from 'react'

import { Menu, X, ShoppingBag } from 'lucide-react'

import { Link } from 'react-router-dom'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#e8e5dc]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">

            <h1 className="text-3xl font-bold text-[#355E3B]">
              MATCHA.
            </h1>

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-gray-700 font-medium">

            <li>
              <Link
                to="/"
                className="hover:text-[#355E3B] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-[#355E3B] transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/benefits"
                className="hover:text-[#355E3B] transition"
              >
                Benefits
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-[#355E3B] transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#355E3B] transition"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">

            {/* Shop Button */}
            <Link to="/shop">

              <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] transition">
                Shop Now
              </button>

            </Link>

            {/* Cart Icon */}
            <Link to="/cart">

              <div className="relative cursor-pointer">

                <div className="w-12 h-12 rounded-full border border-[#355E3B] flex items-center justify-center hover:bg-[#355E3B] hover:text-white transition">

                  <ShoppingBag size={24} />

                </div>

                {/* Cart Count */}
                <span className="absolute -top-2 -right-2 bg-[#355E3B] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  0
                </span>

              </div>

            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >

            {
              isOpen
                ? <X size={30} color="#355E3B" />
                : <Menu size={30} color="#355E3B" />
            }

          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {
        isOpen && (

          <div className="fixed top-0 left-0 w-full h-screen bg-[#F7F5EF] z-40 flex flex-col items-center justify-center gap-10 text-3xl font-semibold text-[#355E3B]">

            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>

            <Link to="/benefits" onClick={() => setIsOpen(false)}>
              Benefits
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link to="/cart" onClick={() => setIsOpen(false)}>

              <div className="flex items-center gap-3">

                <ShoppingBag size={28} />

                <span>
                  Cart
                </span>

              </div>

            </Link>

          </div>

        )
      }

    </>
  )
}

export default Navbar