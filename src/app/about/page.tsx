export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About PriceWise</h1>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Why We Built This</h2>
            <p className="text-gray-600 mb-4">
              Have you ever wondered if you overpaid for a service? Whether that plumber&apos;s invoice
              was fair, or if your dental bill was in line with what others pay?
            </p>
            <p className="text-gray-600 mb-4">
              Pricing for services is often opaque. Unlike retail products where you can easily
              compare prices online, service pricing varies wildly and there&apos;s no easy way to
              know if you&apos;re getting a fair deal.
            </p>
            <p className="text-gray-600">
              PriceWise exists to change that. By collecting anonymous, real-world pricing data,
              we create benchmarks that help everyone make more informed decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Who It&apos;s For</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Homeowners and renters</strong> who want to know if a repair quote is fair
              </li>
              <li>
                <strong>Small business owners</strong> who need to benchmark service costs
              </li>
              <li>
                <strong>Anyone comparing quotes</strong> who wants real data, not guesses
              </li>
              <li>
                <strong>Anyone who just paid</strong> and wants to see if they got a good deal
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What This Is Not</h2>
            <p className="text-gray-600 mb-4">
              PriceWise is intentionally focused. We are <strong>not</strong>:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>A review site</strong> — We don&apos;t collect reviews or ratings of specific
                vendors
              </li>
              <li>
                <strong>A marketplace</strong> — We don&apos;t connect you with service providers
              </li>
              <li>
                <strong>A vendor directory</strong> — We don&apos;t list or rate specific businesses
              </li>
              <li>
                <strong>An advertising platform</strong> — We don&apos;t show ads or sponsored content
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Our focus is purely on pricing data and benchmarking insights. This keeps the platform
              neutral and trustworthy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-4">
              We believe in:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Privacy first:</strong> No personal information is ever collected or stored
              </li>
              <li>
                <strong>Data integrity:</strong> Only aggregated statistics are displayed, never
                individual transactions
              </li>
              <li>
                <strong>Transparency:</strong> Our methodology is documented and open
              </li>
              <li>
                <strong>Neutrality:</strong> We don&apos;t favor any vendors or categories
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">The Value of the Dataset</h2>
            <p className="text-gray-600 mb-4">
              The true value of PriceWise lies in the dataset we&apos;re building together. Every
              anonymous submission helps:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Create more accurate benchmarks for your area</li>
              <li>Identify pricing trends and patterns</li>
              <li>Help others make informed decisions</li>
              <li>Bring transparency to service pricing</li>
            </ul>
            <p className="text-gray-600 mt-4">
              By submitting your prices, you&apos;re contributing to a resource that benefits everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
