import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMovimentoEntradaComponent } from './dialog-movimento-entrada.component';

describe('DialogMovimentoEntradaComponent', () => {
  let component: DialogMovimentoEntradaComponent;
  let fixture: ComponentFixture<DialogMovimentoEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMovimentoEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMovimentoEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
