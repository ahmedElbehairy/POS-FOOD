import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/store/Reducers/product.reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Product[];
  @Output() id = new EventEmitter<number>
  stars: any[] = [1, 2, 3, 4, 5];
  ngOnChanges(changes: any) {
    if (
      changes['card']?.firstChange == false &&
      changes['card']?.currentValue
    ) {
    }
  }
  sendId(id: number) {
    this.id.emit(id)
  }
}
