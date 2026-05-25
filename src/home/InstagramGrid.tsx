import img1 from '../assets/13.png'
import img2 from '../assets/14.png'
import img3 from '../assets/15.png'
import img4 from '../assets/16.png'

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
          <div className="aspect-square rounded-[30px] overflow-hidden hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

            <img
              src={img1}
              alt="Matcha Lifestyle"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Card 2 */}
          <div className="aspect-square rounded-[30px] overflow-hidden hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

            <img
              src={img2}
              alt="Matcha Latte"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Card 3 */}
          <div className="aspect-square rounded-[30px] overflow-hidden hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

            <img
              src={img3}
              alt="Wellness Matcha"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Card 4 */}
          <div className="aspect-square rounded-[30px] overflow-hidden hover:scale-105 transition duration-500 cursor-pointer shadow-lg">

            <img
              src={img4}
              alt="Matcha Ritual"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* Instagram Button */}
        <div className="flex justify-center mt-14">

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="bg-[#355E3B] hover:bg-[#27452c] hover:scale-105 transition duration-300 text-white px-10 py-4 rounded-full text-lg">
              Follow on Instagram
            </button>

          </a>

        </div>

      </div>

    </section>
  )
}

export default InstagramGrid