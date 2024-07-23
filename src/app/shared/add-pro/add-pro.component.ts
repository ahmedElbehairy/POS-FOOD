import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products.service';
import { Product } from 'src/app/store/Reducers/product.reducer';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrl: './add-pro.component.scss',
})
export class AddProComponent {
  @Input() idOfPro!: string;
  product!: Product;
  isLoding: boolean = false;
  amount:number = 0
  constructor(private _onePro: ProductsService) {}

  ngOnInit() {}

  getOnePro() {
    this._onePro.getOneProducts(this.idOfPro).subscribe((res:any) => {
      console.log(res);
      this.product = res
      this.isLoding = true
    });
  }
  addPro(id:string , amount:number){
    console.log(id , amount);
    
  }
  ngOnChanges(changes: any) {
    console.log(changes);
    if(!changes['idOfPro'].firstChange && changes['idOfPro'].currentValue !== undefined){
      this.getOnePro()
    }
  }
}
