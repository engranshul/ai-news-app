import React from 'react';
import NewsCards from '../NewsCards/NewsCards';
import HomePage from '../HomePage/HomePage';

const NewsArticles = ({ articles }) => {
  if (!articles.length) {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
  return (
    <div>
      {articles.map((article) => {
        return <NewsCards news={article} />;
      })}
    </div>
  );
};

export default NewsArticles;
