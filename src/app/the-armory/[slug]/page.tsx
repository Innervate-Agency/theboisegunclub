import { getArmoryItem, getAllArmoryItems } from '@/lib/the-armory';
import ArticlePageTemplate from '@/components/ui/article-page-template';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getArmoryItem(slug);

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
    <ArticlePageTemplate
      title={item.frontmatter.title}
      excerpt={item.frontmatter.description}
      content={item.content}
      author={{
        name: item.frontmatter.author || "Technical Team",
        title: "Firearms Expert",
        bio: "Specialized in tactical equipment and firearm reviews"
      }}
      publishDate={item.frontmatter.publishDate || item.frontmatter.date}
      readTime={item.frontmatter.readTime || 8}
      category={item.frontmatter.category || "Equipment Review"}
      sectionName="Armory"
      sectionPath="/the-armory"
      sectionColor="nav-armory"
      tags={item.frontmatter.tags || ["Equipment", "Review"]}
      views={item.frontmatter.views || 1200}
      likes={item.frontmatter.likes || 65}
      comments={item.frontmatter.comments || 12}
      featured={item.frontmatter.featured}
      image={item.frontmatter.image}
    />
  );
}
