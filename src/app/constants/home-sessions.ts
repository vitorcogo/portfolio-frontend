import { Session } from "../models/session.interface";
import { SessionsEnum } from "../models/sessions.enum";

export const HomeSessions: Session[] = [
  {
    title: 'SOBRE MIM',
    id: SessionsEnum.ABOUT,
    href: '#about',
    isActive: true
  },
  {
    title: 'HABILIDADES',
    id: SessionsEnum.SKILLS,
    href: '#skills',
    isActive: false
  },
  {
    title: 'EXPERIÊNCIA',
    id: SessionsEnum.EXPERIENCE,
    href: '#experience',
    isActive: false
  },
  {
    title: 'PROJETOS',
    id: SessionsEnum.PROJECTS,
    href: '#projects',
    isActive: false
  }
]