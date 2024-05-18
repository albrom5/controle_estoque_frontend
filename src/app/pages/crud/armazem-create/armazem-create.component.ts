import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';
import { MunicipioService } from 'src/app/shared/services/municipio.service';
import { IMunicipio } from 'src/app/shared/models/imunicipio';

@Component({
  selector: 'app-armazem-create',
  templateUrl: './armazem-create.component.html',
  styleUrls: ['./armazem-create.component.scss'],
})
export class ArmazemCreateComponent implements OnInit {
  armazemForm: FormGroup;

  constructor(
    private armazemService: ArmazemService,
    private municipioService: MunicipioService,
    private router: Router,
    private fb: FormBuilder
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

  get armazem(): IArmazem {
    const armazem = this.armazemForm.value;
    return armazem;
  }

  get armazemFormControl() {
    return this.armazemForm.controls;
  }

  municipioList: IMunicipio[];

  ngOnInit(): void {
    this.municipioService.readMunicipio().subscribe(data => {this.municipioList = data['lista']});
  }

  createArmazem(): void {
    this.armazemService.createArmazem(this.armazem).subscribe(() => {
      this.armazemService.showMessage(
        'Armazem criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/armazem']);
    });
  }

  cancel(): void {
    this.router.navigate(['/armazem']);
  }
}
