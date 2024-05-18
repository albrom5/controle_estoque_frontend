import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/iproduct.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { MarcaService } from 'src/app/shared/services/marca.service';
import { UnidadeMedidaService } from 'src/app/shared/services/unidade-medida.service';
import { IMarca } from 'src/app/shared/models/imarca.model'; 
import { IUnidadeMedida } from 'src/app/shared/models/unidade-medida';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private unidadeService: UnidadeMedidaService
  ) {
    this.productForm = fb.group({
      nome: ['', Validators.required],
      unidade_medida_id: ['', Validators.required],
      marca_id: ['', Validators.required],
    });
  }

  get product(): IProduct {
    const product = this.productForm.value;
    return product;
  }

  get productFormControl() {
    return this.productForm.controls;
  }
  
  marcaList: IMarca[];
  unidadeList: IUnidadeMedida[];

  ngOnInit(){
    this.marcaService.readMarca().subscribe(data => {this.marcaList = data['lista']});
    this.unidadeService.readUnidade().subscribe(data => {this.unidadeList = data['lista']});

  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage(
        'Produto criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/produtos']);
      console.log(this.product);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
