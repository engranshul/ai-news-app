import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsArticles from './components/NewsArticles/NewsArticles';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn = alanBtn({
      key:
        '09a7eb46394916b0340840166c384b752e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <NewsArticles articles={newsArticles} />
    </div>
  );
};
export default App;
