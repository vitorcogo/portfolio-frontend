import { Component } from '@angular/core';
import { HomeSessions } from '../../constants/home-sessions';
import { SessionsEnum } from '../../models/sessions.enum';
import { SocialLinksEnum } from '../../models/social-links.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  homeSessions = HomeSessions;
  socialLinks = SocialLinksEnum;

  setCurrentSession(id: SessionsEnum) {
    this.homeSessions.forEach(session => {
      session.isActive = session.id === id;
    })
  }
}
