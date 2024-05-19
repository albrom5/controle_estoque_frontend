import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { IUnidadeMedida } from 'src/app/shared/models/unidade-medida';
import { IMarca } from 'src/app/shared/models/imarca.model';
import { UnidadeMedidaService } from 'src/app/shared/services/unidade-medida.service';
import { MarcaService } from 'src/app/shared/services/marca.service';
import { IProduct } from 'src/app/shared/models/iproduct.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  productId: string;

  productForm: FormGroup;

  get productFormControl() {
    return this.productForm.controls;
  }

  constructor(
    private productService: ProductService,
    private unidadeService: UnidadeMedidaService,
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      nome: ['', Validators.required],
      unidade_medida_id: ['', Validators.required],
      marca_id: ['', Validators.required],
    });
  }

  unidadeList: IUnidadeMedida[];
  marcaList: IMarca[];

  produto: IProduct;

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.productId).subscribe((product) => {
      this.produto = product
    });
  }
  errorMessage: string;
  deleteProduct(): void {
    this.productService.delete(this.productId).subscribe({
      next: data => {
        this.productService.showMessage(
          'Produto excluído com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/produtos']);
      },
      error: err => {
        this.errorMessage = err.error['detail'];
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
