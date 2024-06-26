import { Component } from '@angular/core';
import { TopNavComponent } from '../../../components/top-nav/top-nav.component';
import { BottomInfoComponent } from '../../../components/bottom-info/bottom-info.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TopNavComponent,
    BottomInfoComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
}
