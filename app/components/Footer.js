import Link from 'next/link';

const Footer = () => (
  <footer className="bg-yellow-700 font-bold text-white py-6 px-4">
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm md:text-base mb-4 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Your Store. All rights reserved.
        </p>

        {/* Links Section */}
        <div className="space-y-2 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center">
          <Link href="/privacy">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
          </Link>
          <Link href="/terms">
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </Link>
          <Link href="/contact">
            <span className="hover:underline cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 text-center">
        <p className="text-sm">Follow us:</p>
        <div className="flex space-x-4 justify-center mt-2">
          <Link href="https://facebook.com">
            <span className="hover:text-blue-400 cursor-pointer">Facebook</span>
          </Link>
          <Link href="https://twitter.com">
            <span className="hover:text-blue-300 cursor-pointer">Twitter</span>
          </Link>
          <Link href="https://instagram.com">
            <span className="hover:text-pink-400 cursor-pointer">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
