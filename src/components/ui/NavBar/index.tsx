import Button from '../Button';
import NotificationBell from '../NotificationBell';

const NavBar = () => {
  return (
    <div
      className={
        'w-full h-14 flex bg-white justify-between px-page border-b items-center'
      }
    >
      <nav className={'flex h-full [&>*]:h-full [&>*]:rounded-none'}>
        <Button variant={'text'}>Nav element</Button>
        <Button variant={'text'}>Nav element</Button>
        <Button variant={'text'}>Nav element</Button>
      </nav>
      <NotificationBell />
    </div>
  );
};

export default NavBar;
