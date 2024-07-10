import { cn } from '@/lib/utils';

export default function Container({
  className,
  children,
  as,
}: {
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}) {
  const Tag = as || 'div';
  return (
    <Tag className={cn('mx-auto w-full max-w-content', className)}>
      {children}
    </Tag>
  );
}
