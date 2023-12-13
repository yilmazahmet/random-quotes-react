import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className='outerBox'>
      <div className='innerBox'>
        "{quotes.text}"
        {quotes.author && (
          <p>{quotes.author.slice(0, -8)}</p>
        )}
        <div className='innerBox2'>
          <button className='button' onClick={getQuote}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
