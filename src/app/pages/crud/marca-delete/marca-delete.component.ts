import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from 'src/app/shared/services/marca.service';
import { IMarca } from 'src/app/shared/models/imarca.model';

@Component({
  selector: 'app-marca-delete',
  templateUrl: './marca-delete.component.html',
  styleUrls: ['./marca-delete.component.scss']
})

export class MarcaDeleteComponent implements OnInit {
  marcaId: string;

  constructor(
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  marca: IMarca
  ngOnInit(): void {
    this.marcaId = this.route.snapshot.paramMap.get('id');
    this.marcaService.readById(this.marcaId).subscribe((marca) => {
      this.marca = marca
    });
  }

  errorMessage: string;
  deleteMarca(): void {
    this.marcaService.delete(this.marcaId).subscribe({
      next: data => {
        this.marcaService.showMessage(
          'Marca excluída com sucesso!',
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
