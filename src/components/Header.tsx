'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          TrueCost Index
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
            About
          </Link>
          <Link href="/methodology" className="text-gray-600 hover:text-gray-900 text-sm">
            Methodology
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
            Privacy
          </Link>
          <Link href="/submit" className="btn-primary text-sm">
            Submit a Price
          </Link>
        </div>
      </nav>
    </header>
  );
}
