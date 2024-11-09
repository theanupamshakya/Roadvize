// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section: Company Info + Navigation */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          {/* Company Info */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-xl mb-2">QuickRide Taxi</h3>
            <p className="text-base leading-relaxed text-gray-600">
              Your reliable partner for safe and affordable taxi services.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="w-full md:w-2/3 flex justify-between gap-8">
            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-gray-600 hover:text-yellow-500 transition"
                    href="/support"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center border-t border-gray-300 pt-4">
          <p className="text-base text-gray-500">
            © 2024 QuickRide Taxi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
