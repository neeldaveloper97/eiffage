'use client';

import { useRouter } from 'next/navigation';
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

interface ProjectCardProps {
  id: string; // Add id to dynamically navigate
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  duration: string;
  peopleRequired: string;
  mainImage: string;
  iconImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id, // Get id prop
  title,
  description,
  category,
  location,
  date,
  duration,
  peopleRequired,
  mainImage,
  iconImage
}) => {
  const router = useRouter();

  return (
    <div className='rounded-lg bg-white p-3 shadow-md'>
      {/* Image Section */}
      <div className='relative'>
        <img
          className='h-44 w-full rounded-lg object-cover'
          src={mainImage}
          alt={title}
        />
        <img
          className='absolute right-3 top-3 size-11 rounded-lg object-cover'
          src={iconImage}
          alt='Project Icon'
        />
      </div>

      {/* Content Section */}
      <div className='p-3'>
        <p className='w-fit rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs'>
          {category}
        </p>
        <h5 className='pt-2 text-xl font-medium leading-normal text-zinc-950'>
          {title}
        </h5>
        <p className='text-sm text-gray-600'>{description}</p>

        {/* Details List */}
        <ul className='grid gap-2 pt-4 text-sm text-gray-700'>
          <li className='flex items-center gap-1.5'>
            <MapPin size={16} /> {location}
          </li>
          <li className='flex items-center gap-1.5'>
            <CalendarDays size={16} /> {date}
          </li>
          <li className='flex items-center gap-1.5'>
            <Clock size={16} /> {duration}
          </li>
          <li className='flex items-center gap-1.5'>
            <Users size={16} /> {peopleRequired}
          </li>
        </ul>

        {/* Action Button */}
        <Button
          className='mt-4 w-full bg-zinc-900 py-2.5 text-white hover:bg-zinc-600'
          onClick={() => router.push(`/projects/${id}`)}
        >
          Voir le projet
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
