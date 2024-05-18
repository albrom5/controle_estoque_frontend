import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { IProduct } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';
import { IEstoque } from 'src/app/shared/models/iestoque.model';

@Component({
  selector: 'app-estoque-delete',
  templateUrl: './estoque-delete.component.html',
  styleUrls: ['./estoque-delete.component.scss'],
})
export class EstoqueDeleteComponent implements OnInit {
  estoqueId: string;

  constructor(
    private estoqueService: EstoqueService,
    private produtoService: ProductService,
    private armazemService: ArmazemService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    }

  estoque: IEstoque;
  
  ngOnInit(): void {
    this.estoqueId = this.route.snapshot.paramMap.get('id');
    this.estoqueService.readById(this.estoqueId).subscribe((estoque) => {
      this.estoque = estoque
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
