import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), 'content/guides');

export type Guide = {
  slug: string;
  frontmatter: {
    [key: string]: any;
    title: string;
    date: string;
    author: string;
  };
  content: string;
};

export function getGuideData(slug: string): Guide {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as Guide['frontmatter'],
    content,
  };
}

export function getAllGuides(): Guide[] {
  const filenames = fs.readdirSync(guidesDirectory);
  const mdxFiles = filenames.filter((filename) => filename.endsWith('.mdx'));

  const allGuides = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    return getGuideData(slug);
  });

  return allGuides.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
