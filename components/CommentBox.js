import { db } from '@/firebase';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CommentBox({ user, tweetData }) {
  const [comment, setComment] = useState('');
  const tweetDetails = useSelector((state) => state.modals.commentTweetDetails);

  async function sendComment() {
    const docRef = doc(db, 'posts', tweetDetails.id);
    const commentDetails = {
      username: user?.username,
      name: user?.name,
      photoUrl: user?.photoUrl,
      comment: comment,
    };
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (!Array.isArray(data.comments)) {
      await updateDoc(docRef, {
        comments: [],
      });
    }

    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails),
    });
  }
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-700 p-2">
        <div className="flex justify-center p-1 space-x-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user.photoUrl}
          ></img>
          <div>
            <div className="flex">
              <div>
                <div className="text-gray-500 flex items-center space-x-2 mb-1">
                  <h1 className="text-white font-bold">{user.name}</h1>
                  <span>@{user.username}</span>
                </div>
              </div>
            </div>
            <textarea
              placeholder="Tweet your reply"
              className="text-lg outline-none w-full bg-transparent resize-none"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button
          className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
          onClick={sendComment}
        >
          Tweet
        </button>
      </div>
      <Comments tweetData={tweetData} />
    </>
  );
}

export function Comments({ tweetData }) {
  return (
    <>
      {tweetData.comments?.map((comment) => (
        <div className="border-b border-gray-700">
          <div className="flex space-x-3 p-3 ">
            <img
              className="w-11 h-11 rounded-full object-cover"
              src={comment.photoUrl}
            />

            <div>
              <div className="text-gray-500 flex items-center space-x-2 mb-1">
                <h1 className="text-white font-bold">{comment.name}</h1>
                <span>@{comment.username}</span>
              </div>
              <span>{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
