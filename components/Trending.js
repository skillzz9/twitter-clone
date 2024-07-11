import {DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import {BadgeCheckIcon} from "@heroicons/react/solid"

export default function Trending(){
    return(
    <div className="hidden lg:inline p-3">
        
        <div className="flex space-x-3 bg-white bg-opacity-10 rounded-3xl w-[300px] h-[44px] p-3">
            <SearchIcon className="w-6 text-gray-600 ml-2"/>
            <input className="bg-transparent focus:outline-none placeholder:text-gray-600" placeholder="Search Twitter"></input>
        </div>

        <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
            <h1 className="font-bold text-xl p-3">Whats Happening</h1>
            <TrendingPost/>
            <TrendingPost/>
            <TrendingPost/>
            <TrendingPost/>
            <TrendingPost/>

        </div>
        <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
            <h1 className="font-bold text-xl p-3">Who to follow</h1>
            <FollowPost/>
            <FollowPost/>
            <FollowPost/>

                
        </div>
    </div>
    )
}


export function TrendingPost(){
    return(
        <>
        <div className="p-3">
        <div className="flex items-center relative">
            <p className="text-gray-500 text-xs">
            Trending in US
            </p>
            <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
        </div>
        <div>
            <h1 className="font-bold text-[15px]">China</h1>
        </div>
        <p className="text-gray-500 text-xs">
            340K Tweets
        </p>
        </div>
        

        </>
    )

}

export function FollowPost(){
    return (
        <>
        <div className="flex justify-between p-3">
            <div className="flex space-x-3">
                <img className="w-11 h-11 object-cover rounded-full"src="/assets/bragg.png"></img>
                <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">David Bragg</h1>
                    <BadgeCheckIcon className="w-[18px] text-[#1d9bf0]"/>
                </div>
                <h1 className="text-gray-500 text-[12px] mt-1">
                    @davidbragg
                </h1>

                </div>
                
            </div>
            <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">
                Follow
            </button>
        </div>
        </>
    )
}