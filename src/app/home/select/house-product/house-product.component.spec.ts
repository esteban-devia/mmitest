import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseProductComponent } from './house-product.component';

describe('HouseProductComponent', () => {
  let component: HouseProductComponent;
  let fixture: ComponentFixture<HouseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
