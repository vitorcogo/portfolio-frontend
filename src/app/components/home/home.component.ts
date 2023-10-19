import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { HomeSessions } from 'src/app/constants/home-sessions';
import { SessionsEnum } from 'src/app/models/sessions.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChildren('session') sessionElements!: QueryList<ElementRef<Element>>;

  sessions = HomeSessions;
  sessionsEnum = SessionsEnum;

  detectedSessionsEmitter: Subject<Element[]> = new Subject<Element[]>();
  detectedSessions: Element[] = [];
  lastScrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.detectedSessions = [];
    const scrollPosition = document.documentElement.scrollTop;
    
    const elements = scrollPosition < this.lastScrollPosition 
      ? [...this.sessionElements].reverse() 
      : this.sessionElements;

    elements.forEach((element) => {
      const { nativeElement } = element;

      if (this.isInViewport(nativeElement)) {
        this.detectedSessions.push(nativeElement);
      }
    });
    this.lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    this.emitDetectedSessions();
  }
  
  private emitDetectedSessions() {
    this.detectedSessionsEmitter.next(this.detectedSessions);
  }

  private isInViewport(nativeElement: Element): boolean {
    const { top, bottom } = nativeElement.getBoundingClientRect();
    const { innerHeight } = window;

    const isTopInViewport = top > 0 && top < innerHeight;
    const isBottomInViewport = bottom > 0 && bottom < innerHeight;

    return isTopInViewport || isBottomInViewport;
  }
}
