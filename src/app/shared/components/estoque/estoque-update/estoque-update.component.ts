import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { IEstoque } from 'src/app/shared/models/iestoque.model';

@Component({
  selector: 'app-estoque-update',
  templateUrl: './estoque-update.component.html',
  styleUrls: ['./estoque-update.component.scss'],
})
export class EstoqueUpdateComponent implements OnInit {
  estoqueId: string;

  estoqueForm: FormGroup;

  get estoqueFormControl() {
    return this.estoqueForm.controls;
  }

  constructor(
    private estoqueService: EstoqueService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.estoqueForm = fb.group({
      preco: ['', Validators.required],
    });
  }

  estoque: IEstoque;

  ngOnInit(): void {
    this.estoqueId = this.route.snapshot.paramMap.get('id');
    this.estoqueService.readById(this.estoqueId).subscribe((estoque) => {
      this.estoqueForm.controls['preco'].setValue(estoque.preco);
      this.estoque = estoque
    });

  }

  updateEstoque(): void {
    this.estoqueService
      .update(this.estoqueForm.value, this.estoqueId)
      .subscribe((estoque) => {
        this.estoqueService.showMessage(
          'Estoque atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/estoque']);
      });
  }

  cancel(): void {
    this.router.navigate(['/estoque']);
  }
}
