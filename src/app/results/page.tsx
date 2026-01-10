'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { SubmissionResponse } from '@/lib/api';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<SubmissionResponse | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('submissionResult');
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      router.push('/submit');
    }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const { submittedPrice, benchmark } = result;

  const getPercentileColor = (percentile: number) => {
    if (percentile <= 25) return 'text-green-600';
    if (percentile <= 50) return 'text-blue-600';
    if (percentile <= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPercentileLabel = (percentile: number) => {
    if (percentile <= 25) return 'Great deal!';
    if (percentile <= 50) return 'Below average';
    if (percentile <= 75) return 'Above average';
    return 'Higher than most';
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="card">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Benchmark Results</h1>
            <p className="text-gray-600">Here&apos;s how your price compares</p>
          </div>

          {/* User's price */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-center">
            <p className="text-gray-600 mb-1">You paid</p>
            <p className="text-4xl font-bold text-gray-900">${submittedPrice.toFixed(2)}</p>
          </div>

          {benchmark ? (
            <>
              {/* Percentile position */}
              {benchmark.userPercentile !== undefined && (
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-2">Your price is in the</p>
                  <p className={`text-5xl font-bold ${getPercentileColor(benchmark.userPercentile)}`}>
                    {benchmark.userPercentile}th
                  </p>
                  <p className="text-xl text-gray-700 mt-1">percentile</p>
                  <p className={`text-lg mt-2 ${getPercentileColor(benchmark.userPercentile)}`}>
                    {getPercentileLabel(benchmark.userPercentile)}
                  </p>
                </div>
              )}

              {/* Interpretation */}
              {benchmark.interpretation && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 text-center">{benchmark.interpretation}</p>
                </div>
              )}

              {/* Stats breakdown */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Price breakdown for {benchmark.levelLabel}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Median price</span>
                    <span className="font-semibold">${benchmark.stats.median.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">25th percentile</span>
                    <span className="font-semibold">${benchmark.stats.p25.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">75th percentile</span>
                    <span className="font-semibold">${benchmark.stats.p75.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Price range</span>
                    <span className="font-semibold">
                      ${benchmark.stats.min.toFixed(2)} - ${benchmark.stats.max.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual percentile bar */}
              {benchmark.userPercentile !== undefined && (
                <div className="mb-8">
                  <div className="relative h-4 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-full">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow"
                      style={{ left: `${benchmark.userPercentile}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Lower prices</span>
                    <span>Higher prices</span>
                  </div>
                </div>
              )}

              {/* Data source note */}
              <p className="text-sm text-gray-500 text-center">
                Based on {benchmark.stats.count} submissions in {benchmark.levelLabel}
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                We don&apos;t have enough data in your area yet to generate a benchmark.
              </p>
              <p className="text-gray-500 text-sm">
                Your submission helps build the dataset. Thank you!
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t">
            <Link href="/submit" className="btn-primary flex-1 text-center">
              Submit Another Price
            </Link>
            <Link href="/" className="btn-secondary flex-1 text-center">
              Back to Home
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Thank you for contributing to transparent pricing data.
        </p>
      </div>
    </div>
  );
}
