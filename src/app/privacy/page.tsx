export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy & Data Handling</h1>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Collect</h2>
            <p className="text-gray-600 mb-4">
              When you submit a price, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service category</strong> (e.g., plumbing, dental work)</li>
              <li><strong>Price paid</strong> in Canadian dollars</li>
              <li><strong>Location</strong> (province, city, and optionally postal code)</li>
              <li><strong>Experience ratings</strong> (satisfaction, timeliness, quality)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Never Collect</h2>
            <p className="text-gray-600 mb-4">
              We are committed to privacy-by-design. We <strong>never</strong> collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your name or any personal identifiers</li>
              <li>Vendor or service provider identities</li>
              <li>Your home address</li>
              <li>Email addresses tied to transactions</li>
              <li>Phone numbers</li>
              <li>Payment details or credit card information</li>
              <li>IP addresses or device fingerprints</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How Anonymization Works</h2>
            <p className="text-gray-600 mb-4">
              Your data is anonymized from the moment it&apos;s submitted:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Submissions cannot be traced back to individuals</li>
              <li>Postal codes are stored internally but only the first 3 characters (FSA) are used for clustering</li>
              <li>We never display individual transactions — only aggregated statistics</li>
              <li>All data is processed server-side before any insights are generated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Aggregation Thresholds</h2>
            <p className="text-gray-600 mb-4">
              To protect privacy, we only display aggregated data when minimum thresholds are met:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Postal code area:</strong> At least 25 submissions required</li>
              <li><strong>City level:</strong> At least 10 submissions required</li>
              <li><strong>Category-wide:</strong> At least 10 submissions required</li>
            </ul>
            <p className="text-gray-600 mt-4">
              If a threshold is not met, the system automatically falls back to a higher-level aggregation
              to prevent individual identification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Commitment</h2>
            <p className="text-gray-600 mb-4">
              We commit to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Never selling individual-level data</li>
              <li>Never sharing raw transaction records with third parties</li>
              <li>Only providing aggregated, anonymized insights</li>
              <li>Maintaining transparency about our data practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Canadian Privacy Standards</h2>
            <p className="text-gray-600">
              PriceWise is designed to meet Canadian privacy standards, including principles from
              PIPEDA (Personal Information Protection and Electronic Documents Act). We collect only
              what is necessary, use data only for stated purposes, and maintain appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-600">
              If you have questions about our privacy practices, please contact us through our{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-700">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
