/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './../styles/playVideo.css';
import Video1 from '../assets/videos/mohammed.mp4';
import { Icon } from '@iconify-icon/react';
import { useState, useEffect } from 'react';
import { API_KEY, value_converter } from './../data.js';
import moment from 'moment';

// eslint-disable-next-line react/prop-types
const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [chaneelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // Fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    // Fetching channel data
    const chaneel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(chaneel_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));
  };
  const fetchCommentData = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
   await fetch(comment_url).then(response => response.json().then((data)=>setCommentData(data.items)))
  }
  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);
  useEffect(() => {
    fetchCommentData();
  }, [chaneelData]);
  return (
    <div className="play-video">
      {/* <video src={Video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData?.snippet?.title || 'title here'}</h3>

      <div className="play-video-info">
        <p>
          {apiData
            ? `${value_converter(apiData.statistics.viewCount)} Views • ${moment(apiData.snippet.publishedAt).fromNow()}`
            : 'Loading...'}
        </p>
        <div>
          <span>
            <Icon
              icon="mdi:like"
              width="20"
              height="20"
              style={{ color: 'black' }}
              className="icons-play-video"
            />{' '}
            {apiData ? value_converter(apiData.statistics.likeCount) : 0}
          </span>
          <span>
            <Icon
              icon="mdi:dislike"
              width="20"
              height="20"
              style={{ color: 'black' }}
              className="icons-play-video"
            />{' '}
            2
          </span>
          <span>
            <Icon
              icon="mdi:share"
              width="20"
              height="20"
              style={{ color: 'black' }}
              className="icons-play-video"
            />{' '}
            share
          </span>
          <span>
            <Icon
              icon="arcticons:fastsave"
              width="20"
              height="20"
              style={{ color: 'black' }}
              className="icons-play-video"
            />{' '}
            save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        {chaneelData && (
          <>
            <img src={chaneelData.snippet?.thumbnails?.default?.url} alt="" />
            <div>
              <p>{apiData?.snippet?.channelTitle || 'Channel Name'}</p>
              <span>{chaneelData?value_converter(chaneelData.statistics.subscriberCount):"1m"} subscribers</span>
            </div>
            <button>subscribe</button>
          </>
        )}
      </div>

      <div className="vid-description">
        <p>{apiData?.snippet?.description?.slice(0, 250) || 'Loading description...'}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 0} comments</h4>
      </div>

      {/* Comments section */}
        {commentData.map((items, index) => {return(<div className="comment" key={index}>
        <img
          src={items.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt=""
        />
        <div>
          <h3>{items.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(items.snippet.topLevelComment.snippet.publishedAt).fromNow() } </span></h3>
          <p>{items.snippet.topLevelComment.snippet.textOriginal}</p>
          <div className="comment-action">
            <span>
              <Icon
                icon="mdi:like"
                width="20"
                height="20"
                style={{ color: 'black' }}
                className="comments-icons"
              />{' '}
              { value_converter(items.snippet.topLevelComment.snippet.likeCount) }
            </span>
            <span>
              <Icon
                icon="mdi:dislike"
                width="20"
                height="20"
                style={{ color: 'black' }}
                className="comments-icons"
              />{' '}
              
            </span>
          </div>
        </div>
      </div> )})}
      
    </div>
  );
};

export default PlayVideo;
