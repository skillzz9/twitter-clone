import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";

export async function getServerSideProps(context){
    const id = context.query.id
    const docRef = doc(db, "posts", id)
    const docSnap = await getDoc(docRef)
}

export default function CommentsPage(){
    return (
        <div className="bg-black">
            <div className='flex bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto'>
                <Sidebar />
                <div className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow border-x border-gray-700">
                    <div className="flex space-x-1 border-b border-gray-700">
                    <ArrowLeftIcon className="w-7"/>
                    <h1 className="px-3 py-2 text-lg sm:text-xl font-bold sticky top-0 z-0">Tweet</h1> 
                    </div>
    
                <Tweet/>
                </div>
            </div>
            <Trending />
        </div>
    )
}