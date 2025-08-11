import { getGuideData, getAllGuides } from '@/lib/guides';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { SiteFooter } from '@/components/ui/site-footer';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';
import MdxContent from '@/components/molecules/MdxContent';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Skip metadata generation in production
  if (process.env.NODE_ENV === 'production') {
    return { title: 'Not Found' };
  }

  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    return { title: 'Not Found' };
  }

  return {
    title: guide.frontmatter.title,
    description: `A guide on ${guide.frontmatter.title}, authored by ${guide.frontmatter.author}`,
  };
}

export async function generateStaticParams() {
  // Skip static generation in production
  if (process.env.NODE_ENV === 'production') {
    return [];
  }

  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  // Skip this page in production builds - not needed for splash page deployment
  if (process.env.NODE_ENV === 'production') {
    return notFound();
  }

  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    return notFound();
  }

  return (
    <>
      <SiteNavigation />
      <BreadcrumbHero
        title={guide.frontmatter.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
          { label: guide.frontmatter.title, href: `/guides/${guide.slug}` },
        ]}
      />
      <main className="py-xl">
        <div className="max-w-site mx-auto px-md">
          <article className="prose dark:prose-invert prose-lg">
            <MdxContent source={guide.content} />
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
