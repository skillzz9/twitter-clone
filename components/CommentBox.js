import Moment from 'react-moment';

export default function CommentBox({ user, tweetData }) {
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-700 p-2">
        <div className="flex justify-center items-center p-1 space-x-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user.photoUrl}
          ></img>
          <h1 className="text-2xl text-gray-500">Tweet your reply</h1>
        </div>

        <button
          className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
          disabled={true}
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
