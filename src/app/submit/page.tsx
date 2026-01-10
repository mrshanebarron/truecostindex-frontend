'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { submitTransaction, type SubmissionData } from '@/lib/api';
import { provinces, getCitiesForProvince, serviceCategories } from '@/lib/locations';

type Step = 'category' | 'price' | 'location' | 'ratings' | 'submitting';

export default function SubmitPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('category');
  const [error, setError] = useState<string | null>(null);

  // Form data
  const [serviceCategory, setServiceCategory] = useState('');
  const [price, setPrice] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [satisfaction, setSatisfaction] = useState(3);
  const [timeliness, setTimeliness] = useState(3);
  const [quality, setQuality] = useState(3);

  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (province) {
      setCities(getCitiesForProvince(province));
      setCity('');
    }
  }, [province]);

  const handleSubmit = async () => {
    setStep('submitting');
    setError(null);

    try {
      const data: SubmissionData = {
        serviceCategory,
        price: parseFloat(price),
        country: 'Canada',
        province,
        city,
        postalCode: postalCode || undefined,
        satisfaction,
        timeliness,
        quality,
        sessionId: crypto.randomUUID(),
      };

      const result = await submitTransaction(data);

      // Store result for results page
      sessionStorage.setItem('submissionResult', JSON.stringify(result));
      router.push('/results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
      setStep('ratings');
    }
  };

  const canProceed = () => {
    switch (step) {
      case 'category':
        return !!serviceCategory;
      case 'price':
        return !!price && parseFloat(price) > 0;
      case 'location':
        return !!province && !!city;
      case 'ratings':
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    switch (step) {
      case 'category':
        setStep('price');
        break;
      case 'price':
        setStep('location');
        break;
      case 'location':
        setStep('ratings');
        break;
      case 'ratings':
        handleSubmit();
        break;
    }
  };

  const prevStep = () => {
    switch (step) {
      case 'price':
        setStep('category');
        break;
      case 'location':
        setStep('price');
        break;
      case 'ratings':
        setStep('location');
        break;
    }
  };

  const renderRatingInput = (
    label: string,
    value: number,
    onChange: (v: number) => void
  ) => (
    <div className="mb-6">
      <label className="form-label">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`w-12 h-12 rounded-lg font-semibold transition-colors ${
              value === n
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-1">1 = Poor, 5 = Excellent</p>
    </div>
  );

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12">
      <div className="max-w-xl mx-auto px-4">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {['Category', 'Price', 'Location', 'Ratings'].map((label, index) => {
              const steps: Step[] = ['category', 'price', 'location', 'ratings'];
              const currentIndex = steps.indexOf(step === 'submitting' ? 'ratings' : step);
              const isComplete = index < currentIndex;
              const isCurrent = index === currentIndex;

              return (
                <div
                  key={label}
                  className={`text-sm ${
                    isComplete
                      ? 'text-blue-600'
                      : isCurrent
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  {label}
                </div>
              );
            })}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${
                  ((['category', 'price', 'location', 'ratings', 'submitting'].indexOf(step) + 1) /
                    4) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="card">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Step 1: Category */}
          {step === 'category' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What service did you pay for?</h2>
              <p className="text-gray-600 mb-6">Select the category that best matches your service.</p>
              <div className="grid grid-cols-2 gap-3">
                {serviceCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setServiceCategory(cat)}
                    className={`p-4 rounded-lg text-left transition-colors ${
                      serviceCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Price */}
          {step === 'price' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">How much did you pay?</h2>
              <p className="text-gray-600 mb-6">Enter the total amount in Canadian dollars.</p>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-2xl">$</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="form-input text-2xl flex-1"
                  min="0"
                  step="0.01"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                For {serviceCategory}
              </p>
            </div>
          )}

          {/* Step 3: Location */}
          {step === 'location' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Where was this service?</h2>
              <p className="text-gray-600 mb-6">This helps us compare prices in your area.</p>

              <div className="mb-4">
                <label className="form-label">Province</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select a province</option>
                  {provinces.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-select"
                  disabled={!province}
                >
                  <option value="">Select a city</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">
                  Postal Code <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                  placeholder="A1A 1A1"
                  className="form-input"
                  maxLength={7}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Used only for clustering. Never displayed publicly.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Ratings */}
          {step === 'ratings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Rate your experience</h2>
              <p className="text-gray-600 mb-6">Help others understand the value.</p>

              {renderRatingInput('Overall Satisfaction', satisfaction, setSatisfaction)}
              {renderRatingInput('Timeliness', timeliness, setTimeliness)}
              {renderRatingInput('Quality of Work', quality, setQuality)}
            </div>
          )}

          {/* Submitting state */}
          {step === 'submitting' && (
            <div className="text-center py-8">
              <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600">Submitting your data...</p>
            </div>
          )}

          {/* Navigation */}
          {step !== 'submitting' && (
            <div className="flex justify-between mt-8">
              {step !== 'category' ? (
                <button type="button" onClick={prevStep} className="btn-secondary">
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 'ratings' ? 'Submit' : 'Continue'}
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Takes less than 60 seconds. No signup required.
        </p>
      </div>
    </div>
  );
}
