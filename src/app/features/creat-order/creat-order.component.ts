import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInput, Option } from 'src/app/core/model/inputForm';
import {
  N_D_Customer,
  newCustomer,
  NewOrder,
} from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';
import { UsersService } from 'src/app/core/service/users.service';
declare var $: any;

@Component({
  selector: 'app-creat-order',
  templateUrl: './creat-order.component.html',
  styleUrl: './creat-order.component.scss',
})
export class CreatOrderComponent {
  inputForm: CustomerInput = {
    InputText: [
      {
        errorMessage: '',
        id: 'Name_Customer',
        ng_model: '',
        placeHolder: 'Name Customer ...',
        label: 'Name Customer :',
      },
      {
        errorMessage: '',
        id: 'Phone_Customer',
        ng_model: '',
        placeHolder: 'Phone Number ...',
        label: 'Phone Number :',
      },
      {
        errorMessage: '',
        id: 'Email_Customer',
        ng_model: '',
        placeHolder: 'Email Address ...',
        label: 'Email Address :',
      },
      {
        errorMessage: '',
        id: 'Id_Customer',
        ng_model: '',
        placeHolder: 'Customer ID ...',
        label: 'Customer ID :',
      },
    ],
    InputSelect: [
      {
        errorMessage: '',
        id: 'Gender_Customer',
        ng_model: 0,
        placeHolder: 'Gender ...',
        label: 'Gender :',
        options: [
          { name: 'Female', id: 1 },
          { name: 'man', id: 2 },
        ],
      },
      {
        errorMessage: '',
        id: 'City_Customer',
        ng_model: 0,
        placeHolder: 'City ...',
        label: 'City :',
        options: [
          { name: 'Cairo', id: 1 },
          { name: 'Alexandria', id: 2 },
          { name: 'Giza', id: 3 },
          { name: 'Shubra El Kheima', id: 4 },
        ],
      },
    ],
  };
  order!: NewOrder;
  errorMessage!: string;
  successMessage!: string;
  indexChanged!: number;
  constructor(
    private _router: ActivatedRoute,
    private _Router: Router,
    private _order: ProductsService,
    private _customer: UsersService,
    private _Spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.getOneOrders();
    this.getCoustomers();
  }
  getCoustomers() {
    this._customer.getCoustomers().subscribe(
      (res) => {
        let id = res.length + 1;
        this.inputForm.InputText.map((el) => {
          el.id == 'Id_Customer' ? (el.ng_model = id.toString()) : '';
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneOrders() {
    let id: any = this._router?.snapshot?.params['id'];
    id = id.toString();
    this._Spinner.show();
    this._order.getOneOrders(id).subscribe(
      (res: any) => {
        this.order = res;
        this._Spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  dataOfDropdown(event: Option) {
    this.CustomerForm[event.name] = event.id;
    console.log(this.CustomerForm);
  }
  CustomerForm: any = {};
  ngSubmit(Customer: newCustomer) {
    Customer = Object.assign(this.CustomerForm, Customer);
    if (
      !document.getElementById('update')?.click ||
      document.getElementById('update') == null
    ) {
      this._customer
        .creatNewCoustomer(Customer.Id_Customer.toString(), Customer)
        .then((res) => {
          this.successMessage = `<p class="m-0 d-flex flex-column">
          <span class="text-main font-Bold-s20"> Welcome ! </span> 
          <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            MR: ${Customer.Name_Customer} ,
            thanks for make order from our restaurant
          </span>
          </p>
        `;
          setTimeout(() => {
            this._Router.navigate(['/Home']);
            this.successMessage = '';
          }, 2000);
        })
        .catch((err) => {
          this.errorMessage = `<p class="m-0 d-flex flex-column">
      <span class="text-main font-Bold-s20"> Welcome ! </span> 
      <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
        MR: ${Customer.Name_Customer} ,
        Sorry we have a little problem
      </span>
      </p>
    `;
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
        });
    } else {
      this.errorMessage = `<p class="m-0 d-flex flex-column">
    <span class="text-main font-Bold-s20"> Welcome ! </span> 
    <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
      MR: ${Customer.Name_Customer} ,
      Sorry you have a little problem 
      you must click on button (save new item)
    </span>
    </p>
  `;
    }
  }

  numberOnly(event: any, id: string, index: number): boolean {
    if (id !== 'Phone_Customer' && id !== 'Id_Customer') {
      return true;
    }
    if (id == 'Id_Customer') {
      return false;
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
  addPro(id: string, amount: number, i: number) {
    this.indexChanged = i;
    if (id == 'add' && this.order.itemOrder[i].amount >= 0) {
      this.order.itemOrder[i].amount = this.order.itemOrder[i].amount + amount;
    } else if (id == 'minus' && this.order.itemOrder[i].amount > 1) {
      this.order.itemOrder[i].amount = this.order.itemOrder[i].amount - amount;
    } else if (id == 'minus' && this.order.itemOrder[i].amount == 1) {
      this.order.itemOrder.splice(i, 1);
    }
  }

  openReset() {
    if (!document.getElementById('update')?.click) {
      $('#make_order').modal('show');
    }
  }
  updateOrder() {
    this._order
      .updateOrder(this.order.idOfOrder, this.order.itemOrder)
      .then((res) => {
        this.indexChanged = -1;
        this.errorMessage = '';
      });
  }
}
