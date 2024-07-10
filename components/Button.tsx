import { cn } from '@/lib/utils';

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        `rounded-full bg-white bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan px-8 py-3 font-public-sans text-sm font-bold text-white`,
        'hover:from-primary-lime-green/60 hover:to-primary-bright-cyan/60',
        className
      )}
    >
      {children}
    </button>
  );
}
