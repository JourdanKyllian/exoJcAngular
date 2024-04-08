import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-yustiblog',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './card-yustiblog.component.html',
  styleUrl: './card-yustiblog.component.css'
})
export class CardYustiblogComponent {
  public dateFr: number = Date.now()
}
