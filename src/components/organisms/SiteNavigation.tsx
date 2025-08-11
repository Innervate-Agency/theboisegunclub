import React from 'react';
import Link from 'next/link';

const SiteNavigation = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">The Boise Gun Club</Link>
        <div>
          <Link href="/the-armory" className="px-4">Armory</Link>
          <Link href="/directory" className="px-4">Directory</Link>
          <Link href="/events" className="px-4">Events</Link>
          <Link href="/intel" className="px-4">Intel</Link>
          <Link href="/marketplace" className="px-4">Marketplace</Link>
          <Link href="/training" className="px-4">Training</Link>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavigation;
