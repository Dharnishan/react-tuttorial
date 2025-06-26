import './Movie.css';
import { useState } from 'react';
import styles from './Movie.module.css';
function Movie(){
    // useState("");
    const [results, setResults] = useState("");
    const [Movie, setMovie] = useState("Stranger Things");
    
  return (
    <div>
      <h2 className={styles.title}>Movie Title</h2>
      <p>{Movie}</p>
      <button onClick={() => {setMovie("Money Heist")}}>Change the Movie </button>
      <p>Release Date: 2023</p>
      <p>Director: Jane Doe</p>
      <p>Genre: Action</p>
      <p className={styles.purchase}>{results}</p>
      <button className={styles.button} onClick={() => {setResults('Purchased')}}>Buy Now</button>
    </div>
  );
}

export default Movie;