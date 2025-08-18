import { getGuideData, getAllGuides } from '@/lib/guides';
import { ArticleDetailPage } from '@/components/ui/detail-page-builder';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    notFound();
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

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    return notFound();
  }

  return (
    <ArticleDetailPage
      title={guide.frontmatter.title}
      description={guide.frontmatter.description}
      content={guide.content}
      author={{
        name: guide.frontmatter.author,
        title: "Legal Expert",
        bio: "Specialized in Idaho firearms law and constitutional rights"
      }}
      publishDate={guide.frontmatter.publishDate || guide.frontmatter.date}
      readTime={12}
      category="Legal Guide"
      section={{
        name: "Guides",
        path: "/guides",
        color: "nav-guides"
      }}
      tags={guide.frontmatter.tags || ["Idaho Law", "Legal Guide"]}
      views={2840}
      likes={127}
      comments={23}
      featured={guide.frontmatter.featured}
    />
  );
}
