import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">{COMPANY_NAME}</h3>
            <p className="mb-4 text-gray-400">
              We build stunning, high-performance websites and applications that drive results for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">Mubrakpur Dabas , Delhi-110081</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+91 7835996416</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">shavi8810@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:items-center md:justify-between">
          <p className="text-gray-400">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}