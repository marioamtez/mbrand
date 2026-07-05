import { useEffect, useState } from 'react';
import type { NewsItem } from '../data/news';

// "mbrand" tag on theofficer.es (https://theofficer.es/temas/mbrand/) — tag ID 29189.
const OFFICER_MBRAND_TAG_ID = 29189;
const OFFICER_API_URL = `https://theofficer.es/wp-json/wp/v2/posts?tags=${OFFICER_MBRAND_TAG_ID}&per_page=12&_embed=wp:featuredmedia,wp:term`;

type WpEmbeddedTerm = { taxonomy: string; name: string };

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[];
    'wp:term'?: WpEmbeddedTerm[][];
  };
};

function decodeHtml(html: string): string {
  const el = document.createElement('textarea');
  el.innerHTML = html;
  return el.value;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${String(d.getFullYear()).slice(-2)}`;
}

function mapPost(post: WpPost): NewsItem {
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '';
  const category = post._embedded?.['wp:term']?.flat()
    .find((t) => t.taxonomy === 'category')?.name;
  return {
    id: `officer-${post.id}`,
    image,
    category: category ? decodeHtml(category).toUpperCase() : 'THE OFFICER',
    date: formatDate(post.date),
    headline: decodeHtml(post.title.rendered),
    body: null,
    href: post.link,
  };
}

// Fetches posts tagged "mbrand" on theofficer.es to feed the Noticias section live.
export function useOfficerMbrandNews() {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(OFFICER_API_URL)
      .then((res) => res.json())
      .then((posts: WpPost[]) => {
        if (cancelled) return;
        setItems(posts.map(mapPost));
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return items;
}
