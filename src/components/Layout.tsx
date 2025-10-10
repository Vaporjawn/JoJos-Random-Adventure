import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        {/* Header content will go here */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
};

export default Layout;
