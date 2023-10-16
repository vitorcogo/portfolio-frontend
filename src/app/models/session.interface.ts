import { SessionsEnum } from "./sessions.enum";

export interface Session {
  title: string;
  id: SessionsEnum;
  href: string;
  isActive: boolean;
}