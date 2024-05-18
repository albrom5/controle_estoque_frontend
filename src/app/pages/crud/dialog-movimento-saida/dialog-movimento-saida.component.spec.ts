import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMovimentoSaidaComponent } from './dialog-movimento-saida.component';

describe('DialogMovimentoSaidaComponent', () => {
  let component: DialogMovimentoSaidaComponent;
  let fixture: ComponentFixture<DialogMovimentoSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMovimentoSaidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMovimentoSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
