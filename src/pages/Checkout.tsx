import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

function Checkout() {

  const { cartItems } = useCart()

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
            Checkout
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#1d2b1f]">
            Complete Your Order
          </h1>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mt-20">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-[35px] p-10 shadow-sm">

              <h2 className="text-3xl font-bold text-[#1d2b1f]">
                Shipping Information
              </h2>

              {/* FORM */}
              <form className="mt-10 space-y-6">

                {/* Name */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Phone */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Address */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Address
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Enter your full address"
                    className="w-full border border-gray-300 rounded-[25px] px-6 py-4 outline-none focus:border-[#355E3B] resize-none"
                  ></textarea>

                </div>

                {/* City + State */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-[#1d2b1f] font-semibold mb-3">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="City"
                      className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                    />

                  </div>

                  <div>

                    <label className="block text-[#1d2b1f] font-semibold mb-3">
                      State
                    </label>

                    <input
                      type="text"
                      placeholder="State"
                      className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                    />

                  </div>

                </div>

                {/* Pincode */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Pincode
                  </label>

                  <input
                    type="text"
                    placeholder="Enter pincode"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Payment */}
                <div className="pt-6">

                  <h3 className="text-2xl font-bold text-[#1d2b1f]">
                    Payment Method
                  </h3>

                  <div className="mt-6 space-y-4">

                    <label className="flex items-center gap-4 bg-[#F7F5EF] p-5 rounded-[20px] cursor-pointer">

                      <input type="radio" name="payment" defaultChecked />

                      <span className="text-lg font-medium">
                        Cash On Delivery
                      </span>

                    </label>

                    <label className="flex items-center gap-4 bg-[#F7F5EF] p-5 rounded-[20px] cursor-pointer">

                      <input type="radio" name="payment" />

                      <span className="text-lg font-medium">
                        UPI / Card Payment
                      </span>

                    </label>

                  </div>

                </div>

              </form>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white rounded-[35px] p-10 shadow-sm sticky top-32">

              <h2 className="text-3xl font-bold text-[#1d2b1f]">
                Order Summary
              </h2>

              {/* PRODUCTS */}
              <div className="mt-10 space-y-6">

                {
                  cartItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >

                      {/* IMAGE */}
                      <div className="w-20 h-20 rounded-[20px] overflow-hidden bg-[#DFF1D8]">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />

                      </div>

                      {/* DETAILS */}
                      <div className="flex-1">

                        <h4 className="font-bold text-[#1d2b1f]">
                          {item.name}
                        </h4>

                        <p className="text-gray-600">
                          Qty: {item.quantity}
                        </p>

                      </div>

                      {/* PRICE */}
                      <p className="font-bold text-[#355E3B]">

                        ₹
                        {
                          Number(
                            item.price.replace('₹', '')
                          ) * item.quantity
                        }

                      </p>

                    </div>

                  ))
                }

              </div>

              {/* TOTAL */}
              <div className="mt-10 space-y-5 border-t pt-8">

                <div className="flex items-center justify-between">

                  <p className="text-lg text-gray-600">
                    Subtotal
                  </p>

                  <p className="font-bold">
                    ₹{subtotal}
                  </p>

                </div>

                <div className="flex items-center justify-between">

                  <p className="text-lg text-gray-600">
                    Shipping
                  </p>

                  <p className="font-bold text-[#355E3B]">
                    Free
                  </p>

                </div>

                <div className="flex items-center justify-between border-t pt-5">

                  <p className="text-2xl font-bold text-[#1d2b1f]">
                    Total
                  </p>

                  <p className="text-3xl font-bold text-[#355E3B]">
                    ₹{subtotal}
                  </p>

                </div>

              </div>

              {/* PLACE ORDER */}
              <Link to="/order-success">

                <button className="w-full mt-10 bg-[#355E3B] hover:bg-[#27452c] hover:scale-[1.02] transition duration-300 text-white py-5 rounded-full text-lg font-semibold">

                  Place Order

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Checkout