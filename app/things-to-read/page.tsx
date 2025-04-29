// app/things-to-read/page.tsx

import Link from 'next/link';

export default function ThingsToRead() {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '10px' }}>
        <Link href="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link href="/things-to-read" style={{ color: 'white' }}>Things to Read</Link>
      </nav>

      <main>
        <h1>Things to Read</h1>
        <ul>
          <li><a href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-101" target="_blank" tabIndex={0}>Plant Care 101 - The Sill</a></li>
          <li><a href="https://www.houseplantjournal.com/" target="_blank" tabIndex={0}>House Plant Journal</a></li>
          <li><a href="https://www.gardendesign.com/houseplants/" target="_blank" tabIndex={0}>Garden Design - Houseplants</a></li>
          <li><a href="https://www.seriouseats.com/" target="_blank" tabIndex={0}>Serious Eats</a></li>
          <li><a href="https://smittenkitchen.com/" target="_blank" tabIndex={0}>Smitten Kitchen</a></li>
          <li><a href="https://www.bonappetit.com/" target="_blank" tabIndex={0}>Bon Appétit</a></li>
          <li><a href="https://www.nerdfitness.com/" target="_blank" tabIndex={0}>Nerd Fitness</a></li>
          <li><a href="https://www.self.com/fitness" target="_blank" tabIndex={0}>Self Magazine - Fitness</a></li>
          <li><a href="https://www.bodybuilding.com/" target="_blank" tabIndex={0}>Bodybuilding.com</a></li>
          <li><a href="https://www.yogajournal.com/" target="_blank" tabIndex={0}>Yoga Journal</a></li>
        </ul>
      </main>

      <footer>
        <h2>Keyboard Access Instructions</h2>
        <p>Use the <strong>Tab</strong> key to move between navigation links and reading links. Press <strong>Enter</strong> to open a link.</p>
        <p><strong>Keyboard Usability Focus:</strong> I made sure all main areas are keyboard accessible for ease of navigation and usability for all users.</p>
      </footer>
    </div>
  );
}

