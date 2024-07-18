import CommentBox, { Comments } from '@/components/CommentBox';
import PostsFeed from '@/components/PostsFeed';
import Sidebar from '@/components/Sidebar';
import Trending from '@/components/Trending';
import Tweet from '@/components/Tweet';
import { db } from '@/firebase';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  const formattedData = {
    username: data?.userName,
    name: data?.name,
    photoUrl: data?.photoUrl,
    text: data?.tweet,
    comments: data.comments || null,
    timestamp: JSON.stringify(data?.timestamp.toDate()),
  };

  return {
    props: {
      tweetData: formattedData,
    },
  };
}

export default function CommentsPage({ tweetData }) {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-black">
      <div className="flex bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto">
        <Sidebar />
        <div className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow border-x border-gray-700">
          <div className="flex space-x-1 border-b border-gray-700">
            <Link href={'/'}>
              <ArrowLeftIcon className="w-7 mt-2 cursor-pointer" />
            </Link>
            <h1 className="px-3 py-2 text-lg sm:text-xl font-bold sticky top-0 z-0">
              Tweet
            </h1>
          </div>

          <div className="border-b border-gray-700">
            <div className="flex space-x-3 p-3 ">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={tweetData.photoUrl}
              />

              <div>
                <div className="text-gray-500 flex items-center space-x-2 mb-1">
                  <h1 className="text-white font-bold">{tweetData.name}</h1>
                  <span>@{tweetData.username}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <Moment fromNow>{JSON.parse(tweetData.timestamp)}</Moment>
                </div>
                <span className="text-2xl">{tweetData.text}</span>
              </div>
            </div>
          </div>

          <CommentBox user={user} tweetData={tweetData} />
        </div>
      </div>
    </div>
  );
}
