import MainLayout from '../layouts/MainLayout'

function Contact() {
  return (
    <MainLayout>

      <section className="pt-40 pb-28 bg-[#F7F5EF] min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#6b8f71] font-semibold text-sm">
              Contact Us
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#1d2b1f]">
              Let’s Talk Matcha
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-8">
              Have questions about our premium Japanese matcha?
              We’d love to hear from you.
            </p>

          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-16 mt-20">

            {/* Left Side */}
            <div className="bg-white p-10 rounded-[30px] shadow-sm">

              <h2 className="text-3xl font-bold text-[#1d2b1f]">
                Get In Touch
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Reach out for product questions, wholesale inquiries,
                or wellness collaborations.
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-bold text-[#355E3B]">
                    Email
                  </h4>

                  <p className="mt-2 text-gray-600">
                    hello@matcha.com
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-[#355E3B]">
                    Phone
                  </h4>

                  <p className="mt-2 text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-[#355E3B]">
                    Address
                  </h4>

                  <p className="mt-2 text-gray-600 leading-7">
                    Matcha Wellness Studio,
                    Bangalore, India
                  </p>

                </div>

              </div>

            </div>

            {/* Right Side Form */}
            <div className="bg-white p-10 rounded-[30px] shadow-sm">

              <form className="space-y-6">

                {/* Name */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#355E3B]"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="block text-[#1d2b1f] font-semibold mb-3">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-[25px] px-6 py-4 outline-none focus:border-[#355E3B] resize-none"
                  ></textarea>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-[#355E3B] text-white px-8 py-4 rounded-full hover:bg-[#27452c] transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Contact