import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  darkTheme: boolean;

  constructor() {
    this.activateDarkTheme();
    
  }

  activateDarkTheme() {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkTheme = prefersDarkTheme.matches;
    if (this.darkTheme) 
      document.body.classList.toggle('dark');
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark');
  }


}
