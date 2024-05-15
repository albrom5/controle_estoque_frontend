import { Component, OnInit } from '@angular/core';
import { IEstoque } from 'src/app/shared/models/iestoque.model';
import { EstoqueService } from 'src/app/shared/services/estoque.service';



@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.scss'],
})
export class EstoqueReadComponent implements OnInit {
  estoques!: IEstoque[];

  displayedColumns = [ 'armazem', 'produto_nome', 'preco', 'quantidade', 'action'];

  constructor(private estoqueService: EstoqueService) {}

  ngOnInit(): void {
    this.estoqueService.readEstoque().subscribe((estoques) => {
      this.estoques = estoques;
      this.sortEstoquesAlphabetically();

    });
  
  }

sortEstoquesAlphabetically(): void {
    this.estoques.sort((a, b) => a.produto_nome.localeCompare(b.produto_nome));
  }




}
