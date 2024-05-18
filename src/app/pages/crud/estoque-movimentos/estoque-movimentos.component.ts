import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { IEstoque } from 'src/app/shared/models/iestoque.model';

@Component({
  selector: 'app-estoque-movimentos',
  templateUrl: './estoque-movimentos.component.html',
  styleUrls: ['./estoque-movimentos.component.scss']
})
export class EstoqueMovimentosComponent implements OnInit {
  estoqueId: string;
  displayedColumns = ['tipo', 'quantidade', 'preco', 'data'];

  constructor(
    private estoqueService: EstoqueService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  estoque: IEstoque;

  ngOnInit(): void {
    this.estoqueId = this.route.snapshot.paramMap.get('id');
    this.estoqueService.readById(this.estoqueId).subscribe((estoque) => {
      this.estoque = estoque
    });
  }

  cancel(): void {
    this.router.navigate(['/estoque']);
  }

}
