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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 text-gray-800 flex flex-col">
      <nav className="bg-green-900 text-white p-4 flex justify-center gap-8 shadow-md">
        <Link href="/" className="hover:underline focus:outline-yellow-300">Home</Link>
        <Link href="/things-to-read" className="hover:underline focus:outline-yellow-300">Things to Read</Link>
      </nav>

      <main className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Things to Read</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">{link.title}</h2>
              <p className="text-sm text-gray-500">Visit site ↗</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 p-4 text-center text-sm">
        <p><strong>Keyboard Access:</strong> Tab through links, press Enter to open. All links show visible focus.</p>
      </footer>
    </div>
  );
}
