import Container from './Container';
import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <div className='fixed top-0 z-10 flex h-full max-h-16 w-full items-center bg-white px-6'>
      <Container as='header' className='flex items-center justify-between'>
        <Logo />
        <DesktopMenu className='hidden lg:block' />
        <MobileMenu className='lg:hidden' />
      </Container>
    </div>
  );
}
