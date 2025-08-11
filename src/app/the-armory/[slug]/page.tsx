import { getGuideData, getAllGuides } from '@/lib/guides';
import MdxContent from '@/components/molecules/MdxContent';
import SiteNavigation from '@/components/organisms/SiteNavigation';
import SiteFooter from '@/components/organisms/SiteFooter';
import PageHero from '@/components/organisms/PageHero';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Skip metadata generation in production
  if (process.env.NODE_ENV === 'production') {
    return { title: 'Not Found' };
  }
  const { slug } = await params;
  const guide = getGuideData(slug);
  return {
    title: guide.frontmatter.title,
    description: `A guide on ${guide.frontmatter.title}`,
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

export default async function ArmoryItemPage({ params }: Props) {
  // Skip this page in production builds - not needed for splash page deployment
  if (process.env.NODE_ENV === 'production') {
    return <div>Page not available</div>;
  }
  const item = getArmoryData(params.slug);

  return (
    <>
      <SiteNavigation />
      <PageHero title={item.frontmatter.title} />
      <main className="bg-peachy-white">
        <div className="container mx-auto max-w-site py-xl px-md">
          <article className="prose dark:prose-invert prose-lg">
            <MdxContent source={item.content} />
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
