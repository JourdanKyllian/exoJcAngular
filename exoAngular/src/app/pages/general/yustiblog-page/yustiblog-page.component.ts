import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TopNavComponent } from '../../../components/top-nav/top-nav.component';
import { BottomInfoComponent } from '../../../components/bottom-info/bottom-info.component';

@Component({
  selector: 'app-yustiblog-page',
  standalone: true,
  imports: [
    DatePipe,
    TopNavComponent,
    BottomInfoComponent
  ],
  templateUrl: './yustiblog-page.component.html',
  styleUrl: './yustiblog-page.component.css'
})
export class YustiblogPageComponent {
  public dateFr: number = Date.now()
}
