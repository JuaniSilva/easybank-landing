import Article from '@/components/Article';
import Button from '@/components/Button';
import Characteristic from '@/components/Characteristic';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { articles, cn, easybankCharacteristics } from '@/lib/utils';

export default function Home() {
  return (
    <main className='relative max-w-full overflow-clip font-public-sans text-[18px]'>
      <Header />
      <div className='lg:grid-row-1 mx-auto grid max-w-content grid-rows-2 items-center pt-16 lg:h-[650px] lg:grid-cols-2 lg:grid-rows-1'>
        <div className='relative row-start-1 h-full max-w-full lg:col-start-2'>
          <figure
            className={cn(
              'absolute -right-[53.5%] -top-[21%]',
              'after:absolute after:-left-[17.5%] after:-top-[7.5rem] after:-z-10 after:h-screen after:w-screen after:bg-intro-desktop after:bg-no-repeat'
            )}
          >
            <img src='/images/image-mockups.png' alt='mockups' />
          </figure>
        </div>

        {/* <figure className='lg:bg-intro-desktop lg:bg-intro-desktop-position absolute -top-[70px] z-0 h-full max-h-[650px] w-full flex-1 bg-intro-mobile bg-intro-mobile-position bg-no-repeat lg:w-1/2'>
          <img
            src='/images/image-mockups.png'
            alt='mockups'
            className='mx-auto max-h-[650px] max-w-[375px] lg:mx-0 lg:max-w-full'
          />
        </figure> */}
        <section className='row-start-2 mb-[88px] px-10 pt-[375px] text-center lg:col-start-1 lg:row-start-1 lg:flex-1 lg:pt-0 lg:text-left'>
          <h1 className='mx-auto max-w-[15ch] text-3xl text-primary-dark-blue lg:mx-0 lg:text-5xl'>
            Next generation digital banking
          </h1>
          <p className='mt-8 text-xs text-neutral-grayish-blue lg:max-w-[430px] lg:text-base'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className='mt-8'>Request Invite</Button>
        </section>
      </div>
      <section className='bg-neutral-light-grayish-blue px-10 py-[70px] lg:py-28'>
        <div className='mx-auto max-w-content text-center lg:text-left'>
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
        </div>
      </section>
      <section className='bg-neutral-very-light-gray px-6 pb-[88px] pt-[94px]'>
        <div className='mx-auto max-w-content text-center lg:text-left'>
          <h2 className='mx-auto max-w-[15ch] text-2xl text-primary-dark-blue lg:mx-0'>
            Latest Articles
          </h2>
          <div className='mt-[38px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {articles.map((article, index) => (
              <Article key={article.title + index} {...article} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
