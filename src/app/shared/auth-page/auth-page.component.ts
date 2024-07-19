import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Forms, input, layOutOfPage } from '../../core/model/Auth';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  @Input() inputOfPage: input[] = [];
  @Input() objectOfPage!: layOutOfPage;
  @Input() buttonStatus!: boolean;

  @Output() ValueOfForm = new EventEmitter<Forms>();

  constructor(public _router: Router) {}

  SendData(formValue: Forms) {
    this.ValueOfForm.emit(formValue);
  }
}
