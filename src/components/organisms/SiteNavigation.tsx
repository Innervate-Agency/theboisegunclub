import React from 'react';

const SiteNavigation = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <a href="/" className="font-bold text-xl">The Boise Gun Club</a>
        <div>
          <a href="/the-armory" className="px-4">Armory</a>
          <a href="/directory" className="px-4">Directory</a>
          <a href="/events" className="px-4">Events</a>
          <a href="/map" className="px-4">Map</a>
          <a href="/marketplace" className="px-4">Marketplace</a>
          <a href="/training" className="px-4">Training</a>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavigation;
