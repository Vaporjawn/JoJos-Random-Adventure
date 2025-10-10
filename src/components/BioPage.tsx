import React from 'react';
import { useParams } from 'react-router-dom';

const BioPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Biography: {name}</h1>
      {/* Biography content will go here */}
    </div>
  );
};

export default BioPage;
