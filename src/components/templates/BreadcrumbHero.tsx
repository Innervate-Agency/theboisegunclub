import React from 'react';

interface BreadcrumbHeroProps {
  title: string;
}

const BreadcrumbHero = ({ title }: BreadcrumbHeroProps) => {
  return (
    <section className="bg-muted text-muted-foreground p-xl">
      <div className="container mx-auto">
        <h1 className="h1-primary">{title}</h1>
        {/* Add breadcrumbs here if needed */}
      </div>
    </section>
  );
};

export default BreadcrumbHero;
