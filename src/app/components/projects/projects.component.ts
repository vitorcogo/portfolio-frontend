import { Component } from '@angular/core';
import { Projects } from 'src/app/constants/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = Projects;
}
