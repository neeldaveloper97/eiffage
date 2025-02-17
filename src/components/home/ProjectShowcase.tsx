import React from 'react';
import { Input } from '../ui/input';
import { ListFilter, MapPinned, RefreshCcw, Search } from 'lucide-react';
import { Button } from '../ui/button';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Recherchons spécialistes pour divers domaines',
    description:
      'Nous recherchons des spécialistes pour divers domaines tels que la teinture, la pose de clinker et le vide-grenier.',
    category: 'Pauvreté',
    location: 'Minderbroedersstraat 17, 3500 Hasselt',
    date: '10/02/2025',
    duration: 'Activité journée complète',
    peopleRequired: '5 personnes',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 2,
    title: 'Bénévoles pour distribution alimentaire',
    description:
      'Nous avons besoin de bénévoles pour aider à la distribution alimentaire aux sans-abris.',
    category: 'Aide Sociale',
    location: 'Rue de la Paix, 75000 Paris',
    date: '15/03/2025',
    duration: 'Matinée seulement',
    peopleRequired: '10 personnes',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 3,
    title: 'Collecte de vêtements pour les réfugiés',
    description:
      'Participez à la collecte et à la distribution de vêtements pour les réfugiés dans le besoin.',
    category: 'Solidarité',
    location: 'Avenue des Nations, Bruxelles',
    date: '05/04/2025',
    duration: 'Après-midi',
    peopleRequired: '8 personnes',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 4,
    title: "Cours gratuits d'informatique",
    description:
      "Rejoignez-nous pour enseigner l'informatique de base aux seniors.",
    category: 'Éducation',
    location: 'Centre Communautaire, Lyon',
    date: '20/02/2025',
    duration: '2 heures',
    peopleRequired: '4 formateurs',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 5,
    title: 'Nettoyage des plages',
    description:
      "Aidez-nous à nettoyer les plages locales pour protéger l'environnement.",
    category: 'Environnement',
    location: 'Plage de Nice',
    date: '12/06/2025',
    duration: 'Toute la journée',
    peopleRequired: '15 volontaires',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 6,
    title: 'Aide aux personnes âgées',
    description:
      'Visitez des maisons de retraite pour passer du temps avec les résidents et les aider dans leurs tâches quotidiennes.',
    category: 'Bien-être',
    location: 'Maison de retraite, Marseille',
    date: '07/07/2025',
    duration: '3 heures',
    peopleRequired: '6 bénévoles',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 7,
    title: 'Soutien scolaire pour enfants défavorisés',
    description:
      'Donnez des cours particuliers aux enfants en difficulté scolaire.',
    category: 'Éducation',
    location: 'École primaire, Toulouse',
    date: '28/08/2025',
    duration: '1 heure par semaine',
    peopleRequired: '3 enseignants',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 8,
    title: "Construction d'abris pour animaux",
    description:
      'Rejoignez notre équipe pour construire des abris pour les animaux errants.',
    category: 'Animalerie',
    location: 'Refuge, Bordeaux',
    date: '15/09/2025',
    duration: 'Journée complète',
    peopleRequired: '12 personnes',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 9,
    title: "Création d'un potager urbain",
    description:
      "Aidez à créer un potager pour sensibiliser à l'alimentation durable.",
    category: 'Écologie',
    location: 'Parc Municipal, Lille',
    date: '02/10/2025',
    duration: 'Matinée',
    peopleRequired: '5 jardiniers',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  },
  {
    id: 10,
    title: "Organisation d'un événement caritatif",
    description:
      'Aidez-nous à organiser un gala de charité pour récolter des fonds.',
    category: 'Humanitaire',
    location: 'Salle des fêtes, Strasbourg',
    date: '20/11/2025',
    duration: 'Soirée',
    peopleRequired: '20 bénévoles',
    mainImage: '/images/png/cardImage.png',
    iconImage: '/images/jpg/cardIcon.jpg'
  }
];

const ProjectShowcase = () => {
  return (
    <section className='pb-12'>
      <div className='container'>
        <div className='flex items-center justify-between py-4'>
          <div>
            <h3 className='text-xl font-semibold text-custom-neutral'>
              Les projets soutenus par Eiffage
            </h3>
            <p className='text-sm text-zinc-500'>Lorem ipsum sic doloret</p>
          </div>
          <div className='flex items-center gap-3'>
            <Input
              type='text'
              className='bg-white'
              placeholder='Search'
              icon={<Search size={16} />}
            />
            <Button className='gap-2 bg-white'>
              <ListFilter size={16} />
              Filter
            </Button>
            <Button className='gap-2 bg-white'>
              <MapPinned size={16} />
              Carte
            </Button>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                id={String(project.id)}
              />
            ))}
          </div>
          <div className='flex items-center justify-center pt-6'>
            <Button className='bg-zinc-200 py-2.5 shadow-none'>
              <RefreshCcw size={16} /> Charger plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
