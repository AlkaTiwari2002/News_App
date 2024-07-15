// src/World.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function World() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?language=en&apiKey=044c667ace3444e18ed37145fa143390')
      .then(response => setNews(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h2>World News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default World;
