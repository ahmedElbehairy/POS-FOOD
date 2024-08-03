import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SendPro } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';
import { Product } from 'src/app/store/Reducers/product.reducer';
declare var $: any;

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrl: './add-pro.component.scss',
})
export class AddProComponent {
  @Input() idOfPro!: string;
  @Output() prod = new EventEmitter<SendPro>
  product!: Product;
  isLoding: boolean = false;
  amount:number = 0
  TotlePrice:number = 0
  constructor(private _onePro: ProductsService) {}

  ngOnInit() {}

  getOnePro() {
    this._onePro.getOneProducts(this.idOfPro).subscribe((res:any) => {
      this.product = res
      this.TotlePrice = this.product.price
      this.isLoding = true
    },err => {
      console.log(err);
    });
  }
  addPro(id:string , amount:number){
    if(id == 'add' && this.amount >= 0 ){
      this.amount = this.amount + amount 
      this.TotlePrice =  this.amount*this.product.price
      this.product.quantity = this.product.quantity - amount
    }else if (id == 'minus' && this.amount > 1 ){
      this.amount = this.amount - amount
      this.TotlePrice =  this.amount*this.product.price
      this.product.quantity = this.product.quantity + amount
    }
  }
  ngOnChanges(changes: any) {
    if(!changes['idOfPro'].firstChange && changes['idOfPro'].currentValue !== undefined){
      this.getOnePro()
    }
  }
  sendPro(item:Product){
    const pro:SendPro = {
      name:item.name , totalPrice:this.TotlePrice ,img:item.img , amount:this.amount , price:item.price , quantity:item.quantity , id:item.id
    }
    this.prod.emit(pro)
    $('#add_Pro').modal('hide');
  }
}
