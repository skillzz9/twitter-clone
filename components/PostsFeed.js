import { useEffect, useState } from 'react';
import Tweet from './Tweet';
import TweetInput from './TweetInput';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import Link from 'next/link';

export default function PostsFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow border-x border-gray-700">
      <h1 className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-0">
        Home
      </h1>

      <TweetInput />

      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />;
      })}

      <Tweet />
    </div>
  );
}
