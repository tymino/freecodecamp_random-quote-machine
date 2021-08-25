import React from 'react';

import axios from 'axios';

import { IQuote, IQuotes } from '../types/IQuote';

const Quote: React.FC = () => {
  const [quotes, setQuotes] = React.useState<IQuote[]>([]);

  const getQuotes = async () => {
    try {
      const {
        data: { quotes },
      } = await axios.get<IQuotes>(`${process.env.REACT_APP_URL_QUOTES}`);

      setQuotes(quotes);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div>
      {quotes &&
        quotes.map((q: IQuote, i) => {
          return <div key={i}>{`${q.quote} - ${q.author}`}</div>;
        })}
    </div>
  );
};

export default Quote;
