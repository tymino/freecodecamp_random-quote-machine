interface IQuoteProps {
  color: string;
  setNewColor: () => void;
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