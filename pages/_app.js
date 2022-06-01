import '../styles/globals.css';
import { useState } from 'react';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="primary-nav">
        <header>
          openhaven.io
        </header>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className={navOpen ? 'nav-open' : ''}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu${navOpen ? ' nav-open' : ''}`}>
          <Link href="/">
            <a>
              <img src="/icons/home.svg" alt="" />
              <label>Home</label>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <img src="/icons/about.svg" alt="" />
              <label>About Us</label>
            </a>
          </Link>
          <Link href="/games">
            <a>
              <img src="/icons/games.svg" alt="" />
              <label>Play Games</label>
            </a>
          </Link>
          <Link href="/publish">
            <a>
              <img src="/icons/publish.svg" alt="" />
              <label>Publish a Game</label>
            </a>
          </Link>
        </div>
      </nav>

      <div
        onClick={() => setNavOpen(false)}
        className={`fade${navOpen ? ' nav-open' : ''}`}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
