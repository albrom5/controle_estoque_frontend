import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEstoque } from 'src/app/shared/models/iestoque.model';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-estoque-create',
  templateUrl: './estoque-create.component.html',
  styleUrls: ['./estoque-create.component.scss'],
})
export class EstoqueCreateComponent implements OnInit {
  estoqueForm: FormGroup;

  constructor(
    private estoqueService: EstoqueService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.estoqueForm = fb.group({
      name: ['', Validators.required],
    });
  }

  get estoque(): IEstoque {
    const estoque = this.estoqueForm.value;
    return estoque;
  }

  get estoqueFormControl() {
    return this.estoqueForm.controls;
  }

  ngOnInit(): void {}

  createEstoque(): void {
    this.estoqueService.createEstoque(this.estoque).subscribe(() => {
      this.estoqueService.showMessage(
        'Estoque criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/estoque']);
      console.log(this.estoque);
    });
  }

  cancel(): void {
    this.router.navigate(['/estoque']);
  }
}
