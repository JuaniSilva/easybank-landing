import Image from 'next/image';

export interface ArticleProps {
  imageSrc: string;
  imageAlt: string;
  author: string;
  title: string;
  content: string;
}
export default function Article({
  imageSrc,
  imageAlt,
  author,
  title,
  content,
}: ArticleProps) {
  return (
    <a href='#'>
      <article className='overflow-hidden rounded bg-white text-left'>
        <figure className='bg-neutral-very-light-gray'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={325}
            height={200}
            className='aspect-[325/200] w-full lg:aspect-[259/200]'
          />
        </figure>
        <div className='space-y-[7px] p-[30px] pb-[46px]'>
          <span className='text-[10px] text-neutral-grayish-blue'>
            By {author}
          </span>
          <h5 className='text-base leading-6 text-primary-dark-blue transition-colors hover:text-primary-lime-green'>
            {title}
          </h5>
          <p className='text-xs text-neutral-grayish-blue lg:text-sm'>
            {content}
          </p>
        </div>
      </article>
    </a>
  );
}
