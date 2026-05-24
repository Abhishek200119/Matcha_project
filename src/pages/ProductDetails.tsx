function ProductDetails() {
  return (
    <section className="min-h-screen bg-[#F7F5EF] pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Product Image */}
        <div className="flex justify-center">

          <div className="w-full max-w-[500px] h-[500px] rounded-[40px] bg-[#DFF1D8] flex items-center justify-center shadow-2xl">

            <h2 className="text-6xl font-bold text-[#355E3B]">
              MATCHA
            </h2>

          </div>

        </div>

        {/* Right Content */}
        <div>

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Ceremonial Grade
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#1d2b1f] leading-tight">
            Premium Matcha Tea
          </h1>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-4xl font-bold text-[#355E3B]">
              ₹999
            </span>

            <span className="text-lg text-gray-500 line-through">
              ₹1299
            </span>

          </div>

          <p className="mt-8 text-gray-600 text-lg leading-9">
            Smooth ceremonial-grade Japanese matcha crafted
            for calm energy, focus, and mindful living.
            Rich in antioxidants with vibrant flavor.
          </p>

          {/* Quantity */}
          <div className="mt-10">

            <p className="font-semibold text-[#1d2b1f] mb-4">
              Quantity
            </p>

            <div className="flex items-center gap-4">

              <button className="w-12 h-12 rounded-full border border-[#355E3B] text-2xl text-[#355E3B]">
                -
              </button>

              <span className="text-2xl font-bold">
                1
              </span>

              <button className="w-12 h-12 rounded-full border border-[#355E3B] text-2xl text-[#355E3B]">
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <button className="bg-[#355E3B] hover:bg-[#27452c] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-lg">
              Add to Cart
            </button>

            <button className="border border-[#355E3B] text-[#355E3B] hover:bg-[#355E3B] hover:text-white transition duration-300 px-10 py-5 rounded-full text-lg">
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

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails