import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEstoque } from 'src/app/shared/models/iestoque.model';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { IProduct } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';

@Component({
  selector: 'app-estoque-create',
  templateUrl: './estoque-create.component.html',
  styleUrls: ['./estoque-create.component.scss'],
})
export class EstoqueCreateComponent implements OnInit {
  estoqueForm: FormGroup;

  constructor(
    private estoqueService: EstoqueService,
    private produtoService: ProductService,
    private armazemService: ArmazemService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.estoqueForm = fb.group({
      armazem_id: ['', Validators.required],
      produto_id: ['', Validators.required],
      quantidade: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  get estoque(): IEstoque {
    const estoque = this.estoqueForm.value;
    return estoque;
  }

  get estoqueFormControl() {
    return this.estoqueForm.controls;
  }

  armazemList: IArmazem[];
  produtoList: IProduct[];

  ngOnInit(): void {
    this.armazemService.readArmazem().subscribe(data => {this.armazemList = data['lista']});
    this.produtoService.readProduct().subscribe(data => {this.produtoList = data['lista']});
  }

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
