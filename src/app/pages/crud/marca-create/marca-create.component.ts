import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMarca } from 'src/app/shared/models/imarca.model';
import { MarcaService } from 'src/app/shared/services/marca.service';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.scss'],
})
export class MarcaCreateComponent implements OnInit {
  marcaForm: FormGroup;

  constructor(
    private marcaService: MarcaService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.marcaForm = fb.group({
      nome: ['', Validators.required],
    });
  }

  get marca(): IMarca {
    const marca = this.marcaForm.value;
    return marca;
  }

  get marcaFormControl() {
    return this.marcaForm.controls;
  }

  ngOnInit(): void {}

  errorMessage: string = '';
  createMarca(): void {
    this.marcaService.createMarca(this.marca).subscribe({
      next: data => {
        this.marcaService.showMessage(
          'Marca criado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/marca']);
      },
      error: err => {
        this.errorMessage = err.error['detail'];
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/marca']);
  }
}
