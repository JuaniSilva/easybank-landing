import Button from './Button';
import Logo from './Logo';
import Facebook from '@/components/icons/Facebook';
import Instagram from '@/components/icons/Instagram';
import Pinterest from '@/components/icons/Pinterest';
import Twitter from '@/components/icons/Twitter';
import Youtube from '@/components/icons/Youtube';
import { footerItems } from '@/lib/utils';

const socialMedia = [
  {
    name: 'Facebook',
    Icon: Facebook,
    to: '#',
  },
  {
    name: 'Youtube',
    Icon: Youtube,
    to: '#',
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    to: '#',
  },
  {
    name: 'Pinterest',
    Icon: Pinterest,
    to: '#',
  },
  {
    name: 'Instagram',
    Icon: Instagram,
    to: '#',
  },
];

export default function Footer() {
  return (
    <footer className='flex h-[510px] flex-col items-center justify-center bg-primary-dark-blue'>
      <div className=''>
        <a href='#' className='mx-auto block w-min'>
          <Logo fill={'#fff'} />
        </a>
        <ul className='mt-8 flex items-center gap-4'>
          {socialMedia.map((item) => (
            <li key={item.name} className='scale-[120%]'>
              <a href='#'>
                <item.Icon className='fill-white transition-colors hover:fill-primary-lime-green' />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className='mt-9 space-y-4 text-center text-sm font-thin text-white'>
        {footerItems.map((item) => (
          <li
            key={item.name}
            className='transition-colors hover:text-primary-lime-green'
          >
            <a href='#'>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className='mt-9 flex flex-col items-center'>
        <Button className=''>Request Invite</Button>
        <p className='mt-8 text-sm text-neutral-grayish-blue'>
          © Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
