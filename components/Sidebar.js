import { signOutUser } from "@/redux/userSlice"
import {HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, BellIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "@/firebase"
export default function Sidebar(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    async function handleSignOut(){
        await signOut(auth)
        dispatch(signOutUser())

    }
    return (
        // sidebar hidden by default
        <div className="h-full hidden sm:flex flex-col fixed xl:ml-20"> 
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
                <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-xl font-bold mt-2">
                    Tweet
                </button>
            <div onClick={handleSignOut} className="absolute flex justify-center item-center p-3 space-x-3 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer bottom-0 xl:p-3">
                <img className="w-10 h-10 rounded-full object-cover" src={user.photoUrl || "./assets/profilePictures/pfp6.png"}></img>
                <div className="hidden xl:inline">
                    <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
                    <h1 className="text-gray-500">@{user.username}</h1>
                </div>
                <DotsHorizontalIcon className="hidden xl:inline h-5"/>
            </div>
            </nav>
            
        
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