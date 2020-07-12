import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="site-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
