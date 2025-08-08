import React from 'react';

interface BreadcrumbHeroProps {
  title: string;
}

const BreadcrumbHero = ({ title }: BreadcrumbHeroProps) => {
  return (
    <section className="bg-gray-700 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
        {/* Add breadcrumbs here if needed */}
      </div>
    </section>
  );
};

export default BreadcrumbHero;
