import { useState, useEffect } from 'react';
import './Quote.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => (prevText === 'Loading...' ? 'Loading' : `${prevText}.`));
    }, 100);

    return () => clearInterval(intervalId);
  }, [setLoadingText]);

  useEffect(() => {
    const fetchFromAPI = async () => {
      setIsLoading(true);
      try {
        const apiKey = 'H4tpGBVm6rnB1V1cdlpqonhXC8F069RKL59hsWX6';
        const ajax = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        };
        const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
        const response = await fetch(url, ajax);
        const result = await response.json();
        setQuote(result[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchFromAPI();
  }, [setQuote]);

  if (isLoading) {
    return (
      <div className="loading">{loadingText}</div>
    );
  }

  if (isError) {
    return (
      <div className="error">Error fetching quote!!</div>
    );
  }

  return (
    <>
      <div className="quote">
        <h3>
          {' "'}
          {quote.quote}
          {'" '}
        </h3>
        <p>
          -
          {' '}
          {quote.author}
        </p>
      </div>
    </>
  );
};

export default Quotes;
