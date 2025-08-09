import { getGuideData, getAllGuides } from '@/lib/guides';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { SiteFooter } from '@/components/ui/site-footer';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';
import MdxContent from '@/components/molecules/MdxContent';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideData(params.slug);

  if (!guide) {
    return notFound();
  }

  return {
    title: guide.frontmatter.title,
    description: `A guide on ${guide.frontmatter.title}, authored by ${guide.frontmatter.author}`,
  };
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideData(params.slug);

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
