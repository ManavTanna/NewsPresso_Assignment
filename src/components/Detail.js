import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { articleUrl } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(decodeURIComponent(articleUrl));
        setArticle(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleUrl]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {article && (
        <div>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.content}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
