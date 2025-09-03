'use client'

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  
  useEffect(() => {
    const serializeMdx = async () => {
      try {
        const mdxSource = await serialize(source);
        setMdxSource(mdxSource);
      } catch (error) {
        console.error('Error serializing MDX:', error);
      }
    };
    
    if (source) {
      serializeMdx();
    }
  }, [source]);

  if (!mdxSource) {
    return <div className="animate-pulse">Loading content...</div>;
  }

  return <MDXRemote {...mdxSource} />;
}
