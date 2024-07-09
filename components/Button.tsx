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
        `rounded-full bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan px-8 py-3 font-public-sans text-sm font-bold text-white`,
        className
      )}
    >
      {children}
    </button>
  );
}
