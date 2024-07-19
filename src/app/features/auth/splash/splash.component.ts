import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  constructor(private _router:Router){}
  ngOnInit() { 
    setTimeout(() => {
      this._router.navigate(['/login'])
    }, 1500);
  }
}
