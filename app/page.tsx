import Article from '@/components/Article';
import Button from '@/components/Button';
import Characteristic from '@/components/Characteristic';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { articles, easybankCharacteristics } from '@/lib/utils';

export default function Home() {
  return (
    <main className='relative font-public-sans text-[18px]'>
      <Header />
      <figure className='absolute -top-[70px] z-0 w-full bg-intro-mobile bg-intro-mobile-position bg-no-repeat'>
        <img
          src='/images/image-mockups.png'
          alt='mockups'
          className='mx-auto max-w-[375px]'
        />
      </figure>
      <div className='pt-[375px]'>
        <section className='mb-[88px] mt-[50px] px-10 text-center'>
          <h1 className='mx-auto max-w-[15ch] text-3xl text-primary-dark-blue'>
            Next generation digital banking
          </h1>
          <p className='mt-8 text-xs text-neutral-grayish-blue'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className='mt-8'>Request Invite</Button>
        </section>
        <section className='bg-neutral-light-grayish-blue px-10 py-[70px] text-center'>
          <h2 className='mx-auto max-w-[15ch] text-2xl text-primary-dark-blue'>
            Why choose Easybank?
          </h2>
          <p className='mt-6 text-xs text-neutral-grayish-blue'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className='mt-[62px] flex flex-col gap-9'>
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
        </section>
        <section className='bg-neutral-very-light-gray px-6 pb-[88px] pt-[94px]'>
          <h2 className='mx-auto max-w-[15ch] text-center text-2xl text-primary-dark-blue'>
            Latest Articles
          </h2>
          <div className='mt-[38px] space-y-6'>
            {articles.map((article, index) => (
              <Article key={article.title + index} {...article} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
