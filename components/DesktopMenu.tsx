'use client';
import { cn, menuItems } from '@/lib/utils';
import Button from './Button';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function DesktopMenu({ className }: { className?: string }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <>
      <nav className={cn('hidden h-full lg:block')}>
        <ul
          className='relative flex h-full gap-16 text-sm font-normal text-neutral-grayish-blue'
          onMouseLeave={() => setPosition((val) => ({ ...val, opacity: 0 }))}
        >
          {menuItems.map((item) => (
            <ListItem
              key={item.name}
              setPosition={({ left, width, opacity }) =>
                setPosition({ left, width, opacity })
              }
            >
              {item.name}
            </ListItem>
          ))}
          <motion.li
            animate={position}
            className='absolute top-[38px] z-0 h-1 bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan'
          />
        </ul>
      </nav>
      <Button className='hidden lg:block'>Request Invite</Button>
    </>
  );
}

const ListItem = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: ({
    left,
    width,
    opacity,
  }: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className='h-full w-full hover:text-primary-dark-blue'
    >
      <a href='#'>{children}</a>
    </li>
  );
};
