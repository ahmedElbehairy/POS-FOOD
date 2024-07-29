import { Component, Input } from '@angular/core';
import { N_D_Customer, NewOrder } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';
declare var $: any;

@Component({
  selector: 'app-print-order',
  templateUrl: './print-order.component.html',
  styleUrl: './print-order.component.scss',
})
export class PrintOrderComponent {
  @Input() order!: NewOrder;
  @Input() customer!:N_D_Customer;
  date = new Date();
  constructor( private _order:ProductsService) {}
  ngOnChanges(changes: any) {}
  PrintOrder() {
      $('#make_order').modal('hide');
  }
}
