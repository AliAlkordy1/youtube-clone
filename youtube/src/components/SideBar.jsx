import './../styles/sidebar.css';
import { Icon } from '@iconify-icon/react';

// eslint-disable-next-line react/prop-types
export default function SideBar({Sidebar,catagory,setCatorgy}) {
    return <>
        <div className={Sidebar ? "sidebar" : "small-sidebar"}>
            <div className="shortcut-links">
                <div className={`sidelinks ${catagory===0?"active":""}`} onClick={()=>setCatorgy(0)}>
                <Icon icon="mdi:home-outline" width="20" height="20"  style={{color: "gray"}} className="shortcut-icons"/><p>Home</p>
                </div>
                <div className={`sidelinks ${catagory===20?"active":""}`} onClick={()=>setCatorgy(20)}>
                <Icon icon="ion:game-controller-outline" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Gaming</p>
                </div>
                <div className={`sidelinks ${catagory===2?"active":""}`} onClick={()=>setCatorgy(2)}>
                <Icon icon="lucide:car" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Automobiles</p>
                </div>
                <div className={`sidelinks ${catagory===17?"active":""}`} onClick={()=>setCatorgy(17)}>
                <Icon icon="solar:basketball-bold" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Sports</p>
                </div>
                <div className={`sidelinks ${catagory===24?"active":""}`} onClick={()=>setCatorgy(24)}>
                <Icon icon="icomoon-free:tv" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Entertainment</p>
                </div>
                <div className={`sidelinks ${catagory===28?"active":""}`} onClick={()=>setCatorgy(28)}>
                <Icon icon="material-symbols:biotech" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Technology</p>
                </div>
                <div className={`sidelinks ${catagory===10?"active":""}`} onClick={()=>setCatorgy(10)}>
                <Icon icon="mdi:music" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Music</p>
                </div>
                <div className={`sidelinks ${catagory===22?"active":""}`} onClick={()=>setCatorgy(22)}>
                <Icon icon="icomoon-free:blog" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>Blog</p>
                </div>
                <div className={`sidelinks ${catagory===25?"active":""}`} onClick={()=>setCatorgy(25)}>
                <Icon icon="iconamoon:news-thin" width="20" height="20"  style={{color: "black"}} className="shortcut-icons"/><p>News</p>
                </div>
                <hr />
            </div>
            <div className="sub-list">
                <h3>subscribed</h3>
                <div className="sidelinks">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/pewdiepie_gettyimages-501661286.jpg?crop=1xw:1.0xh;center,top&resize=640:*" alt="PewDiePie" /> <p>PewDiePie</p>
                </div>
                <div className="sidelinks">
                    <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg" alt="Mr Beast" /> <p>Mr Beast</p>
                </div>
                <div className="sidelinks">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3jtNzhP9eMXJwtvz-6_xWgbgHZaW8geW7g&s" alt="Ali-Almerjany" /> <p>Ali-Almerjany</p>
                </div>
                <div className="sidelinks">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54E-H7o8-C3VrnnY8mslJwDpeiSqlMm96-Q&s" alt="mustafa" /> <p>mustafa al-hajy</p>
                </div>
                <div className="sidelinks">
                    <img src="https://i.pinimg.com/280x280_RS/8c/2c/29/8c2c29d2515dd0d471b60d7a873177e7.jpg" alt="dahommy 999" /> <p>d7omy999</p>
                </div>
            </div>
        </div>

    </>
    
}