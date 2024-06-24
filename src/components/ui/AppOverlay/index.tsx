interface NavBarProps {
  children: React.ReactNode;
}

import NavBar from '../NavBar';

const AppOverlay = (props: NavBarProps) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppOverlay;
