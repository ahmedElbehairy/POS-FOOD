import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';
import { CustomerInput, Option } from 'src/app/core/model/inputForm';
import { newProduct } from 'src/app/core/model/product';
import { CategoryService } from 'src/app/core/service/category.service';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  downloadURL!:string
  successMessage!:string
  errorMessage!:string
  inputForm: CustomerInput = {
    InputText: [
      {
        errorMessage: '',
        id: 'name',
        ng_model: '',
        placeHolder: 'Product Name ...',
        label: 'Product Name :',
      },
      {
        errorMessage: '',
        id: 'price',
        ng_model: '',
        placeHolder: 'Product Price ...',
        label: 'Product Price :',
      },
      {
        errorMessage: '',
        id: 'rate',
        ng_model: '',
        placeHolder: 'Rate ...',
        label: 'Rate :',
      },
      {
        errorMessage: '',
        id: 'id',
        ng_model: '',
        placeHolder: 'Product ID ...',
        label: 'Product ID :',
      },
      {
        errorMessage: '',
        id: 'quantity',
        ng_model: '',
        placeHolder: 'Product Quantity ...',
        label: 'Product Quantity :',
      },
    ],
    InputSelect: [
      {
        errorMessage: '',
        id: 'category',
        ng_model: 0,
        placeHolder: 'Category ...',
        label: 'Category : ',
        options: [
          
        ],
      },
    ],
  };
  constructor(private _product:ProductsService ,private _router:Router , private spinner: NgxSpinnerService , private storage: AngularFireStorage , private _category:CategoryService){}
  ngOnInit(): void {
    this.getAllCategory()
  }

  ProductForm: any = {}
  ngSubmit(prodForm:newProduct){
    prodForm = Object.assign(this.ProductForm, prodForm);
    prodForm.id = '1'
    this._product.addProducts(prodForm.id , prodForm).then(res => {
      this.successMessage = ` <p class="m-0 d-flex flex-column">
      <span class="text-main font-Bold-s20"> Welcome ! </span> 
      <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
        add your Product Success !!
      </span>
      </p>
    `
    setTimeout(() => {
      this.successMessage = '';
      this._router.navigate(['/Product'])
    }, 2000);
    }
  ).catch(
    err => 
      {
       this.errorMessage = `<p class="m-0 d-flex flex-column">
      <span class="text-main font-Bold-s20"> Welcome ! </span> 
      <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
        Sorry we have a little problem
      </span>
      </p>
    `
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000);
    })
    
  }
  dataOfDropdown(event: Option) {
    this.inputForm.InputSelect[0].options.map(el => {
      if(el.id == event.id){
        this.ProductForm[event.name] = el.name
      }
    })
  }
  getAllCategory(){
    this._category.getAllCategory().subscribe((res:any) => {
      this.inputForm.InputSelect[0].options = res
    })
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
            this.ProductForm['img'] = url            
            this.spinner.hide()
          });
        })
      ).subscribe();
    } else {
      this.spinner.hide()
    }
  }
  numberOnly(event: any, id: string, index: number): boolean {
    if (id !== 'price' && id !== 'id' && id !== 'quantity' && id !== 'rate') {
      return true;
    }
    if (id == 'id') {
      return false;
    }
    if(id == 'rate' && event.target.value < 5 && event.target.value > 0){
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
