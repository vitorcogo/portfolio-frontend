import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: MouseEvent) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const mouseXpercentage = Math.round(e.clientX / windowWidth * 100);
    const mouseYpercentage = Math.round(e.clientY / windowHeight * 100);
    
    const element = document.getElementById('radial-gradient');
    if (element) {
      element.setAttribute('style', `background: radial-gradient(
        circle at ${mouseXpercentage}% ${mouseYpercentage}%, 
        rgb(2, 0, 36) 0%, 
        rgb(60, 60, 60) 0%, 
        rgba(60, 60, 60, 0) 60rem
      );`);
    }
  }
}
