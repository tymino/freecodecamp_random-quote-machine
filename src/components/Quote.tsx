import React from 'react';
import axios from 'axios';

import Button from '../components/Button';

import randomInt from '../utils/randomInt';

import { IQuoteProps, IQuote, IQuotes } from '../types/IQuote';

const Quote: React.FC<IQuoteProps> = ({ color, setNewColor }) => {
  const [quotes, setQuotes] = React.useState<IQuote[]>([]);
  const [quoteNumber, setQuoteNumber] = React.useState<number>(0);

  const setNewQuote = () => {
    setQuoteNumber(randomInt(quotes.length));
    setNewColor();
  };

  const fetchQuotes = async () => {
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
    fetchQuotes();
  }, []);

  return (
    <div className="quote" id="quote-box">
      <div className="quote__text" id="text" style={{ color: color }}>
        <svg
          className="quote__text--image"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            fill={color}
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
        </svg>
        {quotes[quoteNumber]?.quote}
      </div>
      <div className="quote__author" id="author" style={{ color: color }}>
        {`- ${quotes[quoteNumber]?.author}`}
      </div>
      <div className="quote__buttons">
        <div className="quote__buttons--wrapper">
          <Button
            id='tweet-quote'
            content="twitter"
            color={color}
            isImage
            isLink={`https://twitter.com/intent/tweet?hashtags=${quotes[quoteNumber]?.quote}`}
          />
          <div className="buttons--margin-left">
            <Button
              id='tumblr-quote'
              content="tumblr"
              color={color}
              isImage
              isLink={
                `https://www.tumblr.com/widgets/share/tool?posttype=${quotes[quoteNumber]?.quote}`
              }
            />
          </div>
        </div>
        <Button id='new-quote' content="New quote" color={color} onClick={setNewQuote} />
      </div>
    </div>
  );
};

export default Quote;
