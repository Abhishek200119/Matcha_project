function Newsletter() {
  return (
    <section className="py-32 bg-[#F7F5EF]">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-[#355E3B] rounded-[40px] px-8 md:px-16 py-20 text-center relative overflow-hidden">

          {/* Background Glow */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300 opacity-10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-green-200 opacity-10 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">

            <p className="uppercase tracking-[5px] text-[#DFF1D8] font-semibold text-sm">
              Join Our Community
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
              Get Wellness Tips
              <br />
              & Matcha Updates
            </h2>

            <p className="mt-8 text-green-100 text-lg leading-8 max-w-2xl mx-auto">
              Subscribe for exclusive matcha launches,
              wellness rituals, and mindful living inspiration.
            </p>

            {/* Form */}
            <div className="mt-12 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-5 rounded-full outline-none text-gray-700 bg-white"
              />

              <button className="bg-[#1D2B1F] hover:bg-black text-white px-10 py-5 rounded-full transition duration-300">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Newsletter