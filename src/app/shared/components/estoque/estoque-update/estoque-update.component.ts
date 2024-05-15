import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

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
      produto_nome: ['', Validators.required],
      armazem_nome: ['', Validators.required],
      produto_unidade_medida: ['', Validators.required],
      produto_marca: ['', Validators.required],
      quantidade: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.estoqueId = this.route.snapshot.paramMap.get('id');
    console.log('estoqueId' + this.estoqueId)
    this.estoqueService.readById(this.estoqueId).subscribe((estoque) => {
      this.estoqueForm.controls['produto_nome'].setValue(estoque.produto_nome);
      this.estoqueForm.controls['armazem_nome'].setValue(estoque.armazem_nome);
      this.estoqueForm.controls['produto_unidade_medida'].setValue(estoque.produto_unidade_medida);
      this.estoqueForm.controls['produto_marca'].setValue(estoque.produto_marca);
      this.estoqueForm.controls['quantidade'].setValue(estoque.quantidade);
      this.estoqueForm.controls['preco'].setValue(estoque.preco);
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
