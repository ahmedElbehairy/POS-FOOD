import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Forms, input, layOutOfPage } from '../../core/model/Auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  @Input() inputOfPage: input[] = [];
  @Input() objectOfPage!: layOutOfPage;
  @Input() buttonStatus!: boolean;
  @Output() photo = new EventEmitter<any>();
  @Output() ValueOfForm = new EventEmitter<Forms>();

  constructor(public _router: Router , private spinner: NgxSpinnerService , private storage: AngularFireStorage) {}

  SendData(formValue: Forms) {
    this.ValueOfForm.emit(formValue);
  }
  loginWithGoogle(){

  }
  loginWithFacebook(){
    
  }

  downloadURL!:string
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
            this.photo.emit(this.downloadURL)
            this.spinner.hide()
          });
        })
      ).subscribe();
    } else {
      this.spinner.hide()
    }
  }
}
