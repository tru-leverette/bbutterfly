import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Black Butterfly</h1>
        <p className="text-lg mb-6">Discover amazing products at unbeatable prices!</p>
        <button
          disabled
          className="bg-gray-400 text-white px-6 py-3 rounded font-medium cursor-not-allowed"
        >
          Shop Now
        </button>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Black Butterfly. All rights reserved.</p>
      </footer>
    </div>
  );
}
