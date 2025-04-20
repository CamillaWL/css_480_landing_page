'use client';

import { useState } from 'react';
import Image from 'next/image';

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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website!</h1>
      <p className="mb-4 text-lg">
        Hi! I'm Camilla, a student passionate about technology, language learning, and creativity.
      </p>

      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">My Interests</h2>
      <ul className="mb-4">
        {interests.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>

      <button
        onClick={shuffleInterests}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Shuffle Interests
      </button>
    </div>
  );
}
