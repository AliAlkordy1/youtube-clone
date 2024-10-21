import './../styles/feed.css';
import { Link } from 'react-router-dom';
import { API_KEY , value_converter} from './../data.js';
import { useState, useEffect } from 'react';
import moment from 'moment';

// eslint-disable-next-line react/prop-types
export default function Feed({ Sidebar, catagory }) {
    const [data, setData] = useState([]);

    // Keeping the 'feed' function unchanged
    const feed = ({ catagory }) => {
        const fetchData = async () => {
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IQ&videoCategoryId=${catagory}&key=${API_KEY}`;
            await fetch(videoList_url)
                .then(response => response.json())
                .then(data => setData(data.items));
        };

        // Call fetchData inside feed
        fetchData();
    };

    // Call the 'feed' function inside useEffect to trigger data fetching when 'catagory' changes
    useEffect(() => {
        feed({ catagory });  // Calling feed function with 'catagory'
    }, [catagory]);  // Re-run effect when 'catagory' changes



    return <>
    <div className={Sidebar ? "large-feed" : "feed"}>
    {data.map((item,index)=>{return (  <Link to={`video/${item.snippet.catagoryId}/${item.id}`} className="card" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>  
        </Link>)})}
      
        


    </div>

       
    </>
    
}
