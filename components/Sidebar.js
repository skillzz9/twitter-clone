import {HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, BellIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"

export default function Sidebar(){
    return (
        // sidebar hidden by default
        <div className="h-full hidden sm:flex flex-col fixed"> 
            <nav className="h-full relative xl:space-y-1.5">
            <div className="flex justify-center xl:justify-start items-center p-2 xl:p-3">
                <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
            </div>
                <SidebarLink text="Home" Icon={HomeIcon}/>
                <SidebarLink text="Explore" Icon={HashtagIcon}/>
                <SidebarLink text="Notifications" Icon={BellIcon}/>
                <SidebarLink text="Messages" Icon={InboxIcon}/>
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon}/>
                <SidebarLink text="Profile" Icon={UserIcon}/>
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}/>

            </nav>
            
            <div className="absolute bottom-0">User</div>


        </div>
    )
    }

    function SidebarLink({text, Icon}){
        return (
            <li className="flex mb-3 items-center text-xl space-x-3 hoverAnimation justify-center xl:justify-start">
                <Icon className="h-7"/>
                <span className="hidden xl:inline">{text}</span>
            </li>
        )
    }