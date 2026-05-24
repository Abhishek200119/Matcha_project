function Benefits() {
  return (
    <>

      <section className="py-28 bg-white pt-40 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Matcha Benefits
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1d2b1f]">
              Why People Love Matcha
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-8">
              Experience calm focus, natural energy, and wellness
              benefits from authentic Japanese matcha.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {/* Card 1 */}
            <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
                🍃
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
                Calm Energy
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Natural long-lasting energy without crashes.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
                ✨
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
                Antioxidants
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Packed with wellness-supporting antioxidants.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
                🧠
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
                Focus
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Supports concentration and mental clarity.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
                🌿
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
                Detox
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Helps support healthy detoxification naturally.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Benefits