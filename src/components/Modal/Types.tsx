export interface WikiTypes {
  content_urls: {
    desktop: {
      page: string;
    };
  };
  title: {
    canonical: string;
    normalized: string;
    display: string;
  };
  pageid: number;
  extract: string;
  extract_html: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  dir: string;
  timestamp: {};
  description: string;
  coordinates: {
    lat: 0;
    lon: 0;
  };
}
