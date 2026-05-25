function Cart() {

  const cartItems = [

    {
      id: 1,
      name: 'Ceremonial Matcha',
      image: '/src/assets/2.png',
      price: 999,
      quantity: 1,
    },

    {
      id: 2,
      name: 'Matcha Latte Blend',
      image: '/src/assets/3.png',
      price: 799,
      quantity: 2,
    },

  ]

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (

    <section className="min-h-screen bg-[#F7F5EF] pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Your Cart
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#1d2b1f]">
            Shopping Cart
          </h1>

        </div>

        {/* Cart Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mt-20">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">

            {
              cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-[35px] p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center"
                >

                  {/* Product Image */}
                  <div className="w-full md:w-[220px] h-[220px] rounded-[30px] overflow-hidden bg-[#DFF1D8]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* Product Details */}
                  <div className="flex-1">

                    <h2 className="text-3xl font-bold text-[#1d2b1f]">
                      {item.name}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-7">
                      Premium ceremonial-grade Japanese matcha crafted
                      for wellness and mindful living.
                    </p>

                    {/* Quantity */}
                    <div className="mt-6 flex items-center gap-4">

                      <button className="w-10 h-10 rounded-full border border-[#355E3B] text-xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition">
                        -
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button className="w-10 h-10 rounded-full border border-[#355E3B] text-xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition">
                        +
                      </button>

                    </div>

                    {/* Price + Remove */}
                    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">

                      <h3 className="text-3xl font-bold text-[#355E3B]">
                        ₹{item.price * item.quantity}
                      </h3>

                      <button className="text-red-500 hover:text-red-700 transition font-semibold">
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

          {/* Right Side Summary */}
          <div>

            <div className="bg-white rounded-[35px] p-10 shadow-sm sticky top-32">

              <h2 className="text-3xl font-bold text-[#1d2b1f]">
                Order Summary
              </h2>

              {/* Summary */}
              <div className="mt-10 space-y-6">

                <div className="flex items-center justify-between">

                  <p className="text-gray-600 text-lg">
                    Subtotal
                  </p>

                  <p className="text-xl font-bold">
                    ₹{subtotal}
                  </p>

                </div>

                <div className="flex items-center justify-between">

                  <p className="text-gray-600 text-lg">
                    Shipping
                  </p>

                  <p className="text-xl font-bold text-[#355E3B]">
                    Free
                  </p>

                </div>

                <div className="border-t pt-6 flex items-center justify-between">

                  <p className="text-2xl font-bold text-[#1d2b1f]">
                    Total
                  </p>

                  <p className="text-3xl font-bold text-[#355E3B]">
                    ₹{subtotal}
                  </p>

                </div>

              </div>

              {/* Checkout Button */}
              <button className="w-full mt-10 bg-[#355E3B] hover:bg-[#27452c] hover:scale-[1.02] transition duration-300 text-white py-5 rounded-full text-lg font-semibold">

                Proceed To Checkout

              </button>

              {/* Continue Shopping */}
              <button className="w-full mt-5 border border-[#355E3B] text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition duration-300 py-5 rounded-full text-lg font-semibold">

                Continue Shopping

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Cart