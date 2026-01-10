export default function EthicsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Data Ethics</h1>

        <p className="text-gray-600 mb-8 text-lg">
          PriceWise is built on a foundation of ethical data practices. These principles guide
          every decision we make about data collection, storage, and usage.
        </p>

        <div className="space-y-8">
          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Aggregated Insights Only</h2>
            <p className="text-gray-600">
              We never expose individual transaction records. All insights are derived from
              aggregated data that cannot be traced back to any single submission. Statistical
              thresholds ensure that even small geographic areas maintain anonymity.
            </p>
          </section>

          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Privacy First</h2>
            <p className="text-gray-600">
              Privacy is not an afterthought — it&apos;s built into our architecture. We collect only
              what is necessary for benchmarking. We never collect personal identifiers. We design
              our systems assuming that every data point could be subject to privacy scrutiny.
            </p>
          </section>

          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Public Interest Orientation</h2>
            <p className="text-gray-600">
              PriceWise exists to serve the public interest. Our goal is to bring transparency
              to service pricing, helping consumers make informed decisions. We are not here to
              advantage any particular vendor, industry, or commercial interest.
            </p>
          </section>

          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Neutral Methodology</h2>
            <p className="text-gray-600">
              Our statistical methods are documented and applied consistently across all categories
              and regions. We do not manipulate results to favor any outcome. Our aggregation
              thresholds and percentile calculations follow standard statistical practices.
            </p>
          </section>

          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Minimization</h2>
            <p className="text-gray-600">
              We collect only what we need. No free-text fields that could accidentally capture
              personal information. No tracking cookies or behavioral analytics. No selling or
              sharing of individual-level data with third parties.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-gray-600 text-center">
            These principles are non-negotiable. If you have questions or concerns about our
            data practices, please <a href="/contact" className="text-blue-600 hover:text-blue-700">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
