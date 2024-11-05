import { Project } from "../models/project.interface";

export const Projects: Project[] = [
  {
    title: 'Perfil Spotify',
    description: 'Aplicação que permite visualizar informações detalhadas sobre sua conta do Spotify, incluindo suas músicas e artistas mais ouvidos, além das músicas recentemente ouvidas. A interface foi projetada para proporcionar uma forma simples e intuitiva de explorar esses dados, destacando as preferências musicais de forma clara e acessível.',
    imgUrl: './../../assets/spotify_profile.jpg',
    repositoryUrl: 'https://github.com/vitorcogo/spotify-profile',
    deployUrl: 'https://spotify-profile-vitorcogos-projects.vercel.app/',
    technologies: ['Angular 17', 'SCSS', 'Git', 'Typesscript', 'RxJs', 'Figma', 'Spotify API']
  },
  {
    title: 'Portfólio',
    description: 'Portfólio com foco na minha experiência como desenvolvedor Front-End. Desenvolvido com Angular 16.',
    imgUrl: './../../assets/protfolio_frontend.jpg',
    technologies: ['Angular 16', 'SCSS', 'Git', 'Typescript', 'RxJs', 'Figma'],
    repositoryUrl: 'https://github.com/vitorcogo/portfolio-frontend',
    deployUrl: 'https://vitorcogo.com/'
  },
  {
    title: 'Vittorio Veneto',
    description: 'Projeto desenvolvido para a amostra de coleções de uma marca de roupas. Desenvolvido com Angular 11.',
    imgUrl: './../../assets/vittorio_veneto_home.jpeg',
    technologies: ['Angular 11', 'SCSS', 'Git', 'Typescript', 'RxJs', 'Node.js'],
    repositoryUrl: 'https://github.com/vitorcogo/vittorio-veneto-front'
  },
]