import Article from '@/components/Article';
import Button from '@/components/Button';
import Characteristic from '@/components/Characteristic';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { articles, cn, easybankCharacteristics } from '@/lib/utils';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative max-w-full overflow-clip font-public-sans text-[18px]'>
      <Header />
      <div className='pt-16' />
      <div
        className={
          'bg-pattern-mobile bg-mobile-position bg-mobile-size lg:bg-pattern-desktop lg:bg-desktop-position relative mb-[-120px] w-full bg-no-repeat lg:absolute lg:-right-[32.5%]'
        }
      >
        <figure className={cn('-translate-y-[133px] lg:-translate-y-[127px]')}>
          <img
            src='/images/image-mockups.png'
            alt='mockups'
            className='mx-auto'
          />
        </figure>
      </div>
      <Container className='flex flex-col items-center lg:h-[650px] lg:flex-row-reverse'>
        <section className='row-start-2 mb-[88px] px-10 text-center lg:col-start-1 lg:row-start-1 lg:mb-0 lg:flex-1 lg:px-0 lg:text-left'>
          <h1 className='mx-auto max-w-[15ch] text-3xl text-primary-dark-blue lg:mx-0 lg:text-5xl'>
            Next generation digital banking
          </h1>
          <p className='mt-8 text-xs text-neutral-grayish-blue lg:max-w-[410px] lg:text-base'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className='mt-8'>Request Invite</Button>
        </section>
      </Container>
      <section className='bg-neutral-light-grayish-blue px-10 py-[70px] lg:py-28'>
        <Container className='text-center lg:text-left'>
          <h2 className='mx-auto max-w-[15ch] text-2xl text-primary-dark-blue lg:mx-0 lg:max-w-none lg:text-3xl'>
            Why choose Easybank?
          </h2>
          <p className='mt-6 text-xs text-neutral-grayish-blue lg:max-w-[540px] lg:text-sm lg:leading-6'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never after.
          </p>
          <div className='mt-[62px] flex flex-col gap-9 lg:flex-row'>
            {easybankCharacteristics.map((characteristic, index) => (
              <Characteristic
                key={characteristic.title + index}
                Icon={characteristic.icon}
                title={characteristic.title}
              >
                {characteristic.description}
              </Characteristic>
            ))}
          </div>
        </Container>
      </section>
      <section className='bg-neutral-very-light-gray px-6 pb-[88px] pt-[94px]'>
        <Container className='text-center lg:text-left'>
          <h2 className='mx-auto max-w-[15ch] text-2xl text-primary-dark-blue lg:mx-0'>
            Latest Articles
          </h2>
          <div className='mt-[38px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {articles.map((article, index) => (
              <Article key={article.title + index} {...article} />
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
