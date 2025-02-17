import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white py-24'>
      <div className='container'>
        <div className='space-y-16 px-6'>
          <div className='flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center'>
            <Link href={'/'}>
              <Image
                src={'/images/svg/footerLogo.svg'}
                alt='Footer Logo'
                width={40}
                height={40}
              />
            </Link>

            <ul className='flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  FAQ
                </Link>
              </li>
            </ul>

            <ul className='flex items-center gap-8'>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  <Image
                    src={'/images/svg/Social Media Icon.svg'}
                    alt='Facebook Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  <Image
                    src={'/images/svg/Social Media Icon-1.svg'}
                    alt='Instagram Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  <Image
                    src={'/images/svg/Social Media Icon-2.svg'}
                    alt='Twitter(X) Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  <Image
                    src={'/images/svg/Social Media Icon-3.svg'}
                    alt='Youtube Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  <Image
                    src={'/images/svg/Social Media Icon-4.svg'}
                    alt='Whatsapp Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className='flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
            <p className='text-zinc-500'>
              Copyright {new Date().getFullYear()}
            </p>
            <ul className='flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className='text-zinc-500 hover:text-zinc-900'
                  href={'/home'}
                >
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
