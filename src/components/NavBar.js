import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategoryFilter from './Category';
import CountryFilter from './Country';
import { fetchArticles } from '../api/NewsFetch';
import { setArticles, setLoading, setError} from '../redux/Slice';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchArticles(category, country);
        dispatch(setArticles(data.articles));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [category, country, dispatch]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-gray-800 text-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Newspresso Logo" className="h-20 mr-8 " />
          <span className="self-center text-xl font-serif font-semibold hover:text-blue-500">NewsPresso</span>
        </Link>

        <div className="flex items-center">
          <form className="relative mr-3 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
          </form>

          <div className="relative mr-3 hidden md:block">
            <CategoryFilter onChange={handleCategoryChange} />
          </div>

          <div className="relative mr-3 hidden md:block">
            <CountryFilter onChange={handleCountryChange} />
          </div>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FFFFFF" />
          </div>
        </div>

        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li>
              <Link to="/favorite" className="text-white hover:text-black hover:bg-blue-500 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">
                Favorites
                </Link>
            </li>
            <li className="block md:hidden mt-3">
              <CategoryFilter onChange={handleCategoryChange} />
            </li>
            <li className="block md:hidden mt-3">
              <CountryFilter onChange={handleCountryChange} />
            </li>
            <li className="block md:hidden mt-3">
              <form className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
