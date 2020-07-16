import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="site-branding">
          <Link href="/"><a className="home-link">
            <img className="header-img" src="https://res.cloudinary.com/ekomenyong/image/upload/v1594851273/headshot-circle-330x330_c8t4na.png" alt="Ekom Enyong" />
            <h3 className="name">Ekom Enyong</h3>
          </a></Link>
        </div>
        <nav className="nav-menu">
          <a href="mailto:hello@ekomenyong.com" className="menu-item">let's chat.</a>
        </nav>
      </div>
      <hr className="header-hr" />
    </header>
  );
}
