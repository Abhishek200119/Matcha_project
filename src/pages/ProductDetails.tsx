import { useParams } from 'react-router-dom'
import { useState } from 'react'

import ceremonialImg from '../assets/2.png'
import latteImg from '../assets/3.png'
import giftImg from '../assets/4.png'
import strawberryImg from '../assets/8.png'
import vanillaImg from '../assets/9.png'
import lemonImg from '../assets/10.png'

function ProductDetails() {

  const { id } = useParams()

  const [quantity, setQuantity] = useState(1)

  const products = [

    {
      id: 'ceremonial-matcha',
      name: 'Ceremonial Matcha',
      image: ceremonialImg,
      price: '₹999',
      oldPrice: '₹1299',
      description:
        'Smooth ceremonial-grade Japanese matcha crafted for calm energy, focus, and mindful living.',
    },

    {
      id: 'matcha-latte',
      name: 'Matcha Latte Blend',
      image: latteImg,
      price: '₹799',
      oldPrice: '₹1099',
      description:
        'Creamy and rich latte blend designed for modern matcha lovers and wellness rituals.',
    },

    {
      id: 'matcha-gift-box',
      name: 'Matcha Gift Box',
      image: giftImg,
      price: '₹1499',
      oldPrice: '₹1899',
      description:
        'Luxury premium matcha gift set perfect for tea lovers and wellness gifting.',
    },

    {
      id: 'strawberry-matcha',
      name: 'Strawberry Matcha',
      image: strawberryImg,
      price: '₹899',
      oldPrice: '₹1199',
      description:
        'Sweet and refreshing strawberry matcha blend with smooth creamy flavor and vibrant taste.',
    },

    {
      id: 'vanilla-matcha',
      name: 'Vanilla Matcha',
      image: vanillaImg,
      price: '₹949',
      oldPrice: '₹1249',
      description:
        'Premium vanilla infused matcha crafted for smooth wellness and luxurious flavor.',
    },

    {
      id: 'lemon-matcha',
      name: 'Lemon Matcha',
      image: lemonImg,
      price: '₹849',
      oldPrice: '₹1099',
      description:
        'Refreshing citrus lemon matcha blend packed with antioxidants and natural energy.',
    },

  ]

  const product = products.find((item) => item.id === id)

  if (!product) {

    return (

      <section className="min-h-screen flex items-center justify-center bg-[#F7F5EF]">

        <h1 className="text-4xl font-bold text-[#1d2b1f]">
          Product Not Found
        </h1>

      </section>

    )

  }

  return (

    <section className="min-h-screen bg-[#F7F5EF] pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Product Image */}
        <div className="flex justify-center">

          <div className="w-full max-w-[550px] rounded-[40px] bg-white p-6 shadow-2xl">

            {/* Main Product Image */}
            <div className="h-[500px] rounded-[35px] bg-[#DFF1D8] overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Small Product Gallery */}
            <div className="grid grid-cols-3 gap-4 mt-6">

              <div className="h-[120px] rounded-[20px] overflow-hidden border-2 border-[#355E3B]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="h-[120px] rounded-[20px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="h-[120px] rounded-[20px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Right Content */}
        <div>

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Premium Matcha Collection
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#1d2b1f] leading-tight">
            {product.name}
          </h1>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-4xl font-bold text-[#355E3B]">
              {product.price}
            </span>

            <span className="text-lg text-gray-500 line-through">
              {product.oldPrice}
            </span>

          </div>

          <p className="mt-8 text-gray-600 text-lg leading-9">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="mt-10">

            <p className="font-semibold text-[#1d2b1f] mb-4">
              Quantity
            </p>

            <div className="flex items-center gap-4">

              {/* Minus */}
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
                className="w-12 h-12 rounded-full border border-[#355E3B] text-2xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition"
              >
                -
              </button>

              {/* Quantity */}
              <span className="text-2xl font-bold min-w-[40px] text-center">
                {quantity}
              </span>

              {/* Plus */}
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-12 h-12 rounded-full border border-[#355E3B] text-2xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition"
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <button
              onClick={() =>
                alert(`${quantity} ${product.name} added to cart`)
              }
              className="bg-[#355E3B] hover:bg-[#27452c] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                alert(`Proceeding to buy ${quantity} ${product.name}`)
              }
              className="border border-[#355E3B] text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition duration-300 px-10 py-5 rounded-full text-lg"
            >
              Buy Now
            </button>

          </div>

          {/* Features */}
          <div className="mt-14 space-y-5">

            <div className="flex items-center gap-4">

              <span className="text-[#355E3B] text-2xl">
                ✓
              </span>

              <p className="text-gray-700">
                100% Japanese Matcha
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span className="text-[#355E3B] text-2xl">
                ✓
              </span>

              <p className="text-gray-700">
                Rich In Antioxidants
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span className="text-[#355E3B] text-2xl">
                ✓
              </span>

              <p className="text-gray-700">
                Calm Natural Energy
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span className="text-[#355E3B] text-2xl">
                ✓
              </span>

              <p className="text-gray-700">
                Ceremonial Grade Quality
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default ProductDetails