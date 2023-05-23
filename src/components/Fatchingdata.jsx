import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Newcard1 from './Newcard1';
import Searchbar from './searchbar';
function Fatchingdata() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    topheadlines();
  }, []);

  const topheadlines = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f907efe58c4869aec3aad56a6f859d")
      .then(resp => {
        setnews(resp.data.articles); // Assuming 'articles' is the array within the response data
        console.log(resp.data.articles);
      })
      .catch(error => {
        console.log(error, "error");
      });
  };

  return (
    <>
     <Searchbar setnews={setnews} news={news}/>
    <div className='main-container'>
         {/* <Searchbar setnews={setnews} news={news}/> */}
      {news.map(value => (
       <Newcard1 value={value}/>
      ))}
     
    </div>
    </>
  );
}

export default Fatchingdata;
