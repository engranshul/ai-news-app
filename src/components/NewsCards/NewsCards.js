import React from 'react';

const NewsCards = ({ news }) => {
  console.log('props received in news article ', { news });
  return (
    <div>
      <div>
        <h1 style={cardStyle}>{news.description}</h1>
      </div>
    </div>
  );
};

const cardStyle = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
  border: '1px',
  width: '60%',
  height: '40px',
  textAlign: 'center',
  fontSize: '12px',
  marginLeft: '250px',
};

export default NewsCards;
