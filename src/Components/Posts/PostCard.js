import React from 'react';
import { FaHeart, FaComment, FaRetweet } from 'react-icons/fa';

const handleLikeClick = () => {
  // console.log(`Haz dado Me gusta a ${username}'s tweet: "${content}"`);
};

const handleCommentClick = () => {

  // console.log(`Has comentado en ${username}'s tweet: "${content}"`);
};

const handleRetweetClick = () => {

  // console.log(`Has retwitteado el tweet de ${username}: "${content}"`);
};

const PostCard = ({ username, profileImage, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <div className="flex items-center">
        <img src={profileImage} alt={`${username}'s profile`} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h2 className="font-semibold text-lg">{username}</h2>
        </div>
      </div>
      <p className="mt-4">{content}</p>
      <div className="mt-4 flex items-center">
        <div className="mr-4 cursor-pointer" onClick={handleLikeClick}>
          <FaHeart className="text-red-500 text-2xl" />
        </div>
        <div className="mr-4 cursor-pointer" onClick={handleCommentClick}>
          <FaComment className="text-blue-500 text-2xl" />
        </div>
        <div className="cursor-pointer" onClick={handleRetweetClick}>
          <FaRetweet className="text-green-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
