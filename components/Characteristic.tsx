interface CharacteristicsProps {
  children: React.ReactNode;
  Icon: React.ElementType;
  title: string;
}
export default function Characteristic({
  children,
  Icon,
  title,
}: CharacteristicsProps) {
  return (
    <div className='flex flex-col items-center gap-[28px]'>
      <Icon />
      <h3 className='text-primary-dark-blue mx-auto max-w-[15ch] text-2xl'>
        {title}
      </h3>
      <p className='text-neutral-grayish-blue text-xs'>{children}</p>
    </div>
  );
}
