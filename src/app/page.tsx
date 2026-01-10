'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getOverallStats, type OverallStats } from '@/lib/api';

export default function Home() {
  const [stats, setStats] = useState<OverallStats | null>(null);

  useEffect(() => {
    getOverallStats()
      .then(setStats)
      .catch(() => setStats({ totalSubmissions: 0, categories: 0, cities: 0 }));
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See what people actually paid — before you overpay.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Anonymous, real-world pricing benchmarks based on real transactions across Canadian cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit" className="btn-primary text-lg">
              Check if your price was fair
            </Link>
            <Link href="/submit" className="btn-secondary text-lg">
              Compare prices in your area
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit what you paid — anonymously</h3>
              <p className="text-gray-600">Share your service price without any personal information.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">See how it compares</h3>
              <p className="text-gray-600">Get instant benchmarks against others in your area.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Make smarter decisions</h3>
              <p className="text-gray-600">Use real data before accepting your next quote.</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            No names. No vendors. No personal data.
          </p>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <p className="text-3xl font-bold text-blue-600">
                {stats?.totalSubmissions?.toLocaleString() || '—'}
              </p>
              <p className="text-gray-600 text-sm mt-1">Real submissions</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-blue-600">Daily</p>
              <p className="text-gray-600 text-sm mt-1">Updated</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-gray-600 text-sm mt-1">Aggregated & anonymized</p>
            </div>
            <div className="card">
              <p className="text-3xl font-bold text-blue-600">Transparent</p>
              <p className="text-gray-600 text-sm mt-1">Built for trust, not reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Insight */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 italic">
            &quot;In Toronto, emergency plumbing jobs cost 38% more on weekends, with no increase in reported satisfaction.&quot;
          </p>
          <p className="text-sm text-gray-500 mt-4">Example insight from aggregated data</p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Who It&apos;s For
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <p className="font-semibold text-gray-900">Homeowners & Renters</p>
              <p className="text-gray-600 text-sm mt-2">Know if that repair quote is fair</p>
            </div>
            <div className="card text-center">
              <p className="font-semibold text-gray-900">Small Business Owners</p>
              <p className="text-gray-600 text-sm mt-2">Benchmark service costs</p>
            </div>
            <div className="card text-center">
              <p className="font-semibold text-gray-900">Anyone Comparing Quotes</p>
              <p className="text-gray-600 text-sm mt-2">Make informed decisions</p>
            </div>
            <div className="card text-center">
              <p className="font-semibold text-gray-900">Anyone Who Just Paid</p>
              <p className="text-gray-600 text-sm mt-2">See if you got a good deal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Summary */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Matters</h2>
          <div className="space-y-4 text-gray-600">
            <p>We collect price, category, location, and ratings.</p>
            <p>We <strong>never</strong> collect names, vendor identities, addresses, or emails tied to transactions.</p>
            <p>Designed to meet Canadian privacy standards.</p>
          </div>
          <Link href="/privacy" className="text-blue-600 hover:text-blue-700 text-sm mt-6 inline-block">
            Learn more about our privacy practices &rarr;
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Submit a price. See the benchmark.
          </h2>
          <Link href="/submit" className="btn-primary text-lg">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
