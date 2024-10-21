import { useState,useEffect } from 'react';
import './../styles/recommended.css';
import {API_KEY} from './../data.js';

// eslint-disable-next-line react/prop-types
const Recommended = ({categoryId}) => {
  

  const [apiData, setApiData] = useState([]);
  const fetchRecommendedData = async () => {
    const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IQ&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(relatedVideo_url).then(response => response.json()).then(data=>setApiData(data.items || []))
  } 
  useEffect(()=>
    {
      fetchRecommendedData();
    },
  []) 

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <div key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
            <div className="div-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{item.statistics.viewCount} views</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Recommended
