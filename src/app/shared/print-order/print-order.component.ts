import { Component, Input } from '@angular/core';
import { NewOrder } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';
declare var $: any;

@Component({
  selector: 'app-print-order',
  templateUrl: './print-order.component.html',
  styleUrl: './print-order.component.scss',
})
export class PrintOrderComponent {
  @Input() order!: NewOrder;
  isLoding:boolean = false
  date = new Date();
  constructor( private _order:ProductsService) {}
  ngOnChanges(changes: any) {
    if (
      !changes['order']?.firstChange &&
      changes['order']?.currentValue !== undefined
    ) {
      console.log(changes);
      this.isLoding = true
    }
  }
  PrintOrder() {
    this._order
      .makeOrder(this.order.idOfOrder, this.order)
      .then((res) => {
        console.log(res);
        $('#make_order').modal('hide');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
