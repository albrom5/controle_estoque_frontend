import { Component, OnInit } from '@angular/core';
import { IMarca } from 'src/app/shared/models/imarca.model';
import { MarcaService } from 'src/app/shared/services/marca.service';



@Component({
  selector: 'app-marca-read',
  templateUrl: './marca-read.component.html',
  styleUrls: ['./marca-read.component.scss'],
})
export class MarcaReadComponent implements OnInit {
  marcas!: IMarca[];

  displayedColumns = ['name','action'];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.readMarca().subscribe((marcas) => {
      this.marcas = marcas['lista'];
      this.sortMarcasAlphabetically();

    });
  
  }

  sortMarcasAlphabetically(): void {
    this.marcas.sort((a, b) => a.nome.localeCompare(b.nome));
  }




}
