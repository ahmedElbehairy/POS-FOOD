import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Option, sleect } from 'src/app/core/model/inputForm';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
})
export class InputSelectComponent {
  constructor(public _router:Router){}
  @Input() data: sleect[] = [];
  @Output() dataOfDropdown = new EventEmitter<any>();
  isLoading: boolean = false;
  options!: Option[];
  ngOnInit() {
    this.isLoading = true;
  }

  ngOnChanges(changes: any) {}

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
}
