import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrudComponent } from '../crud/crud.component';
import { ProductReadComponent } from '../crud/product-read/product-read.component';
import { ProductCreateComponent } from '../crud/product-create/product-create.component';
import { ProductDeleteComponent } from '../crud/product-delete/product-delete.component';
import { ProductUpdateComponent } from '../../shared/components/product/product-update/product-update.component';

import { MarcaCrudComponent } from '../crud/marca-crud/marca-crud.component';
import { MarcaCreateComponent } from '../crud/marca-create/marca-create.component';
import { MarcaDeleteComponent } from '../crud/marca-delete/marca-delete.component';
import { MarcaUpdateComponent } from '../../shared/components/marca/marca-update/marca-update.component';

import { ArmazemCrudComponent } from '../crud/armazem-crud/armazem-crud.component';
import { ArmazemCreateComponent } from '../crud/armazem-create/armazem-create.component';
import { ArmazemDeleteComponent } from '../crud/armazem-delete/armazem-delete.component';
import { ArmazemUpdateComponent } from '../../shared/components/armazem/armazem-update/armazem-update.component';

import { EstoqueCrudComponent } from '../crud/estoque-crud/estoque-crud.component';
import { EstoqueCreateComponent } from '../crud/estoque-create/estoque-create.component';
import { EstoqueDeleteComponent } from '../crud/estoque-delete/estoque-delete.component';
import { EstoqueUpdateComponent } from '../../shared/components/estoque/estoque-update/estoque-update.component';

import { HomeComponent } from './home.component';

import { LoginComponent } from '../crud/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'products', component: ProductReadComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/delete/:id', component: ProductDeleteComponent },

  { path: 'marca', component: MarcaCrudComponent },
  { path: 'marca/create', component: MarcaCreateComponent },
  { path: 'marca/update/:id', component: MarcaUpdateComponent },
  { path: 'marca/delete/:id', component: MarcaDeleteComponent },

  { path: 'armazem', component: ArmazemCrudComponent },
  { path: 'armazem/create', component: ArmazemCreateComponent },
  { path: 'armazem/update/:id', component: ArmazemUpdateComponent },
  { path: 'armazem/delete/:id', component: ArmazemDeleteComponent },

  { path: 'estoque', component: EstoqueCrudComponent },
  { path: 'estoque/create', component: EstoqueCreateComponent },
  { path: 'estoque/update/:id', component: EstoqueUpdateComponent },
  { path: 'estoque/delete/:id', component: EstoqueDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
