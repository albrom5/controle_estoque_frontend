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
      name: ['', Validators.required],
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

  createMarca(): void {
    this.marcaService.createMarca(this.marca).subscribe(() => {
      this.marcaService.showMessage(
        'Marca criada com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/marca']);
      console.log(this.marca);
    });
  }

  cancel(): void {
    this.router.navigate(['/marca']);
  }
}
