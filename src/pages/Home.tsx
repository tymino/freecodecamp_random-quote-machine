import React from 'react';

import generateColor from '../utils/generateColor';

import Quote from '../components/Quote';

const Home: React.FC = () => {
  const [color, setColor] = React.useState<string>('');

  const setNewColor = () => {
    setColor(generateColor());
  };

  React.useEffect(() => {
    setNewColor();
  }, []);

  return (
    <div className="home" style={{background: color}}>
      <Quote color={color} setNewColor={setNewColor} />
    </div>
  );
};

export default Home;
