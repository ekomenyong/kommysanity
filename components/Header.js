import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="site-branding">
          <Link href="/"><a><img className="header-img" src="https://res.cloudinary.com/ekomenyong/image/upload/v1590164993/headshot-circle-330x330_zgtfak.png" alt="Ekom Enyong" /></a></Link>
        </div>
        <nav className="nav-menu">
          <a href="mailto:ekom.enyong@gmail.com" className="menu-item">contact</a>
        </nav>
      </div>
    </header>
  );
}
