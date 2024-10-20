import SideBar from './../components/SideBar.jsx';
import Feed from './../components/Feed.jsx';
import './../styles/Home.css';
// eslint-disable-next-line react/prop-types
export default function Home({Sidebar}) {
    return <>
     <SideBar Sidebar={Sidebar} />
     <div className={`container ${Sidebar? "" : " large-container "}`} >

        <Feed Sidebar={Sidebar}/>

     </div>
    </>

}