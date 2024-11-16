import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <Header />
    <Menu />
    <Outlet />
    <Footer />
  </>
  // <main>
  //   <Outlet />
  // </main>
);

export default Layout;