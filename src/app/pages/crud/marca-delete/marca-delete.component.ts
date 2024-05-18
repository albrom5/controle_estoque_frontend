import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarcaService } from 'src/app/shared/services/marca.service';

@Component({
  selector: 'app-marca-delete',
  templateUrl: './marca-delete.component.html',
  styleUrls: ['./marca-delete.component.scss']
})

export class MarcaDeleteComponent implements OnInit {
  marcaId: string;

  marcaForm: FormGroup;

  get marcaFormControl() {
    return this.marcaForm.controls;
  }

  constructor(
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
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

  deleteMarca(): void {
    this.marcaService.delete(this.marcaId).subscribe((marca) => {
      this.marcaService.showMessage(
        'Marca excluída com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/marca']);
    });
  }

  cancel(): void {
    this.router.navigate(['/marca']);
  }
}
