import React, { useState } from 'react';
import Fatchingdata from './Fatchingdata';
import Newcard1 from './Newcard1';
import axios from 'axios';


function SearchBar(props) {
    console.log("pro",props)
    const {setnews,news}=props
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search or handle search query here
    const searchdata = event.target.value;
    console.log('handlewa',searchQuery)

    if (searchQuery) {
        axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=b8f907efe58c4869aec3aad56a6f859d`).then((res)=>{
            console.log("adaddaddaddadd",res.data)
            setnews(res.data.articles)
            setSearchQuery(res.data.articles)
            
        }).catch((error)=>{
            console.log("error",error)
        })
        
    } 

    console.log('Search query:', searchQuery);
  };
console.log("news",news)
  return (
    <form onSubmit={handleSubmit}>
      <input className='inputdata'type="text"onChange={handleInputChange}placeholder="Search..."
      />
      <button className='search-button' type="submit">Search </button>
    </form>
  );
}

export default SearchBar;
