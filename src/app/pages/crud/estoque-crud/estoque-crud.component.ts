import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estoque-crud-component',
  templateUrl: './estoque-crud.component.html',
  styleUrls: ['./estoque-crud.component.scss']
})
export class EstoqueCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEstoqueCreate(): void {
    this.router.navigate(['/estoque/create']);
  }
}
