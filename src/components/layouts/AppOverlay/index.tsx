import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar';

export default function AppOverlay() {
  return (
    <>
      <NavBar />
      <main className={'p-page pt-navbar-space'}>
        <Outlet />
      </main>
    </>
  );
}
