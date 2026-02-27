import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {/* <!-- JA Logo --> */}
        <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-white font-bold text-xl">JA</span>
        </div>

        {/* <!-- 404 Text --> */}
        <h1 className="text-8xl sm:text-9xl font-bold text-gold-500 mb-4">
          404
        </h1>

        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-bold text-slate-800 mb-3">
          Page Not Found
        </h2>

        {/* <!-- Subtext --> */}
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* <!-- Buttons --> */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-gold-500 text-white hover:bg-gold-600 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go to Dashboard
          </Link>
          <button className="border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
