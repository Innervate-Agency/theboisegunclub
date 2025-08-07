'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote source={source} />;
}
