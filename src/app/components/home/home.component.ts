import { Component } from '@angular/core';
import { HomeSessions } from 'src/app/constants/home-sessions';
import { SessionsEnum } from 'src/app/models/sessions.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sessions = HomeSessions;
  sessionsEnum = SessionsEnum;
}
