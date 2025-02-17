'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 bg-white py-4 shadow shadow-neutral-200'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <Image src='/logo.svg' alt='Logo' width={150} height={50} />
        </Link>
        <div className='flex items-center gap-1'>
          <Button variant={'ghost'} asChild>
            <Link href={'/'}> Explore</Link>
          </Button>
          <Select>
            <SelectTrigger className='navbar_select gap-1 border-none shadow-none'>
              <SelectValue placeholder='Language' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='english'>English</SelectItem>
                <SelectItem value='français'>Français</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
