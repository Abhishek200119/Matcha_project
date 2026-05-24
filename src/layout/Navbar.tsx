import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setIsOpen(false)
  }

  return (
    <>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e8e5dc]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleScrollTop}
            className="text-3xl font-bold text-[#355E3B]"
          >
            MATCHA.
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-gray-700 font-medium">

            <Link
              to="/"
              onClick={handleScrollTop}
              className="hover:text-[#355E3B] cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={handleScrollTop}
              className="hover:text-[#355E3B] cursor-pointer"
            >
              Shop
            </Link>

            <Link
              to="/benefits"
              onClick={handleScrollTop}
              className="hover:text-[#355E3B] cursor-pointer"
            >
              Benefits
            </Link>

            <Link
              to="/about"
              onClick={handleScrollTop}
              className="hover:text-[#355E3B] cursor-pointer"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={handleScrollTop}
              className="hover:text-[#355E3B] cursor-pointer"
            >
              Contact
            </Link>

          </ul>

          {/* Desktop Button */}
          <Link to="/shop">
            <button className="hidden md:block bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] transition">
              Shop Now
            </button>
          </Link>

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

            <Link to="/" onClick={handleScrollTop}>
              Home
            </Link>

            <Link to="/shop" onClick={handleScrollTop}>
              Shop
            </Link>

            <Link to="/benefits" onClick={handleScrollTop}>
              Benefits
            </Link>

            <Link to="/about" onClick={handleScrollTop}>
              About
            </Link>

            <Link to="/contact" onClick={handleScrollTop}>
              Contact
            </Link>

            <Link to="/shop" onClick={handleScrollTop}>
              <button className="bg-[#355E3B] text-white px-8 py-4 rounded-full text-lg">
                Shop Now
              </button>
            </Link>

          </div>
        )
      }

    </>
  )
}

export default Navbar