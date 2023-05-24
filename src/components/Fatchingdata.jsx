import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Newcard1 from './Newcard1';
import Searchbar from './searchbar';

function Fatchingdata() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedNews = localStorage.getItem('news');
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    } else {
      topHeadlines();
    }
  }, []);

  const topHeadlines = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f907efe58c4869aec3aad56a6f859d")
      .then(resp => {
        setNews(resp.data.articles);
        localStorage.setItem('news', JSON.stringify(resp.data.articles));
        console.log(resp.data.articles);
      })
      .catch(error => {
        console.log(error, "error");
      });
  };

  return (
    <>
      <Searchbar setnews={setNews} news={news} />
      <div className='main-container'>
        {news.map(value => (
          <Newcard1 value={value} key={value.id} />
        ))}
      </div>
    </>
  );
}

export default Fatchingdata;
