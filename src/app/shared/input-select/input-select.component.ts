import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Option, sleect } from 'src/app/core/model/inputForm';
import { newCategory } from 'src/app/core/model/product';
import { CategoryService } from 'src/app/core/service/category.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
})
export class InputSelectComponent {
  constructor(public _router:Router , private _Category:CategoryService){}
  
  @Input() data: sleect[] = [];
  successMessage!:string
  selectedItem:any
  errorMessage!:string
  @Output() dataOfDropdown = new EventEmitter<any>();
  isLoading: boolean = false;
  options!: Option[];
  ngOnInit() {
    this.isLoading = true;
  }

  ngOnChanges(changes: any) {
    if (
      !changes?.['edit']?.firstChange &&
      !changes?.['data']?.firstChange &&
      changes?.['edit']?.currentValue?.length !== 0 &&
      changes?.['data']?.currentValue?.length !== 0
    ) {
      this.selectedItem = this.data[0].options.find(item => item.id === this.data[0].ng_model);
    }  
  }

  select(option: Option, index: number) {
    if (option == undefined) {
      this.data[index].ng_model = 0;
    } else {
      this.data[index].ng_model = option.id;
      option = { name: this.data[index].id, id: option.id }; 
      this.dataOfDropdown.emit(option);
    }
  }

  private _filter(name: string): Option[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(
      (option) => option && option.name.toLowerCase().includes(filterValue)
    );
  }
  newCategory(event:any){
    let check:boolean = true
    this.data[0].options.map(el => {
      if(el.name == event.target.value){
        check =  false
      }else if (event.target.value == ''){
        check =  false
      }
      else {
        check = true
      }
    })
    if(check) {
      this.ngSubmitCatigories({name:event.target.value , id:this.data[0].options.length + 1})
    }
  }
  ngSubmitCatigories(formValue:newCategory){
      this._Category.addCategory(formValue.name , formValue).then((res:any) => {
          let input:any = document.getElementById('category') 
          input.value = ''
          this.successMessage = ` <p class="m-0 d-flex flex-column">
          <span class="text-main font-Bold-s20"> Welcome ! </span> 
          <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            add your new Category Success !!
          </span>
          </p>
        `
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
      }).catch(err => {
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
}
