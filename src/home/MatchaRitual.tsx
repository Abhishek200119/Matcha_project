import ritualImg from '../assets/5.png'

function MatchaRitual() {
  return (
    <section className="py-32 bg-[#1D2B1F] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <div className="flex justify-center">

          <img
            src={ritualImg}
            alt="Matcha Ritual"
            className="
      w-full
      max-w-[620px]
      h-[700px]
      object-cover
      rounded-[30px]
    "
          />

        </div>

        {/* Right Content */}
        <div>

          <p className="uppercase tracking-[5px] text-[#A7C957] font-semibold text-sm">
            The Matcha Ritual
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-white">
            Slow Down
            <br />
            Sip Mindfully
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-xl">
            Every cup of matcha is a moment of calm.
            Crafted from premium Japanese tea leaves,
            our matcha ritual helps you reconnect with focus,
            balance, and mindful living.
          </p>

          {/* Features */}
          <div className="mt-12 space-y-6">

            {/* Feature 1 */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[#355E3B] flex items-center justify-center text-white text-xl">
                ✓
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Ceremonial Grade Quality
                </h4>

                <p className="mt-2 text-gray-400 leading-7">
                  Sourced from premium Japanese tea farms.
                </p>
              </div>

            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[#355E3B] flex items-center justify-center text-white text-xl">
                ✓
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Calm Energy & Focus
                </h4>

                <p className="mt-2 text-gray-400 leading-7">
                  Natural sustained energy without crashes.
                </p>
              </div>

            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[#355E3B] flex items-center justify-center text-white text-xl">
                ✓
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Mindful Daily Ritual
                </h4>

                <p className="mt-2 text-gray-400 leading-7">
                  Turn everyday tea into a luxury wellness experience.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default MatchaRitual