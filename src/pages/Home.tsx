import React from 'react';

import generateColor from '../utils/generateColor';

import Quote from '../components/Quote';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [color, setColor] = React.useState<string>('');

  React.useEffect(() => {
    setColor(generateColor());
  }, []);

  return (
    <div className="home">
      <Quote color={color} />
      <div className="home__buttons">
        <Button isImage content="twitter" color={color} />
        <Button isImage content="tumblr" color={color} />
        <Button content="New quote" color={color} />
      </div>
    </div>
  );
};

export default Home;
