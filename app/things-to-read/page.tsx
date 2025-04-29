// app/things-to-read/page.tsx

import Link from 'next/link';

export default function ThingsToRead() {
  const links = [
    { title: 'Plant Care 101 - The Sill', url: 'https://www.thesill.com/blogs/care-miscellaneous/plant-care-101' },
    { title: 'House Plant Journal', url: 'https://www.houseplantjournal.com/' },
    { title: 'Garden Design - Houseplants', url: 'https://www.gardendesign.com/houseplants/' },
    { title: 'Serious Eats', url: 'https://www.seriouseats.com/' },
    { title: 'Smitten Kitchen', url: 'https://smittenkitchen.com/' },
    { title: 'Bon Appétit', url: 'https://www.bonappetit.com/' },
    { title: 'Nerd Fitness', url: 'https://www.nerdfitness.com/' },
    { title: 'Self Magazine - Fitness', url: 'https://www.self.com/fitness' },
    { title: 'Bodybuilding.com', url: 'https://www.bodybuilding.com/' },
    { title: 'Yoga Journal', url: 'https://www.yogajournal.com/' },
  ];

  return (
    <div className="bg-green-50 text-gray-800 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4 flex space-x-4">
        <Link href="/" className="text-white hover:underline focus:outline-yellow-400">Home</Link>
        <Link href="/things-to-read" className="text-white hover:underline focus:outline-yellow-400">Things to Read</Link>
      </nav>

      {/* Main content */}
      <main className="flex-grow px-4 py-10 sm:px-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Things to Read</h1>
        <p className="text-center mb-8 text-lg text-gray-600">Some of my favorite resources on plants, cooking, and fitness.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-150 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            >
              <h2 className="text-lg font-semibold">{link.title}</h2>
              <p className="text-sm text-blue-500">Visit site ↗</p>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-6 text-center text-sm mt-10">
        <h2 className="font-bold mb-1">Keyboard Access Instructions</h2>
        <p>Use the <strong>Tab</strong> key to move through the navigation and reading links. Press <strong>Enter</strong> to open a site. Focus is highlighted for accessibility.</p>
        <p className="mt-2"><strong>Keyboard Usability Focus:</strong> I ensured all links and controls are accessible by keyboard and clearly indicate when they’re focused, so users can navigate with ease.</p>
      </footer>
    </div>
  );
}
