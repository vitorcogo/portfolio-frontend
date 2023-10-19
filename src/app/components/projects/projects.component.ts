import { Component } from '@angular/core';
import { Projects } from 'src/app/constants/projects';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = Projects;
  showTechnologies = false;
  showTechnologiesProjectId?: number;

  openProject(project: Project) {
    const projectLink = project.deployUrl ?? project.repositoryUrl;
    window.open(projectLink, '_blank');
  }

  changeShowTechnologies(index: number) {
    if (this.showTechnologiesProjectId === index) {
      this.showTechnologies = !this.showTechnologies;
      return;
    }
    
    this.showTechnologiesProjectId = index;
    this.showTechnologies = true;
  }
}
