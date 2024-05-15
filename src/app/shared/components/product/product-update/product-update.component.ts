import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

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
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      validade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('productId' + this.productId)
    this.productService.readById(this.productId).subscribe((product) => {
      this.productForm.controls['name'].setValue(product.nome);
      // this.productForm.controls['price'].setValue(product.price);
      // this.productForm.controls['validade'].setValue(product.validade);
    });
  }

  updateProduct(): void {
    this.productService
      .update(this.productForm.value, this.productId)
      .subscribe((product) => {
        this.productService.showMessage(
          'Produto atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/crud']);
      });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }
}
