import ApiIcon from '@/components/icons/Api';
import Budgeting from '@/components/icons/Budgeting';
import Onboarding from '@/components/icons/Onboarding';
import Online from '@/components/icons/Online';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

export const footerItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Support', href: '/support' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];
export const articles = [
  {
    author: 'Claire Robinson',
    title: '  Receive money in any currency with no fees',
    content:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    imageAlt: 'Currency',
    imageSrc: '/images/image-currency.jpg',
  },
  {
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    imageAlt: 'Restaurant plate being prepared',
    imageSrc: '/images/image-restaurant.jpg',
  },
  {
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    content:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    imageAlt: 'Plane flying',
    imageSrc: '/images/image-plane.jpg',
  },
  {
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    content:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …',
    imageAlt: 'Confetti falling',
    imageSrc: '/images/image-confetti.jpg',
  },
];
export const easybankCharacteristics = [
  {
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: Online,
  },
  {
    title: 'Simple Budgeting',
    description:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    icon: Budgeting,
  },
  {
    title: 'Fast Onboarding',
    description:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    icon: Onboarding,
  },
  {
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    icon: ApiIcon,
  },
];
