import React from 'react'

const HomePage = () => {
  return (
    <div style = {cardStyle}>
      <h1>Try asking question : Give me the news from cnn</h1>
    </div>
  )
}

const cardStyle = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '8px',
  fontFamily: 'Arial',
  border: '1px',
  height: '80px',
  textAlign: 'center',
  fontSize: '10px',
  marginLeft: '100px',
};


export default HomePage
