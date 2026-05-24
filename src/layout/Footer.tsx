import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1D2B1F] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-14 pb-16 border-b border-[#355E3B]">

          {/* Brand */}
          <div>

            <Link to="/">

              <h2 className="text-4xl font-bold tracking-wide text-[#DFF1D8]">
                MATCHA.
              </h2>

            </Link>

            <p className="mt-6 text-gray-300 leading-8">
              Premium Japanese matcha crafted for calm energy,
              wellness, and mindful living.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">

              <li>

                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>

              </li>

              <li>

                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Shop
                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>

              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                hello@matcha.com
              </p>

              <p>
                +91 98765 43210
              </p>

              <p className="leading-7">
                Matcha Wellness Studio,
                Bangalore, India
              </p>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Stay Updated
            </h3>

            <p className="mt-6 text-gray-300 leading-7">
              Subscribe for wellness tips and matcha updates.
            </p>

            <div className="mt-6 flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 rounded-full bg-white text-gray-700 outline-none"
              />

              <button className="bg-[#355E3B] hover:bg-[#27452c] transition text-white py-4 rounded-full">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-sm">
            © 2026 MATCHA. All Rights Reserved.
          </p>

         

        </div>

      </div>

    </footer>
  )
}

export default Footer