import { Component } from '@angular/core';
import { ExperienceLinks } from 'src/app/models/experience-links.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  experienceLinks = ExperienceLinks;

}
