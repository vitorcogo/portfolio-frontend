import { Component } from '@angular/core';
import { Experiences } from 'src/app/constants/experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent { 

  experiences = Experiences;
}
