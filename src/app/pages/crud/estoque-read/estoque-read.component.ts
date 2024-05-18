import { Component, OnInit } from '@angular/core';
import { IEstoque } from 'src/app/shared/models/iestoque.model';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { IArmazem } from 'src/app/shared/models/iarmazem.model';
import { ArmazemService } from 'src/app/shared/services/armazem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovimentoEntradaComponent } from '../dialog-movimento-entrada/dialog-movimento-entrada.component';

@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.scss'],
})
export class EstoqueReadComponent implements OnInit {
  estoques!: IEstoque[];
  
  displayedColumns = [ 'armazem', 'produto_nome', 'preco', 'quantidade', 'action'];

  constructor(
    private estoqueService: EstoqueService,
    private armazemService: ArmazemService,
    public dialog: MatDialog
  ) {}

  armazemList: IArmazem[];

  ngOnInit(): void {
    this.armazemService.readArmazem().subscribe(data => {this.armazemList = data['lista']})
    this.estoqueService.readEstoque().subscribe((estoques) => {
      this.estoques = estoques['lista'];
      this.sortEstoquesAlphabetically();
    });
  }

  sortEstoquesAlphabetically(): void {
    this.estoques.sort((a, b) => a.produto_nome.localeCompare(b.produto_nome));
  };

  selectedArmazem: string = 'all';

  filterbyArmazem(): void {
    if (this.selectedArmazem === 'all') {
      this.selectedArmazem = '';
    };
    this.estoqueService.readEstoquebyArmazem(this.selectedArmazem).subscribe((estoques) => {
      this.estoques = estoques['lista'];
      this.sortEstoquesAlphabetically();
    });
  }

  entradaEstoqueDialog(estoque_id: string) {
    const dialogRef = this.dialog.open(
      DialogMovimentoEntradaComponent, 
      {data: {'estoque_id': estoque_id}}
    );

    dialogRef.afterClosed().subscribe(result => {
      this.filterbyArmazem();
    });    
    
  }

}
