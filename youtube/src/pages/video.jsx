import PlayVideo from './../components/playVideo.jsx';
import './../styles/video.css';
import Recommended from './../components/Recommended.jsx';
export default function Video() {
    return <>
        <div className="play-container">
            <PlayVideo />
            <Recommended />
        </div>
        
    </>
    
}