import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from 'src/app/shared/services/marca.service';

@Component({
  selector: 'app-marca-update',
  templateUrl: './marca-update.component.html',
  styleUrls: ['./marca-update.component.scss'],
})
export class MarcaUpdateComponent implements OnInit {
  marcaId: string;

  marcaForm: FormGroup;

  get marcaFormControl() {
    return this.marcaForm.controls;
  }

  constructor(
    private marcaService: MarcaService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.marcaForm = fb.group({
      nome: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.marcaId = this.route.snapshot.paramMap.get('id');
    this.marcaService.readById(this.marcaId).subscribe((marca) => {
      this.marcaForm.controls['nome'].setValue(marca.nome);
    });
  }

  errorMessage: string = '';
  updateMarca(): void {
    this.marcaService.update(this.marcaForm.value, this.marcaId).subscribe({
      next: data => {
        this.marcaService.showMessage(
          'Marca atualizada com sucesso!',
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
