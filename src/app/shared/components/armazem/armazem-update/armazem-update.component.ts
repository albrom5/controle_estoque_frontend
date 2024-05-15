import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmazemService } from 'src/app/shared/services/armazem.service';

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
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.armazemForm = fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.armazemId = this.route.snapshot.paramMap.get('id');
    this.armazemService.readById(this.armazemId).subscribe((armazem) => {
      this.armazemForm.controls['name'].setValue(armazem.name);
    });
  }

  updateArmazem(): void {
    this.armazemService
      .update(this.armazemForm.value, this.armazemId)
      .subscribe((armazem) => {
        this.armazemService.showMessage(
          'Armazem atualizado com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/armazem']);
      });
  }

  cancel(): void {
    this.router.navigate(['/armazem']);
  }
}
