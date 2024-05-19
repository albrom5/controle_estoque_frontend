import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmazemService } from 'src/app/shared/services/armazem.service';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';

@Component({
  selector: 'app-armazem-delete',
  templateUrl: './armazem-delete.component.html',
  styleUrls: ['./armazem-delete.component.scss']
})
export class ArmazemDeleteComponent implements OnInit {
  armazemId: string;

  constructor(
    private armazemService: ArmazemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  armazem: IArmazem

  ngOnInit(): void {
    this.armazemId = this.route.snapshot.paramMap.get('id');
    this.armazemService.readById(this.armazemId).subscribe((armazem) => {
      this.armazem = armazem
    });
  }

  errorMessage: string;
  deleteArmazem(): void {
    this.armazemService.delete(this.armazemId).subscribe({
      next: data => {
        this.armazemService.showMessage(
          'Local de armazenagem excluído com sucesso!',
          'backsnack'
        );
        this.router.navigate(['/produtos']);
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
