import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';
import { CustomerInput, Option } from 'src/app/core/model/inputForm';
import { newProduct } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  downloadURL!:string
  inputForm: CustomerInput = {
    InputText: [
      {
        errorMessage: '',
        id: 'Product_Name',
        ng_model: '',
        placeHolder: 'Product Name ...',
        label: 'Product Name :',
      },
      {
        errorMessage: '',
        id: 'Product_Price',
        ng_model: '',
        placeHolder: 'Product Price ...',
        label: 'Product Price :',
      },
      {
        errorMessage: '',
        id: 'Rate',
        ng_model: '',
        placeHolder: 'Rate ...',
        label: 'Rate :',
      },
      {
        errorMessage: '',
        id: 'Id_Product',
        ng_model: '',
        placeHolder: 'Product ID ...',
        label: 'Product ID :',
      },
      {
        errorMessage: '',
        id: 'Product_Quantity',
        ng_model: '',
        placeHolder: 'Product Quantity ...',
        label: 'Product Quantity :',
      },
    ],
    InputSelect: [
      {
        errorMessage: '',
        id: 'Category',
        ng_model: 0,
        placeHolder: 'Category ...',
        label: 'Category : ',
        options: [
          { name: 'sdf', id: 1 },
          { name: 'maasdfn', id: 2 },
        ],
      },
    ],
  };
  constructor(private _product:ProductsService , private spinner: NgxSpinnerService , private storage: AngularFireStorage){}
  ProductForm: any = {}
  ngSubmit(prodForm:newProduct){
    prodForm = Object.assign(this.ProductForm, prodForm);
    console.log(prodForm);
    
  }
  dataOfDropdown(event: Option) {
    this.ProductForm[event.name] = event.id;
  }

  sendPhoto(event: any) {
    this.spinner.show()
    let file = event.target.files[0];
    if (file) {
      const filePath = `images/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;
            this.ProductForm['img'] = this.downloadURL
            this.spinner.hide()
          });
        })
      ).subscribe();
    } else {
      this.spinner.hide()
    }
  }
  numberOnly(event: any, id: string, index: number): boolean {
    if (id !== 'Product_Price' && id !== 'Id_Product' && id !== 'Product_Quantity' && id !== 'Rate') {
      return true;
    }
    if (id == 'Id_Product') {
      return false;
    }
    console.log(id == 'Rate' && 6 < 5 && 6 > 0);
    if(id == 'Rate' && event.target.value < 5 && event.target.value > 0){
      this.inputForm.InputText[index].errorMessage =
        'You must enter a number bigger than 0 and less than 5';
      return false
    }
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode == 43 || charCode == 36 || charCode == 46) {
      return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.inputForm.InputText[index].errorMessage =
        'You must enter a unique number and its language is English';
      return false;
    }
    this.inputForm.InputText[index].errorMessage = '';
    return true;
  }
}
