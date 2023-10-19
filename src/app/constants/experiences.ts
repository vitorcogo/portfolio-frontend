import { ExperienceLinks } from "../models/experience-links.enum";
import { Experience } from "../models/experience.interface";

export const Experiences: Experience[] = [
  {
    companyName: 'ViaHub',
    companyUrl: ExperienceLinks.VIAHUB,
    startDate: 'AGO 2022',
    endDate: 'ATUALMENTE',
    position: 'Front-End Software Engineer',
    description: 'Seteor de tecnologia do Grupo Casas Bahia. Desenvolvimento de melhorias, componentes e novas interfaces para o sistema. Atuando em projetos utilizando micro front-ends, e também no desenvolvimento de bibliotecas.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Jest', 'Micro Frontend'
    ]
  },
  {
    companyName: 'Skeel',
    companyUrl: ExperienceLinks.SKEEL,
    startDate: 'NOV 2021',
    endDate: 'AGO 2022',
    position: 'Desenvolvedor Front-End',
    description: 'Plataforma de recrutamento e seleção para processos seletivos. Atuei no desenvolvimento e criação de projetos front end dentro da empresa, desenvolvendo novas interfaces e funcionalidades para o sistema. Além de ter atuado também em projetos back end.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Bootstrap', 'JavaScript', 'C#', 'MongoDB'
    ]
  },
  {
    companyName: 'SIGE Cloud',
    companyUrl: ExperienceLinks.SIGE,
    startDate: 'SET 2020',
    endDate: 'OUT 2021',
    position: 'Desenvolvedor FullStack',
    description: 'Sistema de gestão online. Atuei no desenvolvimento front end de interfaces e na criação de novas APIs para o funcionamento do sistema. Desenvolvendo principalmente novas integrações com ECommerces e sistemas de logística para o produto.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Bootstrap', 'JavaScript', 'JQuery', 'AngularJS', 'C#', 'MongoDB', 'ASP.NET'
    ]
  }
]