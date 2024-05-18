import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imovimento } from 'src/app/shared/models/imovimento';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEstoque } from 'src/app/shared/models/iestoque.model';

@Component({
  selector: 'app-dialog-movimento-saida',
  templateUrl: './dialog-movimento-saida.component.html',
  styleUrls: ['./dialog-movimento-saida.component.scss']
})
export class DialogMovimentoSaidaComponent implements OnInit {
  movimentoForm: FormGroup;

  constructor(
    private estoqueService: EstoqueService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {'estoque_id': string} 
  ) {
    this.movimentoForm = fb.group({
      quantidade: ['', Validators.required],
    });
  }

  get movimento(): Imovimento {
    const movimento = this.movimentoForm.value;
    return movimento;
  };

  get movimentoFormControl() {
    return this.movimentoForm.controls;
  }
  saidaEstoque(): void {
    const estoque_id = this.data['estoque_id']
    this.movimento.tipo = 'S'
    this.estoqueService.movimentaEstoque(this.movimento, estoque_id).subscribe(() => {
      this.estoqueService.showMessage(
        'Saída de estoque resgistrada com sucesso!',
        'backsnack'
      );
    });
    this.dialog.closeAll()
  }

  estoque: IEstoque;

  ngOnInit(): void {
    const estoque_id = this.data['estoque_id']
    this.estoqueService.readById(estoque_id).subscribe((estoque) => {
      this.estoque = estoque
    });
  }
}
