import { Project } from "../models/project.interface";

export const Projects: Project[] = [
  {
    title: 'Portfólio',
    description: 'Portfólio com foco na minha experiência como desenvolvedor Front-End. Desenvolvido com Angular 16.',
    imgUrl: './../../assets/protfolio_frontend.jpg',
    technologies: ['Angular 16', 'SCSS', 'Git', 'Typescript', 'RxJs'],
    repositoryUrl: 'https://github.com/vitorcogo/portfolio-frontend'
  },
  {
    title: 'Vittorio Veneto',
    description: 'Projeto desenvolvido para a amostra de coleções de uma marca de roupas. Desenvolvido com Angular 11.',
    imgUrl: './../../assets/vittorio_veneto_home.jpeg',
    technologies: ['Angular 11', 'SCSS', 'Git', 'Typescript', 'RxJs', 'Node.js'],
    repositoryUrl: 'https://github.com/vitorcogo/vittorio-veneto-front'
  }
]