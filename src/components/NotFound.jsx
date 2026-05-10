import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-2 text-xl text-white/80">Page not found</p>
        <p className="mt-1 text-white/60">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
