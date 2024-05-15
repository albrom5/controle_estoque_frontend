import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-armazem-crud-component',
  templateUrl: './armazem-crud.component.html',
  styleUrls: ['./armazem-crud.component.scss']
})
export class ArmazemCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArmazemCreate(): void {
    this.router.navigate(['/armazem/create']);
  }
}
