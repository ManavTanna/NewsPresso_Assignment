import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../api/NewsFetch';
import { setArticles, setLoading, setError } from '../redux/Slice';
import Article from '../components/Article';
import Pagination from '../components/Pagination';
import { BarLoader } from 'react-spinners';
import Navbar from '../components/NavBar';

const News = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [category] = useState('general'); // Adjusted to remove unused setCategory
  const [country] = useState('in');

  // Redux state selectors
  const articles = useSelector(state => state.news.articles);
  const isLoading = useSelector(state => state.news.loading);
  const error = useSelector(state => state.news.error);

  const handleCategoryChange = (updatedCategories) => {
    category(updatedCategories);
    console.log('Selected categories:', updatedCategories);
  };

  const handleCountryChange = (country) => {
    country(country);
    console.log('Selected country:', country);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchArticles(category, country, page);
        dispatch(setArticles(data.articles));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch, category, country, page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
    <Navbar onCategoryChange={handleCategoryChange} onCountryChange={handleCountryChange} />
    <div className="container mx-auto p-4">
      
      <div className="flex justify-between items-center mb-4">
      </div>

      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <BarLoader color="rgba(54, 214, 177, 1)" />
        </div>
      )}

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {articles.map(article => (
          <Article key={article.url} article={article} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={20} onPageChange={handlePageChange} />
    </div>
    </>
  );
};

export default News;
