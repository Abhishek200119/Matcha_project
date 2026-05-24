function Benefits() {
  return (
    <section className="py-28 bg-white">

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

        {/* Benefits Grid */}
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
              Matcha delivers smooth and natural energy without sudden crashes,
              helping you stay active and balanced throughout the day.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
              ✨
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
              Rich Antioxidants
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Packed with antioxidants and catechins that help support wellness,
              skin health, and natural body defense.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
              🧠
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
              Better Focus
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              L-theanine in matcha promotes calm concentration,
              helping improve mental clarity and productivity.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px] hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-[#DFF1D8] flex items-center justify-center text-3xl">
              🌿
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1d2b1f]">
              Natural Detox
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Chlorophyll-rich matcha supports natural detoxification
              and promotes a clean, healthy lifestyle.
            </p>

          </div>

        </div>

        {/* Bottom Content */}
        <div className="mt-24 grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Wellness Ritual
            </p>

            <h2 className="mt-5 text-5xl font-bold text-[#1d2b1f] leading-tight">
              A Daily Cup
              <br />
              Of Balance
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              Matcha is more than just tea — it’s a mindful wellness ritual.
              Every sip helps create calm moments, steady focus,
              and natural energy for modern living.
            </p>

            <button className="mt-10 bg-[#355E3B] text-white px-8 py-4 rounded-full hover:bg-[#27452c] transition duration-300">
              Explore Matcha
            </button>

          </div>

          {/* Right */}
          <div className="bg-[#1D2B1F] rounded-[40px] p-14 text-white">

            <h3 className="text-4xl font-bold leading-tight">
              Premium Japanese Matcha Experience
            </h3>

            <p className="mt-8 text-gray-300 text-lg leading-9">
              Crafted from carefully selected Japanese tea leaves,
              our ceremonial-grade matcha delivers purity,
              wellness, and luxurious taste in every cup.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#A7C957]"></div>

                <p className="text-lg">
                  100% Ceremonial Grade Matcha
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#A7C957]"></div>

                <p className="text-lg">
                  Sustainably Sourced From Japan
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#A7C957]"></div>

                <p className="text-lg">
                  Wellness Focused Lifestyle
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Benefits