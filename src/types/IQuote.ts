interface IQuote {
  quote: string;
  author: string;
}

interface IQuotes {
  quotes: IQuote[];
}

export type {
  IQuote,
  IQuotes,
}