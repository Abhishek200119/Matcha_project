function InstagramGrid() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Instagram
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1d2b1f]">
            Follow The Matcha Lifestyle
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
            Discover mindful rituals, wellness inspiration,
            and premium matcha moments from our community.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {/* Card 1 */}
          <div className="aspect-square rounded-[30px] bg-[#DFF1D8] flex items-center justify-center hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">

            <h3 className="text-3xl font-bold text-[#355E3B]">
              MATCHA
            </h3>

          </div>

          {/* Card 2 */}
          <div className="aspect-square rounded-[30px] bg-[#355E3B] flex items-center justify-center hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">

            <h3 className="text-3xl font-bold text-white">
              LATTE
            </h3>

          </div>

          {/* Card 3 */}
          <div className="aspect-square rounded-[30px] bg-[#A7C957] flex items-center justify-center hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">

            <h3 className="text-3xl font-bold text-[#1D2B1F]">
              WELLNESS
            </h3>

          </div>

          {/* Card 4 */}
          <div className="aspect-square rounded-[30px] bg-[#1D2B1F] flex items-center justify-center hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">

            <h3 className="text-3xl font-bold text-[#DFF1D8]">
              RITUAL
            </h3>

          </div>

        </div>

        {/* Instagram Button */}
        <div className="flex justify-center mt-14">

          <button className="bg-[#355E3B] hover:bg-[#27452c] hover:scale-105 transition duration-300 text-white px-10 py-4 rounded-full text-lg">
            Follow on Instagram
          </button>

        </div>

      </div>

    </section>
  )
}

export default InstagramGrid