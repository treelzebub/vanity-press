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
  rendered_pages: number; // Probably a reasonable proxy for success
}

export interface Epub {
  filename: string;
  title: string;
  author: string;
  chapters: Chapter[];
}