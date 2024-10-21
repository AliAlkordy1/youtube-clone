import './../styles/playVideo.css';
import Video1 from '../assets/videos/mohammed.mp4';
import { Icon } from '@iconify-icon/react';
const playVideo = () => {
  return (
    <div className="play-video"> 
    <video src={Video1} controls autoPlay muted></video>
    <h3>موال مكابر اجيب الراس عايل يالاسمر عايل</h3>
    <div className="play-video-info">
        <p > 1500 Views &bull; 1 month ago </p>
        <div>
        <span ><Icon icon="mdi:like" width="20" height="20"  style={{color: "black"}} className="icons-play-video"/> 125</span>
        <span><Icon icon="mdi:dislike" width="20" height="20"  style={{color: "black"}} className="icons-play-video"/> 2</span>
        <span><Icon icon="mdi:share" width="20" height="20"  style={{color: "black"}} className="icons-play-video"/> share</span>
        <span><Icon icon="arcticons:fastsave" width="20" height="20"  style={{color: "black"}} className="icons-play-video"/> save </span>

        </div>
    </div>
    <hr />
    <div className="publisher">
        <img src="https://habzboz-news.com/media/2024/03/artworks-000272095037-kouhs6-t500x500.jpg" alt="" />
        <div>
        <p>محمد عبد الجبار</p>
        <span>1M subscribers</span>
        </div>
        <button>subscribe</button>
    </div>
    <div className="vid-description">
        <p>احلى اغنية بالعالم</p>
        <hr />
        <h4>31 comments</h4>
    </div>
    <div className="comment">
        <img src="https://t3.ftcdn.net/jpg/06/95/65/86/360_F_695658623_qQOKTAa5f0NJ9QIvwDoImSiYGQvRbltI.jpg" alt="" />
        <div>
            <h3>Darowen <span>1 day ago</span></h3>
            <p>احلى اغنية سمعتهه بحياتي</p>
            <div className="comment-action">
            <span ><Icon icon="mdi:like" width="20" height="20"  style={{color: "black"}} className=" comments-icons "/> 125</span>
            <span><Icon icon="mdi:dislike" width="20" height="20"  style={{color: "black"}} className=" comments-icons " /> 2</span>
            </div>
        </div>
        
    </div>
    <div className="comment">
        <img src="https://t3.ftcdn.net/jpg/06/95/65/86/360_F_695658623_qQOKTAa5f0NJ9QIvwDoImSiYGQvRbltI.jpg" alt="" />
        <div>
            <h3>Darowen <span>1 day ago</span></h3>
            <p>احلى اغنية سمعتهه بحياتي</p>
            <div className="comment-action">
            <span ><Icon icon="mdi:like" width="20" height="20"  style={{color: "black"}} className=" comments-icons "/> 125</span>
            <span><Icon icon="mdi:dislike" width="20" height="20"  style={{color: "black"}} className=" comments-icons "/> 2</span>
            </div>
        </div>
        
    </div>
      
    </div>
  )
}

export default playVideo
