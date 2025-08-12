import { getArmoryItem, getAllArmoryItems } from '@/lib/the-armory';
import MdxContent from '@/components/molecules/MdxContent';
import SiteNavigation from '@/components/organisms/SiteNavigation';
import SiteFooter from '@/components/organisms/SiteFooter';
import PageHero from '@/components/organisms/PageHero';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getArmoryItem(params.slug);

  if (!item) {
    notFound();
  }

  return {
    title: item.frontmatter.title,
    description: `Details for ${item.frontmatter.title}`,
  };
}

export async function generateStaticParams() {
  const items = getAllArmoryItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ArmoryItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getArmoryItem(slug);

  if (!item) {
    notFound();
  }

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
