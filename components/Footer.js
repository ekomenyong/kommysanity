import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <hr className="footer-hr" />
      <div className="footer-wrapper">
        <div className="main-footer">
          <nav className="nav-menu">
            <a className="menu-item" href="mailto:ekom.enyong@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
            <a className="menu-item" href="https://www.twitter.com/EkomEnyong/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="menu-item" href="https://www.linkedin.com/in/ekomenyong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
          <div className="copyright-bar">
            <p className="copyright-text">
              Designed and developed by
              {' '}
              <a href="https://ekomenyong.com" target="_blank" rel="noopener noreferrer">Ekom Enyong</a>
              {' '}
              with
              {' '}
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>
              ,
              {' '}
              <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer">Sanity</a>
              , +
              {' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
              .
            </p>
            <p className="copyright-text">© 2020 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
