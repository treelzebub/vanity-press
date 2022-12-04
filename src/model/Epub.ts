export interface Chapter {
  title: string;
  content: string;
  author: string;
  date_published: string;
  lead_image_url: string;
  url: string;
  domain: string;
  excerpt: string;
  word_count: number;
  direction: string;
  total_pages: number;
  rendered_pages: number; // Probably a reasonable proxy for parsing success
};

export interface Epub {
  title: string;
  author: string;
  chapters: Chapter[];
};