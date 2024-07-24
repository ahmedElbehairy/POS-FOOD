import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOrderComponent } from './print-order.component';

describe('MakeOrderComponent', () => {
  let component: PrintOrderComponent;
  let fixture: ComponentFixture<PrintOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
