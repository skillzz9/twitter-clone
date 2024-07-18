import { db } from '@/firebase';
import { openCommentModal, setCommentTweet } from '@/redux/modalSlice';
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from '@heroicons/react/outline';
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';

export default function Tweet({ data, id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [likes, setLikes] = useState([]);

  async function likeComment(e) {
    e.stopPropagation();

    if (likes.includes(user.uid)) {
      await updateDoc(doc(db, 'posts', id), {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(doc(db, 'posts', id), {
        likes: arrayUnion(user.uid),
      });
    }
  }

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, 'posts', id), (doc) => {
      setLikes(doc.data()?.likes);
    });

    return unsubscribe;
  }, []);

  return (
    <div
      onClick={() => router.push('/' + id)}
      className="border-b border-gray-700 cursor-pointer"
    >
      {
        <TweetHeader
          username={data?.userName}
          name={data?.name}
          timestamp={data?.timestamp?.toDate()}
          text={data?.tweet}
          photoUrl={data?.photoUrl}
        />
      }
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              setCommentTweet({
                id: id,
                tweet: data?.tweet,
                photoUrl: data?.photoUrl,
                name: data?.name,
                username: data?.userName,
              })
            );
            dispatch(openCommentModal());
          }}
        >
          <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        </div>
        <div onClick={likeComment}>
          <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
        </div>
        <ChartBarIcon className="w-5 cursor-not-allowed" />
        <UploadIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
}

export function TweetHeader({ username, name, timestamp, text, photoUrl }) {
  return (
    <div className="flex space-x-3 p-3 ">
      <img className="w-11 h-11 rounded-full object-cover" src={photoUrl} />

      <div>
        <div className="text-gray-500 flex items-center space-x-2 mb-1">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <Moment fromNow>{timestamp}</Moment>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
