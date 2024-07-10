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
    <footer className='flex h-[510px] flex-col items-center justify-center bg-primary-dark-blue lg:h-[190px]'>
      <div className='mx-auto grid h-auto w-full max-w-content text-center lg:max-h-[100px] lg:grid-cols-[1fr_2fr_1fr] lg:text-left'>
        <div className='mx-auto w-min lg:mx-0 lg:flex lg:flex-col lg:justify-between'>
          <a href='#' className='mx-auto block h-min w-min lg:mx-0'>
            <Logo fill={'#fff'} />
          </a>
          <ul className='mt-8 flex h-min items-center gap-4 lg:mt-0'>
            {socialMedia.map((item) => (
              <li key={item.name} className='scale-[120%]'>
                <a href='#'>
                  <item.Icon className='fill-white transition-colors hover:fill-primary-lime-green' />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='mt-9 grid gap-4 text-center text-sm font-thin text-white lg:mt-0 lg:grid-flow-col lg:grid-rows-3 lg:text-left'>
          {footerItems.map((item) => (
            <li
              key={item.name}
              className='transition-colors hover:text-primary-lime-green'
            >
              <a href='#'>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className='mt-9 flex flex-col items-center lg:mt-0 lg:items-end'>
          <Button className=''>Request Invite</Button>
          <p className='mt-8 text-sm text-neutral-grayish-blue'>
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
