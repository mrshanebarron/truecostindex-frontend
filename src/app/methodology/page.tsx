export default function MethodologyPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Methodology</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-8 text-lg">
            PriceWise provides benchmarking insights based on anonymous, real-world transaction data
            submitted by users across Canada. This page explains how we collect, validate, and
            calculate the benchmarks you see.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What Counts as a Valid Submission</h2>
            <p className="text-gray-600 mb-4">
              For a submission to be included in our dataset, it must meet the following criteria:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>A recognized service category must be selected</li>
              <li>Price must be a positive number in Canadian dollars</li>
              <li>Province and city must be specified</li>
              <li>Experience ratings (1-5) must be provided for satisfaction, timeliness, and quality</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Submissions with incomplete data or obviously invalid prices (e.g., negative numbers,
              extreme outliers) are filtered out to maintain data quality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What &quot;Price Paid&quot; Means</h2>
            <p className="text-gray-600 mb-4">
              The &quot;price paid&quot; field represents the total amount you paid for a service, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Labor costs</li>
              <li>Materials (if included in the final invoice)</li>
              <li>Applicable taxes</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We ask for the final amount on your receipt or invoice, not estimates or quotes.
              This ensures our benchmarks reflect what people actually paid, not what was quoted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How Benchmarks Are Calculated</h2>
            <p className="text-gray-600 mb-4">
              Our benchmarking system uses percentile-based statistics:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Median (50th percentile):</strong> The middle value — half of submissions
                are above this price, half are below
              </li>
              <li>
                <strong>25th percentile:</strong> 75% of submissions are above this price
              </li>
              <li>
                <strong>75th percentile:</strong> 25% of submissions are above this price
              </li>
              <li>
                <strong>Your percentile:</strong> Shows where your price falls relative to others
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              We use percentiles rather than simple averages because they&apos;re more resistant to
              outliers and give you a clearer picture of the typical price range.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Geographic Aggregation</h2>
            <p className="text-gray-600 mb-4">
              Benchmarks are calculated at multiple geographic levels:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Postal code area (FSA):</strong> Most granular, using the first 3 characters
                of your postal code
              </li>
              <li><strong>City level:</strong> Aggregated across a city</li>
              <li><strong>Province level:</strong> Aggregated across a province</li>
              <li><strong>Canada-wide:</strong> All submissions for a category</li>
            </ol>
            <p className="text-gray-600 mt-4">
              The system automatically selects the most granular level that meets minimum thresholds,
              then falls back to broader aggregations if needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Aggregation Thresholds Exist</h2>
            <p className="text-gray-600 mb-4">
              We require minimum submission counts before displaying benchmarks:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Privacy protection:</strong> Prevents individual transactions from being
                identifiable
              </li>
              <li>
                <strong>Statistical reliability:</strong> Ensures benchmarks are based on enough
                data points to be meaningful
              </li>
              <li>
                <strong>Outlier resistance:</strong> With more data points, extreme values have
                less impact on the statistics
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Why We Start With Major Canadian Cities</h2>
            <p className="text-gray-600 mb-4">
              Initial benchmarks focus on Canadian markets to ensure pricing comparability, privacy
              protection, and statistical reliability.
            </p>
            <p className="text-gray-600 mb-4">
              Prices vary significantly by country due to currency, labor costs, and regulatory
              differences. By focusing on major Canadian cities first, we can:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Ensure pricing comparability:</strong> Comparing prices within the same
                currency and economic context produces more meaningful insights
              </li>
              <li>
                <strong>Protect privacy:</strong> Larger urban centers provide the volume of
                submissions needed to meet privacy thresholds without exposing individual transactions
              </li>
              <li>
                <strong>Build statistical reliability:</strong> Dense population areas generate
                enough data to produce stable, trustworthy benchmarks
              </li>
            </ul>
            <p className="text-gray-600">
              As our dataset grows, coverage will expand to include more regions across all provinces
              and territories. The system automatically falls back to broader geographic levels when
              local data is insufficient, ensuring you always receive the most relevant benchmark available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Quality</h2>
            <p className="text-gray-600 mb-4">
              We take several steps to maintain data quality:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Input validation on all submissions</li>
              <li>Duplicate detection to prevent repeated submissions</li>
              <li>No free-text fields that could accidentally capture personal information</li>
              <li>Regular monitoring of submission patterns</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
