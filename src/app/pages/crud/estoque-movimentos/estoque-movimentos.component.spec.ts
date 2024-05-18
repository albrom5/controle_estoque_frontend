import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueMovimentosComponent } from './estoque-movimentos.component';

describe('EstoqueMovimentosComponent', () => {
  let component: EstoqueMovimentosComponent;
  let fixture: ComponentFixture<EstoqueMovimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueMovimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueMovimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
