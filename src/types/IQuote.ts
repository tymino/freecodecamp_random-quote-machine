interface IQuoteProps {
  color: string;
}

interface IQuote {
  quote: string;
  author: string;
}

interface IQuotes {
  quotes: IQuote[];
}

export type {
  IQuoteProps,
  IQuote,
  IQuotes,
}