export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
  };
  searchInfo: {
    textSnippet?: string;
  };
  accessInfo: {
    webReaderLink: string;
  };
}
