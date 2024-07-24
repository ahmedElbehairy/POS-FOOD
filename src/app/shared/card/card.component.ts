import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/store/Reducers/product.reducer';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Product[];
  @Output() id = new EventEmitter<string>
  stars: any[] = [1, 2, 3, 4, 5];
  ngOnChanges(changes: any) {
    if (
      changes['card']?.firstChange == false &&
      changes['card']?.currentValue
    ) {
    }
  }
  ngOnInit(){
    // $('#add_Pro').modal('show');
  }
  sendId(id: string) {
    this.id.emit(id)
    $('#add_Pro').modal('show');
  }
}
