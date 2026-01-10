'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/submit" className="text-gray-600 hover:text-gray-900 text-sm">
                  Submit a Price
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-gray-600 hover:text-gray-900 text-sm">
                  Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy & Data
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-gray-600 hover:text-gray-900 text-sm">
                  Data Ethics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Trust</h3>
            <p className="text-gray-600 text-sm">
              No names. No vendors. No personal data.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PriceWise. Privacy-first pricing benchmarks.
        </div>
      </div>
    </footer>
  );
}
