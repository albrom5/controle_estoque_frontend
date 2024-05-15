import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-estoque-delete',
  templateUrl: './estoque-delete.component.html',
  styleUrls: ['./estoque-delete.component.scss'],
})
export class EstoqueDeleteComponent implements OnInit {
  estoqueId: string;

  estoqueForm: FormGroup;

  get productFormControl() {
    return this.estoqueForm.controls;
  }

  constructor(
    private estoqueService: EstoqueService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.estoqueForm = fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.estoqueId = this.route.snapshot.paramMap.get('id');
    this.estoqueService.readById(this.estoqueId).subscribe((estoque) => {
      this.estoqueForm.controls['produto_nome'].setValue(estoque.produto_nome);
    });
  } 

  deleteEstoque(): void {
    this.estoqueService.delete(this.estoqueId).subscribe((estoque) => {
      this.estoqueService.showMessage(
        'Estoque excluído com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/estoque']);
    });
  }

  cancel(): void {
    this.router.navigate(['/estoque']);
  }
}
