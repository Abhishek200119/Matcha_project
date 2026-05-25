import { useEffect, useState } from 'react'

import banner1 from '../assets/11.png'
import banner2 from '../assets/12.png'

function Benefits() {

  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentBanner((prev) => (prev === 0 ? 1 : 0))

    }, 8000)

    return () => clearInterval(interval)

  }, [])

  return (
    <>

      {/* Hero Section */}
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

          {/* Benefit Cards */}
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
                Better Focus
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
                Natural Detox
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Helps support healthy detoxification naturally.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Our Matcha */}
      <section className="py-28 bg-[#F7F5EF]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b1f]">
              Why Choose Our Matcha
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <div className="bg-white rounded-[35px] p-12 shadow-sm">

              <h3 className="text-3xl font-bold text-[#355E3B]">
                Regular Tea
              </h3>

              <ul className="mt-8 space-y-5 text-gray-600 text-lg">

                <li>❌ Energy crashes</li>
                <li>❌ Artificial flavors</li>
                <li>❌ Low antioxidants</li>
                <li>❌ Short-lasting focus</li>

              </ul>

            </div>

            <div className="bg-[#1D2B1F] rounded-[35px] p-12 text-white shadow-xl">

              <h3 className="text-3xl font-bold">
                MATCHA.
              </h3>

              <ul className="mt-8 space-y-5 text-lg">

                <li>✅ Calm sustained energy</li>
                <li>✅ Premium ceremonial grade</li>
                <li>✅ Rich antioxidants</li>
                <li>✅ Better focus & clarity</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Daily Ritual Timeline */}
      <section className="py-28 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Daily Ritual
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b1f]">
              Matcha Throughout Your Day
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="text-center">

              <div className="w-24 h-24 mx-auto rounded-full bg-[#DFF1D8] flex items-center justify-center text-4xl">
                ☀️
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Morning
              </h3>

              <p className="mt-3 text-gray-600">
                Start your day with clean energy.
              </p>

            </div>

            <div className="text-center">

              <div className="w-24 h-24 mx-auto rounded-full bg-[#DFF1D8] flex items-center justify-center text-4xl">
                💻
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Work Focus
              </h3>

              <p className="mt-3 text-gray-600">
                Stay productive and mentally clear.
              </p>

            </div>

            <div className="text-center">

              <div className="w-24 h-24 mx-auto rounded-full bg-[#DFF1D8] flex items-center justify-center text-4xl">
                🧘
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Calm Mind
              </h3>

              <p className="mt-3 text-gray-600">
                Relax with mindful matcha moments.
              </p>

            </div>

            <div className="text-center">

              <div className="w-24 h-24 mx-auto rounded-full bg-[#DFF1D8] flex items-center justify-center text-4xl">
                🌙
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Wellness
              </h3>

              <p className="mt-3 text-gray-600">
                End your day feeling balanced.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Banner Slider Section */}
      <section className="w-full overflow-hidden bg-[#1D2B1F]">

        <div className="relative w-full h-[700px] md:h-[850px]">

          {/* Banner 1 */}
          <img
            src={banner1}
            alt="Matcha Banner"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${
              currentBanner === 0
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />

          {/* Banner 2 */}
          <img
            src={banner2}
            alt="Matcha Banner"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${
              currentBanner === 1
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

            <button
              onClick={() => setCurrentBanner(0)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentBanner === 0
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
            />

            <button
              onClick={() => setCurrentBanner(1)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentBanner === 1
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
            />

          </div>

        </div>

      </section>

      {/* Customer Results */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>

              <h2 className="text-6xl font-bold text-[#355E3B]">
                15K+
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Happy Customers
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-[#355E3B]">
                98%
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Feel Better Focus
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-[#355E3B]">
                4.9★
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Customer Rating
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-[#355E3B]">
                100%
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Ceremonial Grade
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Ingredients Section */}
      <section className="py-28 bg-[#F7F5EF]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Ingredients
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b1f]">
              Pure Ingredients
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="bg-white p-10 rounded-[30px] text-center">

              <div className="text-5xl">
                🍃
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Matcha Leaves
              </h3>

              <p className="mt-4 text-gray-600">
                Premium Japanese green tea leaves.
              </p>

            </div>

            <div className="bg-white p-10 rounded-[30px] text-center">

              <div className="text-5xl">
                💚
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Chlorophyll
              </h3>

              <p className="mt-4 text-gray-600">
                Natural detox support and wellness.
              </p>

            </div>

            <div className="bg-white p-10 rounded-[30px] text-center">

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                L-Theanine
              </h3>

              <p className="mt-4 text-gray-600">
                Calm energy and mental clarity.
              </p>

            </div>

            <div className="bg-white p-10 rounded-[30px] text-center">

              <div className="text-5xl">
                ✨
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Catechins
              </h3>

              <p className="mt-4 text-gray-600">
                Powerful antioxidants for wellness.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Benefits