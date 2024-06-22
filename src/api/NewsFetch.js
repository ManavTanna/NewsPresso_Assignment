import axios from 'axios';
import { useDispatch, useStore } from 'react-redux';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchArticles = async (category, country, page) => {
  
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category,
        country: country,
        page: page,
        pageSize: 10,
        apiKey: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
