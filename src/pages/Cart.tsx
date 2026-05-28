import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  // SUBTOTAL
  const subtotal = cartItems.reduce(

    (total, item) =>

      total +
      Number(item.price.replace('₹', '')) * item.quantity,

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

        {/* EMPTY CART */}
        {
          cartItems.length === 0 && (

            <div className="mt-24 text-center">

              <h2 className="text-4xl font-bold text-[#1d2b1f]">
                Your Cart Is Empty
              </h2>

              <p className="mt-6 text-gray-600 text-lg">
                Add premium matcha products to continue shopping.
              </p>

              <Link to="/shop">

                <button className="mt-10 bg-[#355E3B] hover:bg-[#27452c] transition text-white px-10 py-5 rounded-full text-lg">

                  Explore Matcha

                </button>

              </Link>

            </div>

          )
        }

        {/* CART ITEMS */}
        {
          cartItems.length > 0 && (

            <div className="grid lg:grid-cols-3 gap-12 mt-20">

              {/* LEFT SIDE */}
              <div className="lg:col-span-2 space-y-8">

                {
                  cartItems.map((item) => (

                    <div
                      key={item.id}
                      className="bg-white rounded-[35px] p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center"
                    >

                      {/* PRODUCT IMAGE */}
                      <div className="w-full md:w-[220px] h-[220px] rounded-[30px] overflow-hidden bg-[#DFF1D8]">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />

                      </div>

                      {/* PRODUCT DETAILS */}
                      <div className="flex-1">

                        <h2 className="text-3xl font-bold text-[#1d2b1f]">
                          {item.name}
                        </h2>

                        <p className="mt-4 text-gray-600 leading-7">
                          Premium ceremonial-grade Japanese matcha crafted
                          for calm energy and mindful wellness.
                        </p>

                        {/* QUANTITY */}
                        <div className="mt-6 flex items-center gap-4">

                          {/* MINUS */}
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="w-10 h-10 rounded-full border border-[#355E3B] text-xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition"
                          >
                            -
                          </button>

                          {/* QUANTITY NUMBER */}
                          <span className="text-xl font-bold min-w-[30px] text-center">
                            {item.quantity}
                          </span>

                          {/* PLUS */}
                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="w-10 h-10 rounded-full border border-[#355E3B] text-xl text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition"
                          >
                            +
                          </button>

                        </div>

                        {/* PRICE + REMOVE */}
                        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">

                          <h3 className="text-3xl font-bold text-[#355E3B]">

                            ₹
                            {
                              Number(
                                item.price.replace('₹', '')
                              ) * item.quantity
                            }

                          </h3>

                          {/* REMOVE BUTTON */}
                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="text-red-500 hover:text-red-700 transition font-semibold"
                          >
                            Remove
                          </button>

                        </div>

                      </div>

                    </div>

                  ))
                }

              </div>

              {/* RIGHT SIDE SUMMARY */}
              <div>

                <div className="bg-white rounded-[35px] p-10 shadow-sm sticky top-32">

                  <h2 className="text-3xl font-bold text-[#1d2b1f]">
                    Order Summary
                  </h2>

                  {/* SUMMARY */}
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

                  {/* CHECKOUT */}
                  <Link to="/checkout">

                    <button className="w-full mt-10 bg-[#355E3B] hover:bg-[#27452c] hover:scale-[1.02] transition duration-300 text-white py-5 rounded-full text-lg font-semibold">

                      Proceed To Checkout

                    </button>

                  </Link>
                  {/* CONTINUE SHOPPING */}
                  <Link to="/shop">

                    <button className="w-full mt-5 border border-[#355E3B] text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition duration-300 py-5 rounded-full text-lg font-semibold">

                      Continue Shopping

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          )
        }

      </div>

    </section>

  )
}

export default Cart