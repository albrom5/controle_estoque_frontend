import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imovimento } from 'src/app/shared/models/imovimento';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-movimento-entrada',
  templateUrl: './dialog-movimento-entrada.component.html',
  styleUrls: ['./dialog-movimento-entrada.component.scss']
})
export class DialogMovimentoEntradaComponent implements OnInit {
  movimentoForm: FormGroup;

  constructor(
    private estoqueService: EstoqueService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {'estoque_id': string} 
  ) { 
    this.movimentoForm = fb.group({
      quantidade: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  get movimento(): Imovimento {
    const movimento = this.movimentoForm.value;
    return movimento;
  };

  get movimentoFormControl() {
    return this.movimentoForm.controls;
  }
  entradaEstoque(): void {
    const estoque_id = this.data['estoque_id']
    this.movimento.tipo = 'E'
    this.estoqueService.movimentaEstoque(this.movimento, estoque_id).subscribe(() => {
      this.estoqueService.showMessage(
        'Entrada de estoque resgistrada com sucesso!',
        'backsnack'
      );
    });
    this.dialog.closeAll()
  }

  ngOnInit(): void {
  }

}
