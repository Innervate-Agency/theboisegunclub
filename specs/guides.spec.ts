import { describe, it, expect } from 'vitest';
import { getAllGuides, getGuideData } from '../src/lib/guides';

describe('Guides Utility', () => {
  it('should retrieve all guides', () => {
    const allGuides = getAllGuides();
    expect(allGuides).toBeInstanceOf(Array);
    expect(allGuides.length).toBeGreaterThan(0);
  });

  it('should retrieve a single guide', () => {
    const guide = getGuideData('placeholder-guide');
    expect(guide).toBeDefined();
    expect(guide.slug).toBe('placeholder-guide');
    expect(guide.frontmatter.title).toBe('Placeholder Guide');
  });
});
