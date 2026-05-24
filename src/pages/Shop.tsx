import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import product1 from '../assets/2.png'
import product2 from '../assets/3.png'
import product3 from '../assets/4.png'

import product4 from '../assets/8.png'
import product5 from '../assets/9.png'
import product6 from '../assets/10.png'

import banner1 from '../assets/6.png'
import banner2 from '../assets/7.png'

function Shop() {

  const banners = [banner1, banner2]

  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentBanner((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      )

    }, 7000)

    return () => clearInterval(interval)

  }, [])

  return (


      <div className="bg-[#F7F5EF] min-h-screen pt-[90px]">

        {/* Banner Slider */}
        <section className="w-full overflow-hidden">

          <div className="relative w-full h-[700px] md:h-[850px]">

            {
              banners.map((banner, index) => (

                <img
                  key={index}
                  src={banner}
                  alt="Matcha Banner"
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
                    currentBanner === index
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />

              ))
            }

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

              {
                banners.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentBanner === index
                        ? 'bg-white scale-125'
                        : 'bg-white/50'
                    }`}
                  />

                ))
              }

            </div>

          </div>

        </section>

        {/* Products Section */}
        <section className="py-28">

          <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center">

              <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
                Our Collection
              </p>

              <h2 className="mt-4 text-5xl font-bold text-[#1d2b1f]">
                Matcha Products
              </h2>

              <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-8">
                Explore our premium ceremonial-grade matcha collection crafted
                for wellness, focus, and mindful living.
              </p>

            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-10 mt-20">

              {/* Product 1 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#DFF1D8] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product1}
                    alt="Ceremonial Matcha"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Ceremonial Matcha
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Smooth, vibrant ceremonial-grade Japanese matcha.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹999
                    </span>

                    <Link to="/product">

                      <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                        View Product
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#FFF0D9] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product4}
                    alt="Vanilla Matcha"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Vanilla Matcha
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Creamy vanilla infused premium ceremonial matcha blend.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹899
                    </span>

                    <Link to="/product">

                      <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                        View Product
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#FFE2E2] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product5}
                    alt="Strawberry Matcha"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Strawberry Matcha
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Fruity strawberry flavor blended with rich matcha taste.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹949
                    </span>

                    <Link to="/product">

                      <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                        View Product
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#F3E2C7] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product2}
                    alt="Matcha Latte Blend"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Matcha Latte Blend
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Creamy and rich blend crafted for modern matcha lovers.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹799
                    </span>

                    <Link to="/product">

                      <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                        View Product
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#FFF7C7] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product6}
                    alt="Lemon Matcha"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Lemon Matcha
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Refreshing lemon infused matcha for a vibrant experience.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹899
                    </span>

                    <Link to="/product">

                      <button className="bg-[#355E3B] text-white px-6 py-3 rounded-full hover:bg-[#27452c] hover:scale-105 transition duration-300">
                        View Product
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

              {/* Product 6 */}
              <div className="bg-white rounded-[35px] p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl transition duration-500 overflow-hidden">

                <div className="bg-[#DFF1D8] rounded-[28px] h-[360px] overflow-hidden">

                  <img
                    src={product3}
                    alt="Matcha Gift Box"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="mt-8">

                  <h3 className="text-3xl font-bold text-[#1d2b1f]">
                    Matcha Gift Box
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    Elegant premium gift set for tea and wellness lovers.
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl font-bold text-[#355E3B]">
                      ₹1499
                    </span>

                    <Link to="/product">

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

      </div>

  
  )
}

export default Shop