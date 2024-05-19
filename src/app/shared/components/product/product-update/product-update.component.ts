import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { IUnidadeMedida } from 'src/app/shared/models/unidade-medida';
import { IMarca } from 'src/app/shared/models/imarca.model';
import { UnidadeMedidaService } from 'src/app/shared/services/unidade-medida.service';
import { MarcaService } from 'src/app/shared/services/marca.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  productId: string;

  productForm: FormGroup;

  get productFormControl() {
    return this.productForm.controls;
  }

  constructor(
    private productService: ProductService,
    private unidadeService: UnidadeMedidaService,
    private marcaService: MarcaService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = fb.group({
      nome: ['', Validators.required],
      unidade_medida_id: ['', Validators.required],
      marca_id: ['', Validators.required],
    });
  }

  unidadeList: IUnidadeMedida[];
  marcaList: IMarca[];


  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('productId' + this.productId)
    this.productService.readById(this.productId).subscribe((product) => {
      this.productForm.controls['nome'].setValue(product.nome);
      this.productForm.controls['unidade_medida_id'].setValue(product.unidade_medida_id);
      this.unidadeService.readUnidade().subscribe(data => {this.unidadeList = data['lista']});
      this.productForm.controls['marca_id'].setValue(product.marca_id);
      this.marcaService.readMarca().subscribe(data => {this.marcaList = data['lista']});
    });
  }

  errorMessage: string = '';
  updateProduct(): void {
    this.productService.update(this.productForm.value, this.productId).subscribe({
      next: data => {
        this.productService.showMessage(
          'Produto atualizado com sucesso!',
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
