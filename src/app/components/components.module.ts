import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ],
  providers: [],
})
export class ComponentsModule { }
