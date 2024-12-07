

const ContactPage = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Fill out the form below or reach out through other means.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Feel free to contact us through the following channels:
            </p>
            <div className="space-y-4">
              <div>
                <strong className="text-gray-800">Phone:</strong> <span className="text-gray-600">+123 456 7890</span>
              </div>
              <div>
                <strong className="text-gray-800">Email:</strong> <span className="text-gray-600">info@yourstore.com</span>
              </div>
              <div>
                <strong className="text-gray-800">Address:</strong> <span className="text-gray-600">123 Store St, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Our Location</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.968963005155!2d77.09936507553143!3d31.483747940655275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190e61f6784bdb%3A0x6fc6a0a7b13fbc2e!2sUniversity%20of%20Central%20Punjab!5e0!3m2!1sen!2sus!4v1631534081417!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
