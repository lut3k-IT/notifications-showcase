import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar';

const AppOverlay = () => {
  return (
    <>
      <NavBar />
      <main className={'p-page'}>
        <Outlet />
      </main>
    </>
  );
};

export default AppOverlay;
