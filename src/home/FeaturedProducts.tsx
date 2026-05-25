import product1 from '../assets/2.png'
import product2 from '../assets/3.png'
import product3 from '../assets/4.png'

import { Link } from 'react-router-dom'

function FeaturedProducts() {
  return (
    <section className="py-28 bg-[#F7F5EF]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Featured Products
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1d2b1f]">
            Premium Matcha Collection
          </h2>

        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* Product 1 */}
          <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 transition duration-500 overflow-hidden">

            {/* Image Box */}
            <div className="bg-[#DFF1D8] rounded-[28px] h-[360px] flex items-center justify-center overflow-hidden">

              <img
                src={product1}
                alt="Ceremonial Matcha"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Content */}
            <div className="mt-8">

              <h4 className="text-3xl font-bold text-[#1d2b1f]">
                Ceremonial Matcha
              </h4>

              <p className="mt-4 text-gray-600 leading-8 text-lg">
                Smooth, vibrant ceremonial-grade Japanese matcha.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-bold text-[#355E3B]">
                  ₹999
                </span>

                <Link to="/product/ceremonial-matcha">

                  <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                    View Product
                  </button>

                </Link>

              </div>

            </div>

          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 transition duration-500 overflow-hidden">

            {/* Image Box */}
            <div className="bg-[#DFF1D8] rounded-[28px] h-[360px] flex items-center justify-center overflow-hidden">

              <img
                src={product2}
                alt="Matcha Latte Blend"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Content */}
            <div className="mt-8">

              <h4 className="text-3xl font-bold text-[#1d2b1f]">
                Matcha Latte Blend
              </h4>

              <p className="mt-4 text-gray-600 leading-8 text-lg">
                Creamy and rich blend crafted for modern matcha lovers.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-bold text-[#355E3B]">
                  ₹799
                </span>

                <Link to="/product/matcha-latte">

                  <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                    View Product
                  </button>

                </Link>

              </div>

            </div>

          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 transition duration-500 overflow-hidden">

            {/* Image Box */}
            <div className="bg-[#DFF1D8] rounded-[28px] h-[360px] flex items-center justify-center overflow-hidden">

              <img
                src={product3}
                alt="Matcha Gift Box"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Content */}
            <div className="mt-8">

              <h4 className="text-3xl font-bold text-[#1d2b1f]">
                Matcha Gift Box
              </h4>

              <p className="mt-4 text-gray-600 leading-8 text-lg">
                Elegant premium gift set for tea and wellness lovers.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-bold text-[#355E3B]">
                  ₹1499
                </span>

                <Link to="/product/matcha-gift-box">

                  <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                    View Product
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FeaturedProducts