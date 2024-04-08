import { Component } from '@angular/core';
import { TopNavComponent } from '../../../components/top-nav/top-nav.component';
import { BottomInfoComponent } from '../../../components/bottom-info/bottom-info.component';
import { CardYustiblogComponent } from '../../../components/card-yustiblog/card-yustiblog.component';

@Component({
  selector: 'app-yustiblog-page',
  standalone: true,
  imports: [
    TopNavComponent,
    BottomInfoComponent,
    CardYustiblogComponent
  ],
  templateUrl: './yustiblog-page.component.html',
  styleUrl: './yustiblog-page.component.css'
})
export class YustiblogPageComponent {
  
}
