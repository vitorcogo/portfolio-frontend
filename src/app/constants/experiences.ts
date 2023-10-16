import { Experience } from "../models/experience.interface";

export const Experiences: Experience[] = [
  {
    companyName: 'ViaHub',
    companyUrl: 'https://www.viahub.com.br/',
    startDate: 'AGO 2022',
    endDate: 'ATUALMENTE',
    position: 'Front-End Software Engineer',
    description: 'Desenvolvimento de melhorias, componentes e novas interfaces para o sistema. Atuando em projetos utilizando micro front-ends, e também no desenvolvimento de bibliotecas.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Jest', 'Micro Frontend'
    ]
  },
  {
    companyName: 'Skeel',
    companyUrl: 'https://skeel.com.br/',
    startDate: 'NOV 2021',
    endDate: 'AGO 2022',
    position: 'Desenvolvedor Front-End',
    description: 'Desenvolvimento de melhorias e correções do sistema. Utilizando o framework Angular (2+) com typescript para o Front-end e javascript puro em alguns casos, e contribuindo no desenvolvimento em aplicação .NET com C#, também utilizando MongoDB para consultas e operações no banco de dados.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Bootstrap', 'JavaScript', 'C#', 'MongoDB'
    ]
  },
  {
    companyName: 'SIGE Cloud',
    companyUrl: 'https://www.sigecloud.com.br/',
    startDate: 'SET 2020',
    endDate: 'OUT 2021',
    position: 'Desenvolvedor FullStack',
    description: 'Implementação de melhorias e correções no sistema, atuando principalmente no desenvolvimento e manutenção a novas integrações. Utilizando Angular (2+)/AngularJS no front-end e JQuery em alguns casos, e C# no back-end, também utilizando MongoDB para consultas e operações no banco de dados.',
    skills: [
      'Angular', 'TypeScript', 'RxJS' , 'GitFlow', 'Bootstrap', 'JavaScript', 'JQuery', 'AngularJS', 'C#', 'MongoDB', 'ASP.NET'
    ]
  }
]