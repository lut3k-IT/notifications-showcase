import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar';

const AppOverlay = () => {
  return (
    <>
      <NavBar />
      <main className={'pt-navbar-space p-page'}>
        <Outlet />
      </main>
    </>
  );
};

export default AppOverlay;
