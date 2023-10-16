import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class ComponentsModule { }
