import Banner from '@/components/home/Banner';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner
        maintitle='Mot du CEO'
        title='Solidarity Week'
        date='Février 10-14, 2025'
        description='Chez Eiffage, nous croyons que la solidarité est un levier essentiel pour construire un monde plus durable et inclusif. C’est pourquoi nous sommes fiers de soutenir les Solidarity Weeks, une initiative qui mobilise nos collaborateurs à travers des actions concrètes au service de la société.'
        buttonText='En savoir plus'
        imageUrl='/images/bannerImg.png'
      />
      <ProjectShowcase />
    </>
  );
};

export default Home;
