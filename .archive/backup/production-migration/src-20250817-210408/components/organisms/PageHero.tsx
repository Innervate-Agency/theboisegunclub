import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-peachy-white to-peachy-white py-xl">
      <div className="container mx-auto text-center">
        <h1 className="font-rajdhani font-bold text-4xl md:text-5xl lg:text-6xl text-dark-chocolate">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-slate-blue">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
