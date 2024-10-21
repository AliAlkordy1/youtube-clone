import  { useState } from 'react';
import SideBar from './../components/SideBar.jsx';
import Feed from './../components/Feed.jsx';
import './../styles/Home.css';
// eslint-disable-next-line react/prop-types
export default function Home({Sidebar}) {
    const [catagory ,setCatorgy] = useState(0)
    return <>
     <SideBar Sidebar={Sidebar} catagory={catagory} setCatorgy={setCatorgy}/>
     <div className={`container ${Sidebar? "" : " large-container "}`} >

        <Feed Sidebar={Sidebar} catagory={catagory}/>

     </div>
    </>

}