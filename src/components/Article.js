import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/Slice'; // Adjust the path as per your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.news.favorites);
  const isFavorite = favorites.some(fav => fav.url === article.url);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }

  };

  const handleImageError = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/fallback.jpg`; // Set fallback image path using environment variable
  };

  const handleReadMore = () => {
    window.open(article.url, '_blank');
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl overflow-hidden w-full">
      <div className="h-80 bg-blue-gray-500 overflow-hidden shadow-lg">
        <img
          src={article.urlToImage || `${process.env.PUBLIC_URL}/fallback1.png`}
          alt={article.title} // Use article title as the alt text
          className="w-full h-full object-cover"
          onError={handleImageError} // Handle image error to set fallback image
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h5 className="text-xl font-semibold mb-2 leading-snug text-blue-gray-900">
            {article.title}
          </h5>
          {article.description && (
            <p className="text-base font-light leading-relaxed">
              {article.description}
            </p>
          )}
          <button className="focus:outline-none">
        <FontAwesomeIcon
          icon={isFavorite ? faSolidHeart : faRegularHeart}
          color={isFavorite ? 'red' : 'gray'}
          size="2x"
          style={{
            position: 'absolute',
            bottom: '5%', // 5% from the bottom of the container
            left: '5%',   // 5% from the left of the container
            transform: 'translate(-50%, 50%)', // Center the icon
            cursor: 'pointer',
            zIndex: '1000'  // Ensure the button appears above other content if necessary
          }}
          onClick={handleFavoriteClick}
        />
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href="#_"
            className="relative inline-block text-lg group"
            onClick={handleReadMore}
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Read More</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
