import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmazemService } from 'src/app/shared/services/armazem.service';
import { MunicipioService } from 'src/app/shared/services/municipio.service';
import { IMunicipio } from 'src/app/shared/models/imunicipio';

@Component({
  selector: 'app-armazem-update',
  templateUrl: './armazem-update.component.html',
  styleUrls: ['./armazem-update.component.scss'],
})
export class ArmazemUpdateComponent implements OnInit {
  armazemId: string;

  armazemForm: FormGroup;

  get armazemFormControl() {
    return this.armazemForm.controls;
  }

  constructor(
    private armazemService: ArmazemService,
    private municipioService: MunicipioService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.armazemForm = fb.group({
      nome: ['', Validators.required],
      municipio_id: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      cep: ['', Validators.required],
    });
  }

  municipioList: IMunicipio[];

  ngOnInit(): void {
    this.armazemId = this.route.snapshot.paramMap.get('id');
    this.armazemService.readById(this.armazemId).subscribe((armazem) => {
      this.armazemForm.controls['nome'].setValue(armazem.nome);
      this.armazemForm.controls['logradouro'].setValue(armazem.logradouro);
      this.armazemForm.controls['numero'].setValue(armazem.numero);
      this.armazemForm.controls['complemento'].setValue(armazem.complemento);
      this.armazemForm.controls['cep'].setValue(armazem.cep);
      this.armazemForm.controls['municipio_id'].setValue(armazem.municipio_id);
      this.municipioService.readMunicipio().subscribe(data => {this.municipioList = data['lista']});
    });
  }

  errorMessage: string = '';

  updateArmazem(): void {
    this.armazemService.update(this.armazemForm.value, this.armazemId).subscribe({
      next: data => {
        this.armazemService.showMessage(
          'Local de armazenagem atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/armazem']);
      },
      error: err => {
        this.errorMessage = err.error['detail'];
      }
      });
  }

  cancel(): void {
    this.router.navigate(['/armazem']);
  }
}
