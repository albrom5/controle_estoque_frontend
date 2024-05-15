import { Component, OnInit } from '@angular/core';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';



@Component({
  selector: 'app-armazem-read',
  templateUrl: './armazem-read.component.html',
  styleUrls: ['./armazem-read.component.scss'],
})
export class ArmazemReadComponent implements OnInit {
  armazens!: IArmazem[];

  displayedColumns = ['id', 'name','action'];

  constructor(private armazemService: ArmazemService) {}

  ngOnInit(): void {
    this.armazemService.readArmazem().subscribe((armazens) => {
      this.armazens = armazens;
      this.sortArmazensAlphabetically();

    });
  
  }

sortArmazensAlphabetically(): void {
    this.armazens.sort((a, b) => a.name.localeCompare(b.name));
  }




}
