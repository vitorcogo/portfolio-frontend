import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/constants/skills';
import { Skill } from 'src/app/models/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private readonly MAIN_SKILLS_QTY = 10;

  selectedSkill!: Skill
  skills = this.mainSkills;
  showAllSkills = false;

  ngOnInit() {
    this.selectSkill(this.skills[0]);
  }

  selectSkill(skill: Skill) {
    this.selectedSkill = skill;
  }

  changeShowAllSkills() {
    this.showAllSkills = !this.showAllSkills;

    this.skills = !this.showAllSkills ? this.mainSkills : Skills;
  }

  private get mainSkills(): Skill[] {
    return Skills.slice(0, this.MAIN_SKILLS_QTY);
  }
}
