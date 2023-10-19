import { Component, Input, OnInit } from '@angular/core';
import { HomeSessions } from '../../constants/home-sessions';
import { SessionsEnum } from '../../models/sessions.enum';
import { SocialLinksEnum } from '../../models/social-links.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() detectedSessions!: Observable<Element[]>;

  homeSessions = HomeSessions;  
  socialLinks = SocialLinksEnum;

  ignoreScrollEvent = false;

  ngOnInit() {
    this.detectedSessions.subscribe((elements) => {
      if (!this.ignoreScrollEvent) {
        elements.forEach(element => {
          this.setCurrentSession(element.id as SessionsEnum);
        });
      }
    });
  }

  setCurrentSession(id: SessionsEnum, ignoreScroll?: boolean) {
    if (ignoreScroll) {
      this.ignoreScrollEvent = true;
      setTimeout(() => this.ignoreScrollEvent = false, 500);
    }

    this.homeSessions.forEach(session => {
      session.isActive = session.id === id;
    });
  }
}
