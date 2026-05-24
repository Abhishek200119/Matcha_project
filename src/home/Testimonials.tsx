function Testimonials() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1d2b1f]">
            Loved By Matcha Drinkers
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* Card 1 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px]">

            <div className="text-3xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              “The smoothest matcha I’ve ever tasted.
              Calm energy without coffee crashes.”
            </p>

            <div className="mt-8">

              <h4 className="text-xl font-bold text-[#1d2b1f]">
                Priya Sharma
              </h4>

              <p className="text-gray-500 mt-1">
                Wellness Creator
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px]">

            <div className="text-3xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              “Beautiful flavor and premium quality.
              It has become part of my morning ritual.”
            </p>

            <div className="mt-8">

              <h4 className="text-xl font-bold text-[#1d2b1f]">
                Rahul Mehta
              </h4>

              <p className="text-gray-500 mt-1">
                Entrepreneur
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F5EF] p-10 rounded-[30px]">

            <div className="text-3xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              “Packaging, taste, and quality feel extremely luxurious.
              Highly recommended.”
            </p>

            <div className="mt-8">

              <h4 className="text-xl font-bold text-[#1d2b1f]">
                Ananya Kapoor
              </h4>

              <p className="text-gray-500 mt-1">
                Yoga Instructor
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials