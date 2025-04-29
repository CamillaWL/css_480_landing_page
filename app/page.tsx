'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Home() {
  const [interests, setInterests] = useState([
    'Cooking', 'Traveling', 'Reading', 'Shopping'
  ]);

  const shuffleInterests = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800 flex flex-col">
      <nav className="bg-blue-900 text-white p-4 flex justify-center gap-8 shadow-md">
        <Link href="/" className="hover:underline focus:outline-yellow-300">Home</Link>
        <Link href="/things-to-read" className="hover:underline focus:outline-yellow-300">Things to Read</Link>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website!</h1>
        <p className="text-lg max-w-xl mb-6">
          Hi! I'm Camilla, a student passionate about technology, language learning, and creativity.
        </p>

        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-300 shadow-md mb-6"
        />

        <h2 className="text-2xl font-semibold mb-2">My Interests</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {interests.map((item, index) => (
            <span key={index} className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>

        <button
          onClick={shuffleInterests}
          className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition focus:outline-yellow-400"
        >
          Shuffle Interests 🎉
        </button>
      </main>

      <footer className="bg-gray-100 p-4 text-center text-sm">
        <p><strong>Keyboard Access:</strong> Use Tab and Enter to navigate and activate elements.</p>
      </footer>
    </div>
  );
}
