import { Link } from 'react-router-dom'

function OrderSuccess() {

  return (

    <section className="min-h-screen bg-[#F7F5EF] flex items-center justify-center px-6">

      <div className="bg-white p-14 rounded-[40px] text-center max-w-2xl shadow-sm">

        <div className="w-24 h-24 rounded-full bg-[#DFF1D8] flex items-center justify-center mx-auto text-5xl">
          ✅
        </div>

        <h1 className="mt-8 text-5xl font-bold text-[#1d2b1f]">
          Order Placed!
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Thank you for shopping with MATCHA.
          Your premium matcha order has been placed successfully.
        </p>

        <Link to="/shop">

          <button className="mt-10 bg-[#355E3B] hover:bg-[#27452c] transition text-white px-10 py-5 rounded-full text-lg">

            Continue Shopping

          </button>

        </Link>

      </div>

    </section>

  )
}

export default OrderSuccess