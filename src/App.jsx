import { useState } from 'react';

import Practice1 from './Pratice1/pratice1';
import Practice2 from './Pratice2/pratice2';
import Project1 from './Project1/project1';
import Project2 from './Project2/project2';
import Project3 from './Project3/project3';

import './App.css';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <nav className="page-buttons">
          <button
            className={page === 0 ? 'active' : ''}
            onClick={() => setPage(0)}
          >
            Practice 1
          </button>

          <button
            className={page === 1 ? 'active' : ''}
            onClick={() => setPage(1)}
          >
            Practice 2
          </button>

          <button
            className={page === 2 ? 'active' : ''}
            onClick={() => setPage(2)}
          >
            Project 1
          </button>

          <button
            className={page === 3 ? 'active' : ''}
            onClick={() => setPage(3)}
          >
            Project 2
          </button>

          <button
            className={page === 4 ? 'active' : ''}
            onClick={() => setPage(4)}
          >
            Project 3
          </button>
        </nav>
      </header>

      <main className="page-content">
        {page === 0 && <Practice1 />}
        {page === 1 && <Practice2 />}
        {page === 2 && <Project1 />}
        {page === 3 && <Project2 />}
        {page === 4 && <Project3 />}
      </main>
    </div>
  );
}

export default App;
