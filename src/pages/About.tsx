import aboutImg from '../assets/5.png'

function About() {
  return (
    <>

      <div className="bg-[#F7F5EF] min-h-screen pt-[90px]">

        {/* Hero Section */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[6px] text-[#6b8f71] font-semibold text-sm">
                About Matcha
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold text-[#1d2b1f] leading-tight">
                Crafted For
                <br />
                Calm Energy
              </h1>

              <p className="mt-8 text-gray-600 text-lg leading-9">
                At MATCHA., we believe wellness begins with mindful rituals.
                Our ceremonial-grade Japanese matcha is sourced from
                premium tea farms to bring focus, balance, and natural energy
                into everyday life.
              </p>

              <p className="mt-6 text-gray-600 text-lg leading-9">
                Every sip reflects purity, craftsmanship, and a modern
                luxury tea experience designed for wellness lovers.
              </p>

              <button className="mt-10 bg-[#355E3B] text-white px-8 py-4 rounded-full hover:bg-[#27452c] transition duration-300">
                Explore Products
              </button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center">

              <img
                src={aboutImg}
                alt="About Matcha"
                className="w-full max-w-[600px] h-[700px] object-cover rounded-[35px]"
              />

            </div>

          </div>

        </section>

        {/* Mission Section */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
                Our Mission
              </p>

              <h2 className="mt-4 text-5xl font-bold text-[#1d2b1f]">
                Wellness Through Matcha
              </h2>

              <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg leading-9">
                We are dedicated to bringing authentic Japanese matcha
                culture into modern lifestyles through premium quality,
                mindful rituals, and luxury wellness experiences.
              </p>

            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10 mt-20">

              {/* Card 1 */}
              <div className="bg-[#F7F5EF] rounded-[30px] p-10 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-[#355E3B] flex items-center justify-center text-white text-3xl">
                  🍃
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1d2b1f]">
                  Premium Quality
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Carefully sourced ceremonial-grade Japanese matcha.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-[#F7F5EF] rounded-[30px] p-10 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-[#355E3B] flex items-center justify-center text-white text-3xl">
                  ☕
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1d2b1f]">
                  Mindful Ritual
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Transform everyday tea moments into mindful experiences.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-[#F7F5EF] rounded-[30px] p-10 text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-[#355E3B] flex items-center justify-center text-white text-3xl">
                  🌿
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1d2b1f]">
                  Natural Wellness
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Clean energy, antioxidants, focus, and balanced living.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </>
  )
}

export default About