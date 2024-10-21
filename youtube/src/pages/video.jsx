import PlayVideo from './../components/PlayVideo.jsx';
import './../styles/video.css';
import Recommended from './../components/Recommended.jsx';
import { useParams } from 'react-router-dom';
export default function Video() {
    const {videoId, categoryId} = useParams();
    return <>
        <div className="play-container">
            <PlayVideo videoId={videoId} />
            <Recommended catagoryId={categoryId}/>
        </div>
        
    </>
    
}