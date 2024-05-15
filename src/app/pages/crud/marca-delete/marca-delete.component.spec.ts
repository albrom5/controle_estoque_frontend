import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDeleteComponent } from './marca-delete.component';

describe('MarcaDeleteComponent', () => {
  let component: MarcaDeleteComponent;
  let fixture: ComponentFixture<MarcaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
