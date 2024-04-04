import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopNavComponent,
    BottomInfoComponent,
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exoAngular';
}
