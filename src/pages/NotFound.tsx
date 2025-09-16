import type { FC } from "react";
import { Link, useNavigate } from "react-router";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <section className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-4">
        <svg
          className="w-20 h-20 text-red-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="22" strokeWidth="4" />
          <path
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 32L32 16M32 32L16 16"
          />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600">Page Not Found</p>
        <div className="flex gap-3 mt-2">
          <Link
            to="/"
            className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-colors"
          >
            Go Home
          </Link>
          <button
            type="button"
            onClick={handleGoBack}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
          >
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
