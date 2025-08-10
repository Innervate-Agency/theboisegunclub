import React from 'react';

const SiteNavigation = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">The Boise Gun Club</Link>
        <div>
          <a href="/the-armory" className="px-4">Armory</Link>
          <a href="/directory" className="px-4">Directory</Link>
          <a href="/events" className="px-4">Events</Link>
          <a href="/map" className="px-4">Map</Link>
          <a href="/marketplace" className="px-4">Marketplace</Link>
          <a href="/training" className="px-4">Training</Link>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavigation;
