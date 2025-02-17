'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Hand, Share2, Undo2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const pathname = usePathname();

  const projectInfo = {
    title: 'Information',
    category: 'Pauvreté',
    details: {
      'Nombre participants requis': '8',
      Date: '10/02/2025',
      'Temps début-fin': '08:00-17:00',
      Lieux: 'Minderbroedersstraat 17, 3500 Hasselt',
      'Structure du jour': 'Activité journée complète',
      "Langue de l'activité": 'néerlandais',
      'Transport public': 'Oui',
      Parking: 'Parking gratuit dans la cour du monastère',
      'À prévoir': 'Vêtements pour le bricolage, nettoyage et peinture',
      'Lunch compris': 'Oui',
      Assurance: 'Assurance employeur',
      "Type d'activité": 'On site - Manuel'
    },
    tags: ['Intérieur', 'Physique', 'Social']
  };

  return (
    <div className='container mx-auto py-9'>
      <div className='flex flex-col items-start justify-center gap-6 md:flex-row'>
        <div className='w-full max-w-3xl md:px-6'>
          <div className='space-y-8'>
            <h1 className='text-3xl font-bold leading-none md:text-5xl'>
              Recherchons spécialistes pour divers domaines: teinturiers,
              poseurs de clinker, vide-greniers….
            </h1>
            <div className='flex items-center gap-4'>
              <Image
                src={'/images/jpg/cardIcon.jpg'}
                width={40}
                height={40}
                alt='Author Image'
                className='rounded-md'
              />

              <div className='w-4/5 md:w-full'>
                <p>De Brug</p>
                <Link
                  href={'/'}
                  className='w-full text-wrap break-words text-zinc-500'
                >
                  https://sites.google.com/site/debrughasseltvzw/wat-doen-we
                </Link>
              </div>
            </div>
            <Image
              src={'/images/png/projectImg.png'}
              alt='Project Image'
              width={720}
              height={672}
            />
          </div>
          <div className='space-y-6 pt-9 text-zinc-900'>
            <h5 className='text-2xl font-semibold leading-8 tracking-tight'>
              Decription :
            </h5>
            <ul className='list-inside list-disc leading-7'>
              <li>
                Ponçage et peinture des portes et cadres de notre hall, cuisine
                et toilettes
              </li>
              <li>
                Poncer 24 chaises en bois dans la petite pièce et appliquer à
                nouveau une couche de brillant
              </li>
              <li>
                Peindre les tables de notre salle avec un nouveau revêtement
              </li>
              <li>
                Installer un couvercle d'égout dans notre stationnement et
                niveler les pavés autour du couvercle
              </li>
              <li>
                Remettre également en ordre un couvercle d'égout et les pavés
                autour du monastère
              </li>
              <li>Dégagement des combles (monastère)</li>
              <li>Varia, toujours</li>
              <li>
                Confirmant qu'il y aura suffisamment de travail pour tout le
                monde et que les participants seront positivement épuisés !
              </li>
              <li>Belle journée de bénévolat avec pas mal de variété</li>
            </ul>
            <h5 className='text-2xl font-semibold leading-8 tracking-tight'>
              Objectifs de l'organisation:
            </h5>
            <p className='leading-7'>
              Chaque semaine le samedi, l'asbl De Brug Hasselt organise une
              réunion dans la salle Ludovicus de la Heilig Paterke dans la
              Minderbroederstraat. Nous venons en aide aux pauvres de la région.
              A partir de 10h, les gens peuvent venir chez nous pour une tasse
              de café. Entre 11h30 et 13h00, les bénéficiaires sont les
              bienvenus pour venir manger un repas à trois plats pour environ
              4,50 €. Le groupe Crea est une activité très prisée. Au cours de
              cette réunion, ils ont l'opportunité de faire de l'artisanat, des
              cartes, des tricots et du crochet. Grâce à l'OCMW nous avons eu
              l'opportunité de nous installer dans l'Oude Luikerbaan, où sont
              nos bureaux et la salle informatique.
            </p>
          </div>
          <Link href={'/home'}>
            <Button className='mt-6'>
              <Undo2 size={16} />
              Retour aux projets
            </Button>
          </Link>
        </div>
        <div className='w-full max-w-full overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm md:max-w-80'>
          <div className='space-y-3 p-6'>
            <div className='flex items-center'>
              <h6 className='flex-1 text-lg font-semibold text-zinc-900'>
                {projectInfo.title}
              </h6>
              <p className='rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold'>
                {projectInfo.category}
              </p>
            </div>
            <ul className='mt-4 space-y-3'>
              {Object.entries(projectInfo.details).map(
                ([key, value], index) => (
                  <li key={index} className='flex items-start justify-between'>
                    <span className='flex-1 text-sm text-zinc-500'>{key}:</span>{' '}
                    <span className='flex-1 text-right text-sm'>{value}</span>
                  </li>
                )
              )}
            </ul>
            <div className='mt-4 flex gap-2 py-2.5'>
              {projectInfo.tags.map((tag, index) => (
                <span
                  key={index}
                  className='rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold'
                >
                  {tag}
                </span>
              ))}
            </div>
            <hr />
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='border-none'>
                  Contact
                </AccordionTrigger>
                <AccordionContent className='leading-5 text-zinc-500'>
                  <p className='leading-5'>Johnny Cypers</p>
                  <p className='leading-5'>011 / 74.07.59</p>
                  <p className='leading-5'>0474/62.76.40</p>
                  <p className='leading-5'>
                    <Link href={'mailto:de.brug.hasselt@telenet.be'}>
                      de.brug.hasselt@telenet.be
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2' className='border-0'>
                <AccordionTrigger className='border-none'>
                  Info supplémentaire
                </AccordionTrigger>
                <AccordionContent className='leading-5 text-zinc-500'>
                  <p className='leading-5'>Agenda</p>
                  <ul>
                    <li>08:00 Accueil & café</li>
                    <li>09:00 Début des activités</li>
                    <li>12:00 Déjeuner</li>
                    <li>13:00 Reprise des activités</li>
                    <li>17:00 Fin & Débriefing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className='space-y-3 pt-3'>
              <Button className='w-full' variant={'dark'}>
                <Hand size={16} /> Participer
              </Button>
              <Button className='w-full' variant={'dark'}>
                <Share2 size={16} /> Proposer à ses collègues
              </Button>
            </div>
          </div>
          <div className='bg-zinc-100 p-3'>
            <p className='text-center text-sm text-zinc-500'>
              Updated November 23, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
