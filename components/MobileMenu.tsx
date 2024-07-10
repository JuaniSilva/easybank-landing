'use client';
import { useState } from 'react';
import HamburguerIcon from './icons/Hamburguer';
import CloseIcon from './icons/Close';
import { cn, menuItems } from '@/lib/utils';

export default function MobileMenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn('text-primary-dark-blue', className)}>
      <button onClick={() => setIsOpen((val) => !val)}>
        {isOpen ? <CloseIcon /> : <HamburguerIcon />}
      </button>
      <nav
        className={cn(
          'absolute left-1/2 top-[88px] mx-auto w-[90%] -translate-x-1/2 rounded border bg-white py-8 text-center shadow transition-all duration-300',
          isOpen
            ? 'opacity-1 pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-[200px] opacity-0'
        )}
      >
        <ul className='space-y-[14px] font-normal'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href=''>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
