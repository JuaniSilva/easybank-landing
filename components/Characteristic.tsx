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
    <div className='flex flex-col items-center gap-[28px] lg:items-start'>
      <Icon />
      <h3 className='mx-auto max-w-[15ch] text-2xl text-primary-dark-blue lg:mx-0'>
        {title}
      </h3>
      <p className='text-xs text-neutral-grayish-blue lg:text-sm lg:leading-6'>
        {children}
      </p>
    </div>
  );
}
