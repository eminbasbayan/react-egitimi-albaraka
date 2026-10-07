import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>Header Navbar</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
