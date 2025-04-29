'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Home() {
  const [interests, setInterests] = useState([
    'Cooking',
    'Traveling',
    'Reading',
    'Shopping',
  ]);

  const shuffleInterests = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5);
    setInterests(shuffled);

    // Launch confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="bg-blue-100 text-gray-800 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4 flex space-x-4">
        <Link href="/" className="text-white hover:underline focus:outline-yellow-400">Home</Link>
        <Link href="/things-to-read" className="text-white hover:underline focus:outline-yellow-400">Things to Read</Link>
      </nav>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-8 sm:p-20">
        <div className="flex flex-col items-center sm:items-start max-w-md w-full space-y-6 text-center sm:text-left">
          <h1 className="text-4xl font-bold">Welcome to My Website!</h1>

          <p className="text-lg">
            Hi! I'm Camilla, a student passionate about technology, language learning, and creativity.
          </p>

          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-2">My Interests</h2>
            <ul className="space-y-1">
              {interests.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={shuffleInterests}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-yellow-400"
          >
            Shuffle Interests 🎉
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-6 text-center text-sm">
        <h2 className="font-bold mb-1">Keyboard Access Instructions</h2>
        <p>Use <strong>Tab</strong> to navigate. Press <strong>Enter</strong> to activate links and buttons.</p>
        <p><strong>Keyboard Usability Focus:</strong> All actions are accessible by keyboard with visible focus indicators.</p>
      </footer>
    </div>
  );
}
