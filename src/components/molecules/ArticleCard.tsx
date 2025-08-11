import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
}

export default function ArticleCard({ slug, title, date, author, summary }: ArticleCardProps) {
  return (
    <Link href={`/the-armory/${slug}`}>
      <Card className="bg-card h-full flex flex-col group overflow-hidden shadow-elevated transition-all duration-300 ease-out hover:shadow-xl ">
        <CardHeader>
          <h3 className="font-rajdhani font-bold text-xl">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-body-sm text-muted-foreground">{summary}</p>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            <span>{author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </CardFooter>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-rusty-orange to-slate-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
      </Card>
    </Link>
  );
}
