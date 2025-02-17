import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className='pb-6 pt-9'>
      <div className='container'>
        <div className='flex flex-col items-end justify-between gap-10 overflow-hidden rounded-xl bg-custom-neutral pe-0 shadow-custom-shadow xl:flex-row'>
          <div className='p-16 xl:pr-0'>
            <div className='w-full max-w-full xl:max-w-[512px]'>
              <p className='text-base font-semibold text-neutral-50 opacity-[0.8]'>
                Mot du CEO
              </p>
              <h1 className='pt-5 text-4xl font-bold leading-10 text-neutral-50'>
                Solidarity Week
              </h1>
              <p className='pt-2.5 text-2xl font-bold leading-none text-neutral-50'>
                Februari - Février 10-14-2025
              </p>
              <p className='pt-9 text-lg font-light leading-7 text-neutral-50 opacity-[0.8]'>
                Chez Eiffage, nous croyons que la solidarité est un levier
                essentiel pour construire un monde plus durable et inclusif.
                C’est pourquoi nous sommes fiers de soutenir les Solidarity
                Weeks, une initiative qui mobilise nos collaborateurs à travers
                des actions concrètes au service de la société.
              </p>
              <Button
                className='mt-6 bg-white shadow-none'
                variant={'secondary'}
              >
                En savoir plus
              </Button>
            </div>
          </div>
          <div className='w-full max-w-full overflow-hidden rounded-tl-lg xl:max-w-[612px]'>
            <Image
              src={'/images/bannerImg.png'}
              alt='People Hugging'
              className='h-full min-h-[436px] w-full object-cover'
              width={612}
              height={436}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
