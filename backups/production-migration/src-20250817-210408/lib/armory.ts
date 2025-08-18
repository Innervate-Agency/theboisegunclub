import { getAllGuides, getGuideData, Guide } from './guides';

export function getAllArmoryItems(): Guide[] {
  const allGuides = getAllGuides();
  return allGuides.filter((guide) => guide.frontmatter.category === 'The Armory');
}

export function getArmoryItem(slug: string): Guide | undefined {
  const guide = getGuideData(slug);
  if (guide.frontmatter.category === 'The Armory') {
    return guide;
  }
  return undefined;
}
