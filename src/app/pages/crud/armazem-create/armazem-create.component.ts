import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';

@Component({
  selector: 'app-armazem-create',
  templateUrl: './armazem-create.component.html',
  styleUrls: ['./armazem-create.component.scss'],
})
export class ArmazemCreateComponent implements OnInit {
  armazemForm: FormGroup;

  constructor(
    private armazemService: ArmazemService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.armazemForm = fb.group({
      name: ['', Validators.required],
    });
  }

  get armazem(): IArmazem {
    const armazem = this.armazemForm.value;
    return armazem;
  }

  get armazemFormControl() {
    return this.armazemForm.controls;
  }

  ngOnInit(): void {}

  createArmazem(): void {
    this.armazemService.createArmazem(this.armazem).subscribe(() => {
      this.armazemService.showMessage(
        'Armazem criado com sucesso!',
        'backsnack'
      );
      this.router.navigate(['/armazem']);
      console.log(this.armazem);
    });
  }

  cancel(): void {
    this.router.navigate(['/armazem']);
  }
}
