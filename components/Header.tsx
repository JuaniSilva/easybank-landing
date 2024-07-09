import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <div className='fixed top-0 z-10 flex h-full max-h-16 w-full items-center bg-white px-6'>
      <header className='flex w-full items-center justify-between'>
        <Logo />
        <MobileMenu />
      </header>
    </div>
  );
}
