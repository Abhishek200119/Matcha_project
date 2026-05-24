import { Link } from 'react-router-dom'

import heroBg from "../assets/1.png"

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <p className="uppercase tracking-[5px] text-[#d7f5d1] font-semibold text-sm mb-6">
          Ceremonial Grade Matcha
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Calm Energy
          <br />
          For Modern
          <br />
          Living
        </h1>

        <p className="mt-8 text-gray-200 text-lg leading-9 max-w-2xl mx-auto">
          Discover authentic Japanese matcha crafted to bring
          focus, clarity, and wellness into your everyday ritual.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5 flex-wrap justify-center">

          {/* Shop Link */}
          <Link to="/shop">

            <button className="bg-[#355E3B] text-white px-8 py-4 rounded-full hover:bg-[#27452c] transition duration-300">
              Explore Matcha
            </button>

          </Link>

          {/* Benefits Link */}
          <Link to="/benefits">

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#355E3B] transition duration-300">
              Learn More
            </button>

          </Link>

        </div>

      </div>

    </section>
  )
}

export default Hero