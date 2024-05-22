import { Component, Input } from '@angular/core';
import { iUserDati } from '../../models/user/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() postData: iUserDati | null = null;
}
