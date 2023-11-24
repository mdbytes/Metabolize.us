import { StaticImageData } from 'next/image';
import { MutableRefObject } from 'react';

type Post = {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: { footnotes: string };
  categories: number[];
  tags: number[];
  acf: number[];
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    author: { href: string }[];
    replies: { href: string }[];
    'version-history': { href: string }[];
    'predecessor-version': { href: string }[];
    'wp:featuredmedia': { href: string }[];
    'wp:attachment': { href: string }[];
    'wp:term': { href: string }[];
    curies: { href: string }[];
  };
  _embedded: {
    'wp:featuredmedia': {
      acf: { alt_text: string; author: string }[];
      caption: { rendered: string };
      date: string;
      id: number;
      link: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes?: {};
        image_meta?: {};
      };
      media_type: string;
      mime_type: string;
      slug: string;
      source_url: string;
      title: { rendered: string };
      _links?: {};
    }[];
    'wp:term'?: {}[];
  };
};

type PostsProps = {
  posts: Post[];
};

type PostsRenderedProps = {
  posts: Post[];
};

type PostPageProps = {
  post: Post;
};

type Slide = {
  src: StaticImageData;
  slideTitle: string;
  href: string;
};

type DivRef = MutableRefObject<HTMLDivElement> | MutableRefObject<null>;
type InputRef = MutableRefObject<HTMLInputElement> | MutableRefObject<null>;
type ButtonRef = MutableRefObject<HTMLButtonElement> | MutableRefObject<null>;
type NavLinkRef = MutableRefObject<HTMLAnchorElement> | MutableRefObject<null>;
